import fetch from "isomorphic-fetch";

export default {
    baseUrlTests: "http://0.0.0.0",
    baseUrlRegular: "",

    endpoints: {

    },

    getBaseUrl() {
        return process && process.env.NODE_ENV === "test" ? this.baseUrlTests : this.baseUrlRegular;
    },

    getEndpointUrl(endpointName) {
        return this.endpoints[endpointName] || "";
    },

    fetch(url, options = {}) {
        const requestOptions = {
            body: options.body,
            method: options.method || "GET",
            headers: {
                "access_token": options.token,
                "Content-Type": options.contentType
            }
        };

        return fetch(url, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                else {
                    return response
                        .json()
                        .then(
                            error => error,
                            () => {
                                throw new Error(`Error status: ${response.status}.`);
                            }
                        );
                }
            });
    }
};
