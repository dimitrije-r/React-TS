export interface Post {
    id: string;
    title: string;
    content: string;
    date: string;
    userId: string;
    reactions: {
        thumbsUp: number;
        wow: number;
        heart: number;
        rocket: number;
        eyes: number;
        coffee: number;
    }
}

export interface User {
    id: string;
    name: string;
}

export interface RootState {
    posts: Post[];
    users: User[];
}
