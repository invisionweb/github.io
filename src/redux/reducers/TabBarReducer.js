export default function tabBarReducer(state = 0, { type, payload }) {
    switch (type) {
        case "UPDATE_TAB": {
            return payload.tabValue;
        }
        default:
            return state;
    }
}
