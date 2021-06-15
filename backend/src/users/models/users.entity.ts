/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, ManyToOne, BeforeInsert} from 'typeorm';
import { SettingsEntity } from '../../settings/models/settings.entity'; 
import { DietsEntity } from '../../diets/models/diets.entity';
import { PostEntity } from 'src/post/models/post.entity';
import { CommentEntity } from 'src/comment/models/comment.entity';
import { StatisticsEntity } from 'src/statistics/models/statistics.entity';
import { UserInfoEntity } from 'src/user-info/models/user-info.entity';
import { UserDailyMealsEntity } from 'src/user-daily-meals/models/user-daily-meals.entity';
import { UserRoles } from '../user.dto';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({select : false})
  password: string;

  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER})
  roles: UserRoles;

  @OneToMany(() => CommentEntity, comments => comments.user)
  comments: CommentEntity[] 

  @OneToMany(() => PostEntity, posts => posts.user)
  posts: PostEntity[] 

  @ManyToOne(() => UserInfoEntity, (userInfo : UserInfoEntity) => userInfo.user)
  userInfo: UserInfoEntity;

  @ManyToMany(() => SettingsEntity, (setting : SettingsEntity) => setting.users)
  @JoinTable()
  settings: SettingsEntity[];

  @ManyToMany(() => DietsEntity, (diet : DietsEntity) => diet.users)
  @JoinTable()
  diets: DietsEntity[];

  @OneToMany(() => StatisticsEntity, (statistics: StatisticsEntity) => statistics.user)
  stats: StatisticsEntity[];

  @OneToMany(() => UserDailyMealsEntity, (userDailyMeals : UserDailyMealsEntity) => userDailyMeals.user)
  userDailyMeals: UserDailyMealsEntity[];

  /* Add BeforeInsert(Before Update) - hash password*/
  @BeforeInsert()
  emailToLower()
  {
    this.email = this.email.toLowerCase();
  } 
}


