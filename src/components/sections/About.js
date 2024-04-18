import React, { lazy, Suspense, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";

const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  text-align: justify; // Add this line to align the text to the left

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
    text-align: justify; // Add this line
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: justify; // Add this line
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
    text-align: justify; // Add this line
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    justify-content: center;

    button {
      margin: 0 auto;
    }
  }
`;

const InlineButton = styled.button`
  background: none;
  border: none;
  color: grey; /* Set the font color to grey */
  cursor: pointer;
  display: inline;
  padding: 0;
  margin: 0 5px; // Adjust spacing as needed
  text-decoration: underline; /* Add underline to the text */
  font-size: inherit; /* Optional: ensures the button font size matches surrounding text */
`;

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box>
        <Box>
          <Title>
            Story
          </Title>
          <SubText>
            I live in San Francisco and work on various tech projects in ML, developer tools, LLM apps, productivity, and EEG.
            <br /><br />
            I'm fortunate to have
            {isExpanded ? (
              <>
              {" "} grown up in Moscow, Russia, where a strong technical culture is mandatory. I got into college through a Math Olympiad and studied Computer Science. I then embarked on a 5-year journey as a Business Consultant at Accenture Strategy, helping various large clients cut their costs and increase revenues, working on projects in different countries around Europe and the Middle East.
                <br /><br />
                It was an incredible gift from Accenture to let me study in Illinois for an MBA program while also taking care of me financially. When I saved up enough money from my job, I finally left Accenture and started my first tech company back in 2015. My co-founder Alexander and I were lucky to get initial traction, build the product, and finally sell the company. Back then, B2B SaaS was still a novel concept in Europe, so it was relatively easy for us to get all the way through with our CRM tool for small hotels.
                <br /><br />
                Needless to say, I had a delusion that I was a great entrepreneur and that I could do it again and again. The following 3 startups were not as great, haha. I'll tell you more about it below.
                <SubTextLight>
                  Being an immigrant in the US is tough, but I greatly appreciate the challenge. Living in SF has certainly opened up a new life for me. I discovered my spiritual journey and got very deep into the tech world.
                  <br /><br />
                  Even though I've had an exit in the past and diverse experience across CS, business, entrepreneurship, and investor experience, none of these things count because all of these experiences are from outside of the US. So, I've had to pave my way into the local community from scratch. And it seems to be working out quite fine.
                  <br /><br />
                  I've been able to build my credibility both as a technical contributor and an agile product manager and mentor. My friends and I have had an incredible time winning local hackathons at the AGI House and Cerebral Valley Shack15 while also serving as a judge and mentor at Calhacks hackathons multiple times.
                  <br /><br />
                  However, the biggest realization that came to me here is that I never want to be a one-sided person. I highly appreciate the benefits I harvest from maintaining my daily running routine, playing pickleball, volleyball, soccer, and tennis, as well as engaging in spiritual practices like Vipassana and creative endeavors like contact improv classes, ecstatic dance, and Burning Man.
                  <br /><br />
                  I also found it insanely valuable to sink into the local culture, meeting folks from different walks of life by mingling with them at places like The Commons and The Center SF, where I live now. There is something unique and ingenious about SF culture, which is neatly hidden from the eyes of tourists and business pros.
                  <br /><br />
                  One thing that stood out to me the most in recent months is the pursuit of happiness through the dissolution of ego. I keep realizing that serving others without expecting anything in return is probably the single most important skill I have to master. This is why I'm so glad to contribute to open-source projects in the AI space like LlamaIndex or simply go and be a server at a local Vipassana meditation camp.
                </SubTextLight>
              </>
            ) : (
              <InlineButton onClick={() => setIsExpanded(true)}>...read more</InlineButton>
            )}
            </SubText>

          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button
                text="If any of this clicks with you, send me an email. Happy to connect!"
                link="i@m13v.com"
                newTab={true}
              />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
