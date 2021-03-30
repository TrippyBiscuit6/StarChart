import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import { Person, Planet } from "./types";
import axios from "axios";
//import { swapi } from "swapi-node";

@Resolver()
export class CharacterResolver {
  // List all people per page.
  @Query(() => [Person])
  async peoplebyPage(@Arg("pageNumber") pageNumber: number) {
    const res = await axios.get(
      `https://swapi.dev/api/people/?page=${pageNumber}`
    );
    return res.data.results; // needs the result added!!!!!
  }
  // Search person by name.
  @Query(() => Person)
  async personByName(@Arg("name") name: string) {
    const res = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
    return res.data.results;
  }
}

@Resolver()
export class PlanetResolver {
  // All planets.
  @Query(() => [Planet])
  async planets() {
    const res = await axios.get("https://swapi.dev/api/planets/");
    return res.data.results;
  }
}
