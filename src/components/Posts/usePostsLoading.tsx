import { useEffect, useState } from 'react';
import fetchPosts from './fetchPosts';

interface Post {
    id: number;
    title: string;
    body: string;
};

function usePostsLoading () {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ hasFailed, setHasFailed ] = useState(false);
    const [ posts, setPosts ] = useState<Post[] | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setHasFailed(false);

        fetchPosts().then((fetchedPosts: Post[]) => {
            setPosts(fetchedPosts);
        }).catch(() => {
            setHasFailed(true);
        }).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return {
        posts,
        isLoading,
        hasFailed
    }
};

export default usePostsLoading;
