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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const Post_1 = require("./entities/Post");
const context_1 = require("./context");
let PostIDInput = class PostIDInput {
};
__decorate([
    type_graphql_1.Field((type) => type_graphql_1.Int),
    __metadata("design:type", Number)
], PostIDInput.prototype, "id", void 0);
PostIDInput = __decorate([
    type_graphql_1.InputType()
], PostIDInput);
let PostResolver = class PostResolver {
    post(where, ctx) {
        return ctx.prisma.post.findUnique({
            where: { id: where.id },
        });
    }
    feed(ctx) {
        return ctx.prisma.post.findMany({
            where: {
                published: true,
            },
        });
    }
    deleteOnePost(where, ctx) {
        return ctx.prisma.post.delete({
            where: {
                id: where.id,
            },
        });
    }
};
__decorate([
    type_graphql_1.Query((returns) => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg('where')), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostIDInput, typeof (_a = typeof context_1.Context !== "undefined" && context_1.Context) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "post", null);
__decorate([
    type_graphql_1.Query((returns) => [Post_1.Post]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof context_1.Context !== "undefined" && context_1.Context) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], PostResolver.prototype, "feed", null);
__decorate([
    type_graphql_1.Mutation((returns) => Post_1.Post, { nullable: true }),
    __param(0, type_graphql_1.Arg('where')),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PostIDInput, typeof (_c = typeof context_1.Context !== "undefined" && context_1.Context) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deleteOnePost", null);
PostResolver = __decorate([
    type_graphql_1.Resolver(Post_1.Post)
], PostResolver);
exports.PostResolver = PostResolver;
