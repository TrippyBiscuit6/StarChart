import "reflect-metadata";
import { ObjectType, Field } from "type-graphql";

/**
 * Character type.
 * Everything is string to avoid "unknown" value from breaking everything.
 */
@ObjectType({ description: "The character model" })
export class Character {
  @Field()
  name: string;
  @Field()
  height: string;
  @Field()
  mass: string;
  @Field()
  gender: string;
  @Field(() => Planet)
  homeworld: string;
}
/**
 * Planet type.
 */
@ObjectType({ description: "The planet model" })
export class Planet {
  @Field()
  name: string;
}
