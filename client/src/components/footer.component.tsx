import React from "react";

import StyledFooter from "./styles/footer/footer.styles";
import StyledLink from "./styles/footer/footer-links.style";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Copywrite Armin Nel 2021</p>
      <nav>
        <StyledLink target="_blank" href="https://github.com/TrippyBiscuit6">
          Github
        </StyledLink>
        <StyledLink target="_blank" href="https://twitter.com/lil_We3zy">
          Twitter
        </StyledLink>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
