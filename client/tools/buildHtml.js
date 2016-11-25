// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only want to track errors in the built production code.

// Allowing console calls below since this is a build file.
/* eslint-disable no-console */

import fs from "fs";
import fse from "fs-extra";
import {chalkSuccess, chalkError} from "./chalkConfig";
import cheerio from "cheerio";

export default function(hash) {
    const files = [
        {
            input: "./src/index.html",
            outputDir: "./dist/",
            bundleName: "main"
        }
    ];

    files.map(file => {
        fs.readFile(file.input, "utf8", (readError, markup) => {
            if (readError) {
                return console.error(chalkError(readError));
            }

            const $ = cheerio.load(markup);

            // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
            $("head").append("<link rel=\"stylesheet\" href=\"/assets/" + file.bundleName + ".css\">");
            $("#dev-scripts").remove();
            $("body").append("<script src=\"/assets/" + file.bundleName + "." + hash + ".js\" type=\"text/javascript\"></script>");

            fse.ensureDir(file.outputDir, ()=> {
                fs.writeFile(file.outputDir + "index.html", $.html(), "utf8", (writeError) => {
                    if (writeError) {
                        return console.error(chalkError(writeError));
                    }
                    console.log(chalkSuccess(`HTML file for ${file.bundleName} page written to /dist.`));

                    return writeError;
                });

                return readError;
            });
        });
    });

    fse.copy("src/favicons", "dist/favicons", function (error) {
        if (error) {
            return console.error(chalkError(error));
        }
        console.log(chalkSuccess("Favicons copied to /dist."));
    });
}
