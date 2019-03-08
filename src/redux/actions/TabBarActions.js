export function tabChange(value) {
    return {
        type: "UPDATE_TAB",
        payload: {
            tabValue: value
        }
    };
}
