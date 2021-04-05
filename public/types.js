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
exports.Planet = exports.Person = exports.Gender = void 0;
const axios_1 = require("axios");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
    Gender["na"] = "n/a";
})(Gender = exports.Gender || (exports.Gender = {}));
type_graphql_1.registerEnumType(Gender, { name: "Gender" });
let Person = class Person {
    async resolveHomeworld() {
        if (!this.homeworld)
            return null;
        const res = await axios_1.default.get("https://swapi.dev/api/planets/");
        return Planet["url"] === res.data.result;
    }
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Person.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Person.prototype, "height", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Person.prototype, "mass", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Person.prototype, "gender", void 0);
__decorate([
    type_graphql_1.Field(() => Planet, { name: "homeworld", nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Person.prototype, "resolveHomeworld", null);
Person = __decorate([
    type_graphql_1.ObjectType({ description: "The character model" })
], Person);
exports.Person = Person;
let Planet = class Planet {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Planet.prototype, "url", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Planet.prototype, "name", void 0);
Planet = __decorate([
    type_graphql_1.ObjectType({ description: "The planet model" })
], Planet);
exports.Planet = Planet;
//# sourceMappingURL=types.js.map