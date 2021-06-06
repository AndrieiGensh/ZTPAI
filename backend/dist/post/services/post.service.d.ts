import { Repository } from 'typeorm';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostFilters } from '../models/post-filters';
import { PostEntity } from '../models/post.entity';
import { UsersService } from 'src/users/services/users.service';
export declare class PostService {
    private postRepo;
    private userService;
    constructor(postRepo: Repository<PostEntity>, userService: UsersService);
    getPostById(id: string): Promise<GetPostDto>;
    getNMostPopularPosts(n: number): Promise<GetPostDto[]>;
    getFilteredPosts(filters: PostFilters): Promise<void>;
    createPost(userId: number, title: string, content: string, photoPath: string, hashtags: string, date: string): Promise<CreatePostDto>;
    updateLikesDislikes(postId: number, likes: number, dislikes: number): Promise<number[]>;
}
