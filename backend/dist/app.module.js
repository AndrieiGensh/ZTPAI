"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const user_info_module_1 = require("./user-info/user-info.module");
const name_surname_module_1 = require("./name-surname/name-surname.module");
const lifestyle_module_1 = require("./lifestyle/lifestyle.module");
const sex_module_1 = require("./sex/sex.module");
const post_module_1 = require("./post/post.module");
const comment_module_1 = require("./comment/comment.module");
const settings_module_1 = require("./settings/settings.module");
const meal_types_module_1 = require("./meal-types/meal-types.module");
const measure_units_module_1 = require("./measure-units/measure-units.module");
const food_module_1 = require("./food/food.module");
const diets_module_1 = require("./diets/diets.module");
const recipe_module_1 = require("./recipe/recipe.module");
const tags_module_1 = require("./tags/tags.module");
const recipe_ingridients_module_1 = require("./recipe-ingridients/recipe-ingridients.module");
const diets_details_module_1 = require("./diets-details/diets-details.module");
const statistics_module_1 = require("./statistics/statistics.module");
const user_daily_meals_module_1 = require("./user-daily-meals/user-daily-meals.module");
const diet_products_module_1 = require("./diet-products/diet-products.module");
const typeorm_2 = require("typeorm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async () => Object.assign(await typeorm_2.getConnectionOptions(), {
                    autoLoadEntities: true,
                    rejectUnauthorized: false,
                }),
            }),
            users_module_1.UsersModule,
            user_info_module_1.UserInfoModule,
            name_surname_module_1.NameSurnameModule,
            lifestyle_module_1.LifestyleModule,
            sex_module_1.SexModule,
            post_module_1.PostModule,
            comment_module_1.CommentModule,
            settings_module_1.SettingsModule,
            meal_types_module_1.MealTypesModule,
            measure_units_module_1.MeasureUnitsModule,
            food_module_1.FoodModule,
            diets_module_1.DietsModule,
            recipe_module_1.RecipeModule,
            tags_module_1.TagsModule,
            recipe_ingridients_module_1.RecipeIngridientsModule,
            diets_details_module_1.DietsDetailsModule,
            statistics_module_1.StatisticsModule,
            user_daily_meals_module_1.UserDailyMealsModule,
            diet_products_module_1.DietProductsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map