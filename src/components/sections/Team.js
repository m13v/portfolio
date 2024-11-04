import React, { lazy } from 'react'
import styled from 'styled-components';
import Microlink from '@microlink/react';


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

const Name = styled.a`  // Changed from styled.h2 to styled.a
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;  // Add underline on hover
  }
`;

const Position = styled.a`  // Changed from styled.h2 to styled.a
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
  padding-top: 1rem;
  padding-bottom: 1rem;
  cursor: pointer;  // Added cursor style
  &:hover {
    text-decoration: underline;  // Add underline on hover
  }
`;


const Item = styled.div`
  width: calc(32rem - 4vw);
  max-width: 80%; // Ensure it doesn't overflow its parent container
  height: calc(64rem - 8vw); // Doubled the height
  padding: 1rem;
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;
  border: 2px solid ${props => props.theme.text};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; // Center-align the children
  &:hover {
    transform: scale(1.05);
  }
  
`;

const MicrolinkWrapper = styled.div`
  width: 100%;
  height: 100%; // Set a fixed height
  overflow: hidden; // Prevents content from overflowing

  iframe {
    width: 100% !important;
    height: 100% !important; //     transform: translateY(-20%); // Adjust vertical position to center the content
    border: none;
    padding: 0;
    margin: 0;
  }
`;

