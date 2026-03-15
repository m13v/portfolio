import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.5)`};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontsm};
  margin-bottom: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  margin-bottom: 0.75rem;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Intro = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  line-height: 1.6;
  margin-bottom: 3rem;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  margin: 3rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => `rgba(${props.theme.textRgba}, 0.06)`};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemName = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  margin: 0 0 0.25rem;
`;

const ItemDescription = styled.p`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.55)`};
  margin: 0;
  line-height: 1.5;
`;

const ExternalLink = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: underline;
  text-decoration-color: ${(props) => `rgba(${props.theme.textRgba}, 0.3)`};
  text-underline-offset: 2px;
  transition: text-decoration-color 0.2s ease;

  &:hover {
    text-decoration-color: ${(props) => props.theme.text};
  }
`;

const hardware = [
  {
    name: "Samsung 57\" Odyssey Neo G9 (G95NC)",
    description: "8K+ curved monitor — immersive workspace for research and side tasks",
  },
  {
    name: "Dell UltraSharp U4025QW 40\"",
    description: "5K2K ultrawide — primary display for coding and multitasking",
  },
  {
    name: "MacBook Pro M4",
    description: "Main development machine — waiting for Mac Studio to replace it",
  },
  {
    name: "AMD Threadripper 9980X",
    description: "200 GB RAM workstation for heavy ML workloads and parallel builds",
  },
  {
    name: "HUGE Trackball Mouse",
    description: "Ergonomic trackball — saves my wrist during long sessions",
  },
  {
    name: "Apple Magic Keyboard",
    description: "Low-profile keyboard for a clean, minimal desk",
  },
  {
    name: "Logi Keypad",
    description: "Programmable macro pad for custom shortcuts and workflow automation",
  },
  {
    name: "Logi Ultra-Wide 4K Camera",
    description: "High-quality webcam for calls and recordings",
  },
  {
    name: "Bose Headphones (latest, noise cancelling)",
    description: "Active noise cancellation — essential for deep work",
  },
  {
    name: "AirPods Pro 3",
    description: "Dual audio — connected to both Mac and Windows simultaneously",
  },
  {
    name: "Philips Speech One",
    description: "Professional dictation microphone for crystal-clear voice input",
  },
  {
    name: "Savant Elite Pedals",
    description: "Foot pedals for extra input — because hands aren't enough",
  },
  {
    name: "SKG Foot Massager",
    description: "Your feet deserve care during marathon coding sessions",
  },
  {
    name: "Two water bottles",
    description: "Hydration is part of the setup \u{1F604}",
  },
];

const apps = [
  {
    name: "Claude Code",
    description: "AI-powered coding — running 20 agents in parallel for maximum velocity",
    link: "https://claude.ai/claude-code",
  },
  {
    name: "Fazm",
    description: "AI assistant for day-to-day tasks, planning, and operations",
    link: "https://fazm.ai/m",
  },
  {
    name: "Arc Browser",
    description: "Modern browser with spaces, profiles, and a clean UI",
    link: "https://arc.net",
  },
  {
    name: "Wispr Flow",
    description: "Voice-to-text that actually works — dictate code, messages, and notes",
    link: "https://wispr.com",
  },
];

const Setup = () => {
  return (
    <Page>
      <Container>
        <BackLink to="/">&larr; Back home</BackLink>

        <Title>My Workstation</Title>
        <Intro>
          I spend most of my day at this desk, so I've optimized every inch of it.
          Here's the hardware and software that powers my workflow.
        </Intro>

        <SectionTitle>Hardware</SectionTitle>
        <List>
          {hardware.map((item, index) => (
            <ListItem key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemDescription>{item.description}</ItemDescription>
            </ListItem>
          ))}
        </List>

        <SectionTitle>Software</SectionTitle>
        <List>
          {apps.map((item, index) => (
            <ListItem key={index}>
              <ItemName>
                {item.link ? (
                  <ExternalLink href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </ExternalLink>
                ) : (
                  item.name
                )}
              </ItemName>
              <ItemDescription>{item.description}</ItemDescription>
            </ListItem>
          ))}
        </List>
      </Container>
    </Page>
  );
};

export default Setup;
