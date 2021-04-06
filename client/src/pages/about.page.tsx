import React from "react";

import StyledAbout from "../components/styles/pages/about/aboutpage.styles";
import StyledTitle from "../components/styles/pages/about/about-title.styles";
import StyledContainer from "../components/styles/pages/about/about-container.styles";
import StyledEnd from "../components/styles/pages/about/about-end.styles";
import Footer from "../components/footer.component";
import Header from "../components/header.component";
import StyledText from "../components/styles/pages/about/about-text.styles";

const About: React.FC = () => {
  return (
    <StyledAbout>
      <Header />
      <StyledContainer>
        <StyledTitle>About me</StyledTitle>
        <StyledText>
          Hi, I'm Armin. I am a CompSci Student residing on the southern part of
          Africa. Learning new things is a passion and this project is the fruit
          of that passion.
        </StyledText>
        <StyledText>
          Before I started this project I had very basic knowledge of React and
          knew nothing of NodeJS or GraphQL. Now that this project is entering a
          presentable state, I can say that I still don't know much about those
          things, but I could get something working with them.
        </StyledText>
      </StyledContainer>
      <StyledContainer>
        <StyledTitle>About this project</StyledTitle>
        <StyledText>
          This project is designed as a SovTech Fullstack engineer test.
        </StyledText>
        <StyledText>
          It uses an apollo graphql api to fetch data from the swapi RESTful
          api, and presents the very limited information to you through this
          client project.
        </StyledText>
        <StyledText>
          While this may be very limited in functionality, I will be adding to
          and modifying it as time goes on. To follow the development or to get
          in touch with me, follow the links provided down below.
        </StyledText>
        <StyledEnd>May the force be with you, and stay safe.</StyledEnd>
      </StyledContainer>
      <Footer />
    </StyledAbout>
  );
};

export default About;
