import React, { lazy, Suspense, useState, useRef, useEffect  } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import AboutVideo from "../../assets/MyMovie.mp4"; // Import the video file here
import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";
import TooltipImage from '../../assets/105.jpg'; // Import the image

const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: 100vh; // Minimum height of 100% of the viewport height
  width: 100%; // Width set to 100% of the parent container
  background-color: ${(props) => props.theme.text}; // Background color taken from theme
  display: flex; // Use flexbox for layout
  justify-content: center; // Horizontally center the content
  align-items: center; // Vertically center the content
  position: relative; // Position relative for positioning child elements absolutely within
  overflow: hidden; // Hide any content that overflows the container
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
  width: 100%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; // Make sure this is here

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

const InfoButton = styled.div`
  position: absolute;
  top: 10px; // Positioned in the upper part of the video
  left: 2%; // Positioned in the left part of the video
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent black background
  color: white;
  border: none;
  --button-size: 10px; // Define a CSS variable for size
  width: var(--button-size); // Use the variable for width
  height: var(--button-size); // Use the same variable for height
  padding: 10px;
  border-radius: 100%; // Circular button
  cursor: help; // Indicates an informational element
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); // Adds shadow for depth
  display: flex; // Enables the use of Flexbox for centering content
  justify-content: center; // Centers content horizontally
  align-items: center; // Centers content vertically
  text-align: center; // Ensures text is centered if it wraps to a new line
`;

const Tooltip = styled.span`
  visibility: hidden;
  position: absolute;
  bottom: 100%; // Adjust based on your design
  left: 0; // Tooltip appears from the bottom right of the button
  transform: translateY(10px); // Creates a small gap between the button and tooltip
  width: 200px; // Adjust as needed
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    right: 10px; // Arrow appears near the right edge of the tooltip
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  ${InfoButton}:hover & {
    visibility: visible;
  }
`;



const About = () => {
  const infoButtonRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    const infoButton = infoButtonRef.current;
  
    const handleMouseOver = () => {
      const tooltip = infoButton.querySelector('.tooltip');
      if (!tooltip) return;
  
      // Calculate if there's enough space below the info button for the tooltip
      const infoButtonRect = infoButton.getBoundingClientRect();
      const tooltipHeight = tooltip.offsetHeight;
      const spaceBelow = window.innerHeight - infoButtonRect.bottom;
  
      if (spaceBelow < tooltipHeight) {
        // Not enough space below, show tooltip above
        tooltip.style.bottom = '100%';
        tooltip.style.top = 'auto';
      } else {
        // Enough space below, show tooltip below
        tooltip.style.top = '100%';
        tooltip.style.bottom = 'auto';
      }
    };
  
    const handleMouseOut = () => {
      const tooltip = infoButton.querySelector('.tooltip');
      if (tooltip) {
        // Reset tooltip position to default or hide it
        tooltip.style.bottom = 'auto';
        tooltip.style.top = 'auto';
      }
    };
  
    if (infoButton) {
      infoButton.addEventListener('mouseover', handleMouseOver);
      infoButton.addEventListener('mouseout', handleMouseOut);
    }
  
    return () => {
      if (infoButton) {
        infoButton.removeEventListener('mouseover', handleMouseOver);
        infoButton.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, []);
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <video
              src={AboutVideo}
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline  // Ensures inline playback on mobile devices
              style={{
                width: '100%',
                height: '120vh',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </Suspense>{" "}
          <InfoButton ref={infoButtonRef}>
            i
            <Tooltip className="tooltip">
              Video was generated from a single picture with Stable Video Diffusion.
              <a href="https://stability.ai/news/stable-video-diffusion-open-ai-video-model" target="_blank" rel="noopener noreferrer" style={{ color: 'lightblue' }}>
                (stability.ai)
              </a>
              <img src={TooltipImage} alt="Stable Video Diffusion" style={{ width: '100%', marginTop: '8px' }} />
            </Tooltip>
          </InfoButton>
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
                link="mailto:i@m13v.com"
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

