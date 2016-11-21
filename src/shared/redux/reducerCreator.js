function clearErrorOffline(field, clearAll, errors) {
    if(!clearAll) {
        delete errors[field];
        return errors;
    }
    else {
        return {};
    }
}

export function buildRequestReducers(constants = {
    success: "",
    error: "",
    start: "",
    clearError: "",
    clearSuccess: ""
}) {
    return [
        (state = false, action = {type: ""}) => {
            switch (action.type) {
                case constants.start:
                    return true;
                case constants.success:
                case constants.error:
                    return false;
                default:
                    return state;
            }
        },
        (state = {}, action = {type: ""}) => {
            switch (action.type) {
                case constants.success:
                case constants.clearError:
                    return clearErrorOffline(action.field, action.clearAll, Object.assign({}, state));
                case constants.error:
                    return Object.assign({}, state, action.errorData);
                default:
                    return state;
            }
        },
        (state = false, action = {type: ""}) => {
            switch (action.type) {
                case constants.start:
                case constants.error:
                case constants.clearSuccess:
                    return false;
                case constants.success:
                    return true;
                default:
                    return state;
            }
        }
    ];
}
