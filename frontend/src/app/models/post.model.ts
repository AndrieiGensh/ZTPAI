export interface PostModel
{
    id: number;
    title: string;
    content: string;
    likes: number;
    dislikes: number;
    hashtags: string;
    photoPath: string;
}