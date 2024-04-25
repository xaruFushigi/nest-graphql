import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import { AddCommentInput } from 'src/graphql';
import { PostsService } from './posts.service';
import { readFileSync } from 'fs';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}
  private posts: any[];

  @Query()
  getPosts() {
    const filePath =
      '/Users/bokhodirziedullaev/Documents/GitHub/graphql/nest-graphql/src/posts/post.json';
    const data = readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
    // return this.postsService.getPosts();
  }

  @Query()
  async getPostsByDate(@Args('date') date: string): Promise<any[]> {
    const filePath =
      '/Users/bokhodirziedullaev/Documents/GitHub/graphql/nest-graphql/src/posts/post.json';
    const data = readFileSync(filePath, 'utf-8');
    const posts = JSON.parse(data);
    // Filter posts based on the provided date
    const postsByDate = posts.filter(
      (post) => post.timestamp.substring(0, 10) === date,
    );
    return postsByDate;
  }

  @Mutation()
  createPost(@Args('title') title: string, @Args('content') content: string) {
    return this.postsService.createPost(title, content);
  }

  @Mutation()
  addComment(@Args('input') { postId, text, user }: AddCommentInput) {
    return this.postsService.addComment(postId, text, user);
  }
}
