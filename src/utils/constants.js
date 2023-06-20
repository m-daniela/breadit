

export const paths = {
    main: "/",
    boards: (boardName) => `/boards/${boardName}`, 
    posts: (boardName, postId) => `boards/${boardName}/post/${postId}`
};