export default function passAllPostsReducer(state = 0, { type, payload }) {
    switch (type) {
        case "PASS_ALL_POSTS": {
            return payload.allPostsData;
        }
        default:
            return state;
    }
}
