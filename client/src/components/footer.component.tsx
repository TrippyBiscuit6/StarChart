import React from "react";

import StyledFooter from "./styles/footer/footer.styles";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>Copywrite maybe idunno</p>
      <nav>
        <a href="#">Github</a>
        <a href="#">Twitter</a>
      </nav>
    </StyledFooter>
  );
};

export default Footer;
