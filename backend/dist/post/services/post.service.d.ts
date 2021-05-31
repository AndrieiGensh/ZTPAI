import { Repository } from 'typeorm';
import { CreatePostDto } from '../create-post.dto';
import { GetPostDto } from '../get-post.dto';
import { PostFilters } from '../models/post-filters';
import { PostEntity } from '../models/post.entity';
export declare class PostService {
    private postRepo;
    constructor(postRepo: Repository<PostEntity>);
    getPostById(id: string): Promise<GetPostDto>;
    getNMostPopularPosts(n: number): Promise<GetPostDto[]>;
    getFilteredPosts(filters: PostFilters): Promise<void>;
    createPost(newPost: CreatePostDto): Promise<CreatePostDto>;
}
