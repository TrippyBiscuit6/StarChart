import React from "react";

import { Character } from "../common/interfaces/characters.interface";
import CardTitle from "./styles/cards/card-title.style.component";
import StyledText from "./styles/cards/card-text.style.component";
import StyledLink from "./styles/cards/card-navlink.style";
import Card from "./styles/cards/card.style.component";

const CharGridItem: React.FC<{ character: Character }> = ({
  character,
}: {
  character: Character;
}) => {
  return (
    <Card>
      <CardTitle>{character.name}</CardTitle>
      <StyledText>{character.gender}</StyledText>
      <StyledLink to={`/info/${character.name}`}>INFO</StyledLink>
    </Card>
  );
};

export default CharGridItem;
