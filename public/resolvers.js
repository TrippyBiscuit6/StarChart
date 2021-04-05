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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetResolver = exports.CharacterResolver = void 0;
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const types_1 = require("./types");
const axios_1 = require("axios");
let CharacterResolver = class CharacterResolver {
    async peoplebyPage(pageNumber) {
        const res = await axios_1.default.get(`https://swapi.dev/api/people/?page=${pageNumber}`);
        return res.data.results;
    }
    async peopleByName(name) {
        const res = await axios_1.default.get(`https://swapi.dev/api/people/?search=${name}`);
        return res.data.results;
    }
};
__decorate([
    type_graphql_1.Query(() => [types_1.Person]),
    __param(0, type_graphql_1.Arg("pageNumber")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "peoplebyPage", null);
__decorate([
    type_graphql_1.Query(() => [types_1.Person]),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "peopleByName", null);
CharacterResolver = __decorate([
    type_graphql_1.Resolver()
], CharacterResolver);
exports.CharacterResolver = CharacterResolver;
let PlanetResolver = class PlanetResolver {
    async planets() {
        const res = await axios_1.default.get("https://swapi.dev/api/planets/");
        return res.data.results;
    }
};
__decorate([
    type_graphql_1.Query(() => [types_1.Planet]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlanetResolver.prototype, "planets", null);
PlanetResolver = __decorate([
    type_graphql_1.Resolver()
], PlanetResolver);
exports.PlanetResolver = PlanetResolver;
//# sourceMappingURL=resolvers.js.map