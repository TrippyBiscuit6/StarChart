import React from "react";

import { Character } from "../common/interfaces/characters.interface";
import CharGridItem from "./character-grid-item.component";
import Card from "./styles/cards/card.style.component";
import StyledGrid from "./styles/grid.style.component";

interface CharGridProps {
  characters: Character[];
}

const CharGrid: React.FC<CharGridProps> = ({ characters }: CharGridProps) => {
  return (
    <div>
      <StyledGrid>
        {characters.map((character) => (
          <Card key={character.name}>
            <CharGridItem character={character} />
          </Card>
        ))}
      </StyledGrid>
    </div>
  );
};

export default CharGrid;
