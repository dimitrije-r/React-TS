import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';
import { Post } from '../../app/types';
import { ReactNode } from 'react';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
    coffee: '☕️'
};

interface ReactionButtonsProps {
    post: Post;
}

const ReactionButtons=({ post }: ReactionButtonsProps)=> {
    const dispatch = useDispatch();

    const reactionButtons: ReactNode[] = Object.entries(reactionEmoji).map(([name, emoji]): ReactNode => {
        const reactionCount =
            post.reactions[name as keyof typeof post.reactions];
        return (
            <button
                key={name}
                type='button'
                className='reactionButton'
                onClick={() =>dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
                {emoji} {reactionCount}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;
}
export default ReactionButtons;