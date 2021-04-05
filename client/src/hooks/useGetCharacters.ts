import { gql, useQuery } from "@apollo/client";
import { Character } from "../common/interfaces/characters.interface";

const GET_CHARACTERS = gql`
  query GetCharacters($pageNumber: Float!) {
    peoplebyPage(pageNumber: $pageNumber) {
      name
      height
      mass
      gender
    }
  }
`;

export const useGetCharacters = (pageNumber: number): Character[] => {
  const { data } = useQuery(GET_CHARACTERS, {
    variables: { pageNumber: pageNumber },
  });
  return data?.peoplebyPage;
};
