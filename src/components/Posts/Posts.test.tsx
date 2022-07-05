import { render } from '@testing-library/react';
import React from 'react';
import Posts from './Posts';
import fetchPosts from './fetchPosts';

jest.mock('./fetchPosts', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('The Posts component', () => {
    describe('when the component fetches and empty arrya of posts', () => {
        beforeEach(() => {
            (fetchPosts as jest.Mock).mockResolvedValue([]);
        });

        it('should render the no posts indicator', async () => {
            const posts = render(<Posts />);

            await posts.findByTestId('posts-empty');
        });
    });

    describe('when the posts fetching fails', () => {
        beforeEach(() => {
            (fetchPosts as jest.Mock).mockRejectedValue(null);
        });

        it('should render the error indicator', async () => {
            const posts = render(<Posts />);

            await posts.findByTestId('posts-error');
        });
    });
});
