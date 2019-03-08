export function passAllPostData(allPostsData) {
    return {
        type: "PASS_ALL_POSTS",
        payload: {
            allPostsData: allPostsData
        }
    };
}
