import { gql, useQuery } from "@apollo/client";
import { Character } from "../common/interfaces/characters.interface";

const SEARCH_CHARACTERS = gql`
  query searchCharacters($name: String!) {
    peopleByName(name: $name) {
      name
      height
      mass
      gender
    }
  }
`;

export const useSearchCharacters = (name: string): Character[] => {
  const { data } = useQuery(SEARCH_CHARACTERS, {
    variables: { name: name },
  });
  return data?.peopleByName;
};
