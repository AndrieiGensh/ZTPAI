import { SettingsEntity } from '../../settings/models/settings.entity';
import { DietsEntity } from '../../diets/models/diets.entity';
import { PostEntity } from 'src/post/models/post.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';
import { StatisticsEntity } from 'src/statistics/models/statistics.entity';
import { UserInfoEntity } from 'src/user-info/models/user-info.entity';
import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    comments: CommentEntity[];
    posts: PostEntity[];
    userInfo: UserInfoEntity;
    settings: SettingsEntity[];
    diets: DietsEntity[];
    stats: StatisticsEntity[];
    userDailyMeals: UserDailyMealsEntity[];
}
