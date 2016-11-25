import jsdom from "jsdom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [ thunk ];
export const mockStore = configureMockStore(middlewares);

export function renderVirtualDocument() {
    const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
    global.document = doc;
    global.window = doc.defaultView;
    global.window.requestAnimationFrame = function(callback) { callback() ;};
    global.navigator = {
        userAgent: "node.js"
    };
    global.document.querySelector = () => {
        const fakeElement = document.createElement("div");
        fakeElement.offsetTop = 500;
        fakeElement.className = "fake-element";
        fakeElement.getBoundingClientRect = () => {
            return {
                top: 500,
                left: 400
            };
        };
        return fakeElement;
    };
}
