import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './post.resolver';

@Module({
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
