
const fetchUrl = "http://localhost:5000/";

export const paths = {
    main: "/",
    boards: (boardName) => `/boards/${boardName}`, 
    posts: (boardName, postId) => `/boards/${boardName}/post/${postId}`
};


export const resourceUrls = {
    boards: `${fetchUrl}boards`
};