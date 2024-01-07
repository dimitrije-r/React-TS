import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { RootState } from '../../app/types';
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'First Post!',
        content: 'Hello!',
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 51,
            wow: 0,
            heart: 20,
            rocket: 0,
            eyes: 1,
            coffee: 1
        }
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'More text',
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 11,
            wow: 14,
            heart: 45,
            rocket: 2,
            eyes: 34,
            coffee: 0
        }
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                            coffee: 0
                        }
                    },
                    meta: null,
                    error: null
                };
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload;
            const existingPost = state.find((post) => post.id === postId);
            if (existingPost) existingPost.reactions[reaction as keyof typeof existingPost.reactions]++;
            
        }
    }
});

export const selectAllPosts = (state: RootState) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;