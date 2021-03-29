import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import { Character, Planet } from "./types";
import axios from "axios";
import * as swapiModule from "./vendor/swapi.js";

@Resolver()
export class CharacterResolver {
  // All characters.
  @Query(() => [Character])
  async getAllCharacters() {
    const res = await axios.get("https://swapi.dev/api/people/");
    return res.data;
  }
  // Search character by name.
  @Query(() => Character)
  async personByName(@Arg("name") name: string) {
    const res = await axios.get(
      ` https://swapi.dev/api/people/?search=${name} `
    );
    return res.data;
  }
}

@Resolver()
export class PlanetResolver {
  // All planets.
  @Query(() => [Planet])
  async planets() {
    const res = await axios.get("https://swapi.dev/api/planets/");
    return res.data;
  }
}
