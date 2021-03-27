import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import { Character } from "./types";
import axios from "axios";

@Resolver()
export class CharacterResolver {
  // All characters.
  @Query(() => [Character])
  async people() {
    const res = await axios.get("https://swapi.dev/api/people/");
    return res.data;
  }
  // One character.
  @Query(() => Character)
  async person(@Arg("id") id: number) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    return res.data;
  }
}
