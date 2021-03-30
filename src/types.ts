import axios from "axios";
import "reflect-metadata";
import { ObjectType, Field, registerEnumType } from "type-graphql";

export enum Gender {
  male = "male",
  female = "female",
  na = "n/a",
}

registerEnumType(Gender, { name: "Gender" });
/**
 * Character type.
 * Everything is string to avoid "unknown" value from breaking everything.
 */
@ObjectType({ description: "The character model" })
export class Person {
  @Field()
  url: string;

  @Field()
  name: string;

  @Field()
  height: string;

  @Field()
  mass: string;

  @Field()
  gender: Gender;

  homeworld: string;
  @Field(() => Planet, { name: "homeworld", nullable: true })
  async resolveHomeworld() {
    if (!this.homeworld) return null;
    const res = await axios.get("https://swapi.dev/api/planets/");
    return Planet["url"] === res.data.result;
  }
}
/**
 * Planet type.
 */
@ObjectType({ description: "The planet model" })
export class Planet {
  @Field()
  url: string;

  @Field()
  name: string;
}
