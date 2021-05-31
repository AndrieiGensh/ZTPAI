import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostService } from '../services/post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    create(image: any, body: any): Promise<CreatePostDto>;
    getNMostRatedPosts(N: number): Promise<GetPostDto[]>;
    getPostById(id: string): Promise<GetPostDto>;
}
