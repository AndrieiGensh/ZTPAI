"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeEntity = void 0;
const recipe_ingridients_entity_1 = require("../../recipe-ingridients/models/recipe-ingridients.entity");
const tags_entity_1 = require("../../tags/models/tags.entity");
const typeorm_1 = require("typeorm");
let RecipeEntity = class RecipeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], RecipeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], RecipeEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => recipe_ingridients_entity_1.RecipeIngridientsEntity, recipe_ingridients => recipe_ingridients.recipe),
    __metadata("design:type", Array)
], RecipeEntity.prototype, "recipe_ingridients", void 0);
__decorate([
    typeorm_1.ManyToMany(() => tags_entity_1.TagsEntity, (tag) => tag.recipes),
    __metadata("design:type", Array)
], RecipeEntity.prototype, "tags", void 0);
RecipeEntity = __decorate([
    typeorm_1.Entity()
], RecipeEntity);
exports.RecipeEntity = RecipeEntity;
//# sourceMappingURL=recipe.entity.js.map