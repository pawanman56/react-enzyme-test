import React from 'react';
import usePostsLoading from './usePostsLoading';

const Posts = () => {
    const { isLoading, posts, hasFailed } = usePostsLoading();

    if (hasFailed) return <div data-testid="posts-error">Something went wrong</div>;
    if (isLoading) return <div data-testid="posts-loading">Loading...</div>;
    if (posts?.length === 0) return <div data-testid="posts-empty">There are no posts to display</div>;

    return(
        <div data-testid="posts-container">
            {posts?.map((post) => {
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            })}
        </div>
    );
};

export default Posts;
