import React, { useState } from "react";

import { Character } from "../common/interfaces/characters.interface";
import CardTitle from "./styles/cards/card-title.style.component";
import StyledText from "./styles/cards/card-text.style.component";
import Card from "./styles/cards/card.style.component";
import StyledIcon from "./styles/cards/card-icon.style";
import StyledTextTitle from "./styles/cards/card-subtitle.style";

const CharGridItem: React.FC<{ character: Character }> = ({
  character,
}: {
  character: Character;
}) => {
  // On hover test
  const [isShown, setIsShown] = useState(false);
  return (
    <Card
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <CardTitle>{character.name}</CardTitle>
      <StyledIcon>⥥</StyledIcon>

      {isShown && (
        <>
          <StyledTextTitle>Mass:</StyledTextTitle>
          <StyledText>{character.mass}</StyledText>
          <StyledTextTitle>Height:</StyledTextTitle>
          <StyledText>{character.height}</StyledText>
          <StyledTextTitle>Gender:</StyledTextTitle>
          <StyledText>{character.gender}</StyledText>
        </>
      )}
    </Card>
  );
};

export default CharGridItem;
