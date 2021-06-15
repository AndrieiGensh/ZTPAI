import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostService } from '../services/post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(image: any, user: any, body: any): Promise<CreatePostDto>;
    getNMostRatedPosts(query: any): Promise<GetPostDto[]>;
    getPostById(id: string): Promise<GetPostDto>;
    getPostImage(query: any, res: any): Promise<Object>;
    updateLikesDislikes(body: any): Promise<number[]>;
}