const MemberComponent = ({ link, name, position }) => {
  // Convert LinkedIn post URL to embed URL
  const getEmbedUrl = (url) => {
    if (url.includes('linkedin.com')) {
      // Direct mapping for posts that need special handling
      const specialCases = {
        'activity-7158326288988995584': 'share', // Docs2CLI
        'activity-7155747786464878592': 'share', // Holodeck
        'activity-7142589169377116160': 'share', // Virtual Try-On
        '7071924035613323264': '7076766236277157888', // Feliciti - map old ID to new embed ID
      };

      const activityMatch = url.match(/activity-(\d+)/);
      if (activityMatch) {
        const activityId = activityMatch[1];
        // Check if this activity needs special ID mapping
        const mappedId = specialCases[activityId] || specialCases[`activity-${activityId}`];
        if (mappedId === '7076766236277157888') {
          return `https://www.linkedin.com/embed/feed/update/urn:li:share:${mappedId}`;
        }
        const postType = mappedId || 'ugcPost';
        return `https://www.linkedin.com/embed/feed/update/urn:li:${postType}:${activityId}`;
      }
    }
    return null;
  };

  const embedUrl = getEmbedUrl(link);

  // Add special case for Reddit -> LinkedIn post
  const isRedditLinkedInPost = link.includes('7151297160863453184');
  const redditLinkedInContent = `We've made (with Vadims Casecnikovs) a Reddit -> Linkedin reposting tool in 3 days and it worked!
I've started gaining 10 followers a day without putting in any effort.

Here's how it works:
1. Our script goes to predefined list of top subReddits
2. It then forwards top posts to our telegram bot
3. I then choose which post to repost in Telegram and forward it my reposting Telegram bot
4. It triggers a script to publish the post on my Linkedin page🕺

Next steps:
- Happy to give a beta access to anyone interested
- Tweak the post title and content with chatGPT
- Create a RAG based on my Linkedin profile content
- Tweak new posts considering my profile / personality`;

  return (
    <Item>
      <Name href={link} target="_blank">{name}</Name>  
      <Position href={link} target="_blank">{position}</Position>  
      <MicrolinkWrapper>
        {isRedditLinkedInPost ? (
          <div style={{ 
            whiteSpace: 'pre-line', 
            padding: '1rem', 
            overflow: 'auto', 
            height: '100%',
            color: props => props.theme.text 
          }}>
            {redditLinkedInContent}
          </div>
        ) : embedUrl ? (
          <iframe 
            src={embedUrl}
            height="608"
            width="504"
            frameBorder="0"
            allowFullScreen
            title={name}
          />
        ) : (
          <Microlink url={link} size="large" />
        )}
      </MicrolinkWrapper>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team">
      <Title>Recent Projects</Title>
      <Container>
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7227174333838675968" name="screenpipe" position="Technical deep dive: screen recording, OCR & STT, local db, AI" />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7209080988415475712" name="Shadcn for AI" position="Customizable open source react components, LLM to generate UI content to adapt to user experience" />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7205835013702000640" name="AI Sales Assistant" position="An assistant that helps users find products. Rendering a React carousel through function calls for an e-commerce product catalog. The product search is multi-modal, allowing for context-based image searches" />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7204346420089245696" name="GPT Auto Debugger" position="Coding assistant that actually test runs the code in a safe sandbox environment." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7188433049213120512" name="Gemini 4 Docs" position="Search and chat with any documentation inside your terminal." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7186172629676953600" name="Realtime Sora" position="Gamified immersive image generation. Control prompts with keyboard shortcuts. SD Lightning, 15 frames/sec." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7183692573184602113" name="County Law RAG" position="Legal agent updating a vector database across all local county government websites, including materials published in PDF documents." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7182239229421187072" name="GPT vs. Gemini" position="An easy way to compare outputs from different models. One message - two answers." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7172740669008932864" name="SEMA: arXiv Search Agent" position="Research the latest academic papers using RAG, CoT, Crawler." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7176403945651671041" name="YouTube GPT" position="Summarizes any video into chapters with clickable timestamp links." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7166654942856884225" name="Semantic Chunking" position="Hierarchical chunking with LLMs allows for dynamic adjustment of chunk size based on semantic meaning." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7158326288988995584" name="Docs2CLI" position="Search any documentation online without leaving your VS Code." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7155747786464878592" name="Holodeck" position="AI tool that converts user analytics heatmaps into code improvements for your website. Run your A/B tests on autopilot." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v_weve-made-with-vadims-casecnikovs-a-reddit-activity-7151297160863453184-DNp1?utm_source=share&utm_medium=member_desktop " name="Reddit -> LinkedIn Reposting Tool" position="Crawls predefined subreddits and reposts top-performing content." />
        <MemberComponent link="https://www.linkedin.com/posts/m13v/activity-7142589169377116160" name="Virtual Try-On" position="Uses AI to put clothes on models, making a merchant's life easier." />
        <MemberComponent link="https://youtu.be/DNqqRRQaLk8" name="Image Gen Tool" position="1 million visitors in 3 months, 25k MAU, $10k MRR." />
        <MemberComponent link="https://www.linkedin.com/in/m13v/posts/coliving-startuphouse-techhouse-activity-7071924035613323264-P8bJ" name="Feliciti" position="Matching platform for residents and co-living houses." />
        {/* <MemberComponent link="https://docs.google.com/presentation/d/1QHevVRvSCvuMJFhgY0s4LkvGccCuWHyCwts8PAKeRBY/edit?usp=sharing" name="Warm Intro Network" position="Peer-to-peer referral system for hiring." /> */}
        <MemberComponent link="https://docs.google.com/presentation/d/17HxnFUF7jhE1Bc0C9W31on75dFszVZFll0JGBfVZ0-4/edit?usp=sharing" name="GetQ" position="Cloud compute. Templates for your frontend and backend." />
        {/* <MemberComponent link="https://docs.google.com/presentation/d/1hMSQ4dAnNEaQnzM8osHKzjVEDmaRsWGtHY2m_aFKn0M/edit?usp=sharing" name="WEB3 Developer Leaderboard" position="Links GitHub contributions to Dune Analytics performance of web3 protocols." /> */}
        <MemberComponent link="https://youtu.be/WKirA7P59fQ" name="Betzy" position="Bet on your good habits with friends." />
        <MemberComponent link="https://docs.google.com/presentation/d/1OuZb8LslpVTa4_Hp8aRvs1enDjZ-lQ8FJ5BilJmM_vo/edit?usp=sharing" name="TimeTree" position="Time tracker for personal productivity." />
        <MemberComponent link="https://youtu.be/jGbqnAjLi-0" name="Newcomers" position="Matchmaking among newcomers and locals for mutual help." />
      </Container>
    </Section>
  )
}

export default Team