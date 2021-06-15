/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { UserInfoModule } from './user-info/user-info.module';
import { NameSurnameModule } from './name-surname/name-surname.module';
import { LifestyleModule } from './lifestyle/lifestyle.module';
import { SexModule } from './sex/sex.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { SettingsModule } from './settings/settings.module';
import { MealTypesModule } from './meal-types/meal-types.module';
import { MeasureUnitsModule } from './measure-units/measure-units.module';
import { FoodModule } from './food/food.module';
import { DietsModule } from './diets/diets.module';
import { RecipeModule } from './recipe/recipe.module';
import { TagsModule } from './tags/tags.module';
import { RecipeIngridientsModule } from './recipe-ingridients/recipe-ingridients.module';
import { DietsDetailsModule } from './diets-details/diets-details.module';
import { StatisticsModule } from './statistics/statistics.module';
import { UserDailyMealsModule } from './user-daily-meals/user-daily-meals.module';
import { DietProductsModule } from './diet-products/diet-products.module';
import { getConnectionOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
          rejectUnauthorized: false,
        }),
    }),
    UsersModule,
    UserInfoModule,
    NameSurnameModule,
    LifestyleModule,
    SexModule,
    PostModule,
    CommentModule,
    SettingsModule,
    MealTypesModule,
    MeasureUnitsModule,
    FoodModule,
    DietsModule,
    RecipeModule,
    TagsModule,
    RecipeIngridientsModule,
    DietsDetailsModule,
    StatisticsModule,
    UserDailyMealsModule,
    DietProductsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
