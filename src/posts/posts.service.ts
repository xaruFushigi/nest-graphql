import { Injectable } from '@nestjs/common';
import { Post } from 'src/graphql';
import { v4 } from 'uuid';

// @Injectable()
export class PostsService {
  private posts: Post[] = [];
  getPosts() {
    return this.posts;
  }

  getPostsByDate(date: string): any[] {
    // Filter posts based on the provided date
    return this.posts.filter(
      (post) => post.timestamp.substring(0, 10) === date,
    );
  }

  createPost(title: string, content: string) {
    const post = { title, content, id: v4(), comments: [] };
    this.posts.push(post);
    return post;
  }
  addComment(postId: string, text: string, user: string) {
    const post = this.posts.find((p) => p.id === postId);
    if (post) {
      const comment = { text, user, date: new Date().toDateString() };
      post.comments.push(comment);
      return comment;
    }
  }
}
