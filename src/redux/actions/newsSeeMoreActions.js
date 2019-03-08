export function readMore(post) {
    return {
        type: "NEWS_SEE_MORE",
        payload: {
            post: post
        }
    };
}
