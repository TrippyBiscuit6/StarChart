import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";

// Character type.
@ObjectType({ description: "The character model" })
export class Character {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  height: number;
  @Field()
  mass: number;
  @Field()
  gender: string;
  /* @Field()
  homeworld: Planet; */
}

// Planet type.
/* @ObjectType({ description: "The planet model" })
export class Planet {
  @Field()
  name: string;
} */
