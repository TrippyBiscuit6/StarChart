import React from "react";
import { NavLink } from "react-router-dom";

import { Character } from "../common/interfaces/characters.interface";
import CardTitle from "./styles/cards/card-title.style.component";
import StyledText from "./styles/cards/card-text.style.component";

const CharGridItem: React.FC<{ character: Character }> = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <div>
      <CardTitle>{character.name}</CardTitle>
      <StyledText>{character.gender}</StyledText>
      <NavLink to={`/info/${character.name}`}>
        <span>i</span>
      </NavLink>
    </div>
  );
};

export default CharGridItem;
