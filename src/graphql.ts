
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddCommentInput {
    user: string;
    text: string;
    postId: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    comments: Nullable<Comment>[];
    timestamp?: Nullable<string>;
}

export interface Comment {
    user: string;
    text: string;
    date: string;
}

export interface IQuery {
    getPosts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    getPostsByDate(date: string): Nullable<Post>[] | Promise<Nullable<Post>[]>;
}

export interface IMutation {
    createPost(title: string, content: string): Post | Promise<Post>;
    addComment(input: AddCommentInput): Comment | Promise<Comment>;
}

type Nullable<T> = T | null;
