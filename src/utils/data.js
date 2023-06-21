// dummy data

export const boards = [
    {
        id: "abcd123", 
        name: "bread",
        title: "Bread", 
        description: "Baking bread", 
        // category: "baking"
    },
    {
        id: "abcd124", 
        name: "cakes",
        title: "Cakes", 
        description: "All about baking and decorating cakes", 
        // category: "baking"
    },
];


export const posts = [
    {
        id: "post1", 
        title: "First post about bread", 
        description: "Bread bread bread bread bread bread bread bread bread bread", 
        postedAt: new Date()
    },
    {
        id: "post2", 
        title: "Second post about bread", 
        description: "Bread", 
        postedAt: new Date()
    },
    {
        id: "post3", 
        title: "Third post about bread", 
        description: "Too much bread already", 
        postedAt: new Date()
    },
];


export const comments = [
    {
        id: "comment1", 
        number: 1,
        text: "Breaddddd", 
        postedAt: new Date(), 
        postId: "post1"
    }, 
    {
        id: "comment2", 
        number: 2,
        text: "aaaaaa", 
        postedAt: new Date(), 
        postId: "post1"
    }, 
    {
        id: "comment3", 
        number: 3,
        text: "this is a comment", 
        postedAt: new Date(), 
        postId: "post2", 
        comments: [
            {
                id: "comment5", 
                number: 5,
                text: "this is a reply", 
                postedAt: new Date(), 
                postId: "post1", 
                commentId: "comment3"
            }
        ]
    }, 
    {
        id: "comment4", 
        number: 4,
        text: "test", 
        postedAt: new Date(), 
        postId: "post1"
    }
];