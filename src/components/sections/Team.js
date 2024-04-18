import React, { lazy } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead.svg';
import img2 from '../../assets/Nfts/bighead-1.svg';
import img3 from '../../assets/Nfts/bighead-2.svg';
import img4 from '../../assets/Nfts/bighead-3.svg';
import img5 from '../../assets/Nfts/bighead-4.svg';
import img6 from '../../assets/Nfts/bighead-5.svg';
import img7 from '../../assets/Nfts/bighead-6.svg';
import img8 from '../../assets/Nfts/bighead-7.svg';
import img9 from '../../assets/Nfts/bighead-8.svg';
import img10 from '../../assets/Nfts/bighead-8.svg';
import img11 from '../../assets/Nfts/bighead-8.svg';
import img12 from '../../assets/Nfts/bighead-8.svg';
import img13 from '../../assets/Nfts/bighead-8.svg';
import img14 from '../../assets/Nfts/bighead-8.svg';
import img15 from '../../assets/Nfts/bighead-8.svg';
import img16 from '../../assets/Nfts/bighead-8.svg';
import img17 from '../../assets/Nfts/bighead-8.svg';
import img18 from '../../assets/Nfts/bighead-8.svg';
import img19 from '../../assets/Nfts/bighead-8.svg';


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(40rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;

`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
padding: 3rem; // Add padding around the text
`

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
      <Title>Recent Projects</Title>
      <Container>
      <MemberComponent img={img1} name="Realtime Sora" position="Gamified immersive image generation. Control prompts with keyboard shortcuts. SD Lightning, 15 frames/sec." />
      <MemberComponent img={img2} name="County Law RAG" position="Legal agent updating a vector database across all local county government websites, including materials published in PDF documents." />
      <MemberComponent img={img3} name="GPT vs. Gemini" position="An easy way to compare outputs from different models. One message - two answers." />
        <MemberComponent img={img4} name="Your Devin" position="Mistral 0.2 fine-tuned on your codebase directly in VS Code." />
        <MemberComponent img={img5} name="SEMA: arXiv Search Agent" position="Research the latest academic papers using RAG, CoT, Crawler." />
        <MemberComponent img={img6} name="YouTube GPT" position="Summarizes any video into chapters with clickable timestamp links." />
        <MemberComponent img={img7} name="Semantic Chunking" position="Hierarchical chunking with LLMs allows for dynamic adjustment of chunk size based on semantic meaning." />
        <MemberComponent img={img8} name="Docs2CLI" position="Search any documentation online without leaving your VS Code." />
        <MemberComponent img={img9} name="Holodeck" position="AI tool that converts user analytics heatmaps into code improvements for your website. Run your A/B tests on autopilot." />
        <MemberComponent img={img10} name="Reddit -> LinkedIn Reposting Tool" position="Crawls predefined subreddits and reposts top-performing content." />
        <MemberComponent img={img11} name="Virtual Try-On" position="Uses AI to put clothes on models, making a merchant's life easier." />
        <MemberComponent img={img12} name="Image Gen Tool" position="1 million visitors in 3 months, 25k MAU, $10k MRR." />
        <MemberComponent img={img13} name="Feliciti" position="Matching platform for residents and co-living houses." />
        <MemberComponent img={img14} name="Warm Intro" position="Peer-to-peer referral system for hiring." />
        <MemberComponent img={img15} name="GetQ" position="Cloud compute. Templates for your frontend and backend." />
        <MemberComponent img={img16} name="WEB3 Developer Leaderboard" position="Links GitHub contributions to Dune Analytics performance of web3 protocols." />
        <MemberComponent img={img17} name="Betzy" position="Bet on your good habits with friends." />
        <MemberComponent img={img18} name="TimeTree" position="Time tracker for personal productivity." />
        <MemberComponent img={img19} name="Newcomers" position="Matchmaking among newcomers and locals for mutual help." />
      </Container>
    </Section>
  )
}

export default Team