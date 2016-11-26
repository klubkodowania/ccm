import Api from "../../api";

export function buildActionCreator(type, ...argsNames) {
    return (...args) => {
        const action = { type };

        argsNames.map((argName, index) => {
            action[argsNames[index]] = args[index];
        });

        return action;
    };
}

function rejectResponseWithErrors(response) {
    if(response.level === "ERROR") {
        return new Promise(function(resolve, reject) {
            reject(response);
        });
    }
    else {
        return response;
    }
}

export function buildRequestActionCreator(options) {
    const {
        actions,
        request
    } = options;

    const [
        startAction,
        successAction,
        failAction
    ] = actions;

    return () => (dispatch, getState) => {
        dispatch(startAction());

        const token = getState().authorization && getState().authorization.token || undefined;

        const requestOptions = {
            method: request.method || "GET",
            contentType: request.contentType || "text/plain"
        };

        if(request.body) {
            requestOptions.body = request.body;
        }

        if(token) {
            requestOptions.token = token;
        }

        return Api
            .fetch(request.url, requestOptions)
            .then(response => rejectResponseWithErrors(response, dispatch, failAction))
            .then(request.responseTransformation)
            .then(data => dispatch(successAction(data)))
            .catch(error => {
                if(error && error.message) {
                    dispatch(failAction(error.message));
                } else {
                    dispatch(failAction(error));
                }
            });
    };
}
