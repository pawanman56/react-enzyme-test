function fetchPosts () {
    return fetch('https://jasonplaceholder.typicode.com/posts').then((postsResponse) => {
        if (postsResponse.ok) return postsResponse.json();
        return Promise.reject();
    });
};

export default fetchPosts;
