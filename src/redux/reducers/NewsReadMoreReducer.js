export default function readMoreReducer(state = {}, { type, payload }) {
    switch (type) {
        case "NEWS_SEE_MORE": {
            return payload.post;
            
        }
        default:
            return state;
    }
}
