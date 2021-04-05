// Module imports
import React, { useState } from "react";
// Component imports
import CharGrid from "../components/character-grid.component";
// Style imports
import Tag from "../components/styles/search.style.component";
import StyledSearchContainer from "../components/styles/search/search-container.styles";
import StyledForm from "../components/styles/search/search-form.style";
import StyledInput from "../components/styles/search/search-input.style";
import StyledButtonGroup from "../components/styles/search/search-button-group.styles";
import StyledButton from "../components/styles/search/search-button.styles";
// Hook imports
import { useSearchCharacters } from "../hooks/useSearchCharacters";
import { useGetCharacters } from "../hooks/useGetCharacters";
/**
 * Functional home component with conditional search rendering.
 * @returns Home page component.
 */
const Home: React.FC = () => {
  // Bring in hook for the search query and set state.
  const [name, setName] = useState("");
  const searchedCharacters = useSearchCharacters(name);
  // Bring in hook for the page query and set state.
  const [pageCount, setPageCount] = useState(1);
  const characters = useGetCharacters(pageCount);
  /**
   * Handles input for search query.
   * Sets the state of the search bar to the new value in the input field.
   */
  const handleInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };
  // Sets conditional render for the home page.
  if (name == "") {
    return (
      <StyledSearchContainer>
        <StyledForm action="/" method="get">
          <label htmlFor="header-search">
            <Tag className="visually-hidden">Search characters by name</Tag>
          </label>
          <StyledInput
            type="text"
            id="header-search"
            placeholder="Enter character name"
            name="s"
            value={name}
            onChange={handleInput}
          />
        </StyledForm>
        <StyledButtonGroup>
          <StyledButton onClick={() => setPageCount(pageCount - 1)}>
            Previous page
          </StyledButton>
          <h1>Page {pageCount}</h1>
          <StyledButton onClick={() => setPageCount(pageCount + 1)}>
            Next page
          </StyledButton>
        </StyledButtonGroup>

        <div>
          <CharGrid characters={characters || []} />
        </div>
      </StyledSearchContainer>
    );
  }

  return (
    <StyledSearchContainer>
      <StyledForm action="/" method="get">
        <label htmlFor="header-search">
          <Tag className="visually-hidden">Search characters</Tag>
        </label>
        <StyledInput
          type="text"
          id="header-search"
          placeholder="Enter character name"
          name="s"
          value={name}
          onChange={handleInput}
        />
      </StyledForm>

      <div>
        <CharGrid characters={searchedCharacters || []} />
      </div>
    </StyledSearchContainer>
  );
};

export default Home;
