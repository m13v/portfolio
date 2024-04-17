import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DrawSvg from "../DrawSvg";
import Button from "../Button"; // Assuming this is the correct path to your Button component
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

`;
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

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: auto;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
      text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: auto;  // Ensure the height adjusts based on content
  padding: 2rem; // Adjust padding to ensure text does not touch the edges
  border: 3px solid ${(props) => props.theme.text};
  margin-top: 1rem; // Ensure there's space at the top of the container

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
  overflow: visible; // Make sure overflow content is visible
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: none; // Change this line
  color: ${(props) => props.theme.text};

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ReadMoreButton = styled.button`
  background-color: #333; // Dark background for the button, adjust color as needed
  color: white; // White text color for contrast
  border: none; // No border
  cursor: pointer;
  padding: 0.5em 1em; // Padding around the text
  margin-top: 10px; // Space above the button
  margin-left: 10px;
  align-self: flex-end; // Align to the right of the flex container
  border-radius: 20px; // Rounded corners
  text-decoration: underline; // Underline text
  display: inline-block; // Ensure it's treated as inline for text alignment
`;

// Use the styled button in your component
const RoadMapItem = ({ title, subtext, subtext2, addToRef }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          {subtext}
          {isExpanded && subtext2}
          {!isExpanded && (
            <ReadMoreButton onClick={() => setIsExpanded(true)}>
              Read more
            </ReadMoreButton>
          )}
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      const startY = index === 0 ? "10%" : "10";  // Start the first element lower
      t1.fromTo(
        el.childNodes[0],
        {
          y: startY,
        },
        {
          y: "-6%",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <Section id="roadmap">
      <Title>Life's journey</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="First Entrepreneurship Experience (2001)"
            subtext={
              <>
                When I was 12 years old, my older brother Andrey bought a new CD burner for his college project. I was instantly fascinated by the idea of creating my own CDs.
                </>}
            subtext2={<>
                <br /><br />
                Eager to learn, I asked Andrey to teach me how to burn CDs. He showed me the process, and I quickly started burning CDs of computer games that my friends had but I didn't. It felt like I had discovered a superpower!
                <br /><br />
                But then I had an idea: why not start burning CDs for my friends? I went to the local computer store, bought a stack of blank CDs and a few popular games, and began my entrepreneurial journey.
                <br /><br />
                I started selling the CDs to my classmates at school. At first, it seemed like a brilliant plan, but I soon realized the risks involved. Not only was I jeopardizing my friendships, but I also faced the possibility of getting expelled if caught. It was a tough lesson to learn.
                <br /><br />
                In the end, I almost got kicked out of school. The principal shut down my lucrative business, but not before I had saved up enough money to buy my own computer. It was a bittersweet moment - the end of my first entrepreneurial experience, but the beginning of a new chapter in my life. Looking back, I'm grateful for learning the basic fundemental skills: how to make money by turning ideas into real projects.              
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="First Software Experience (2004)"
            subtext={
              <>
                Back in the day, software development wasn't something you could image you could do yourself.
                <br /><br />
                It was mostly perceived as something big companies did, like Microsoft, Google, or Yandex in Russia. Luckily, my school
                </>}
            subtext2={<>
            provided informatics classes where we learned how to write simple programs in Pascal and Visual Basic.
                <br /><br />
                It was an eye-opening experience to learn that you could program a computer to do a job for you, whatever it might be. I'm grateful to my informatics teacher Irina, who encouraged us to work on our own projects. That's when I started writing my own programs.
                <br /><br />
                Needless to say, they were pretty basic at first. But soon, I realized I could create fun stuff too. At the time, PowerPoint was a big deal, and it was cool to practice creating animated presentations.
                <br /><br />
                I took it one step further and integrated some Visual Basic scripts to make the slides interactive. I turned the slides into a puzzle game where the user had to navigate through a labyrinth to get to the next slide.
                <br /><br />
                It was so much fun, and my classmates even asked me to make games for them! That experience sparked my passion for software.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="First job (2006)"
            subtext={
              <>
                This might sound counterintuitive, but my first job was actually at McDonald's. And it wasn't by accident.
                <br /><br />
                I remember that day very clearly when I came back from summer vacation, having just turned 16. My older brother Andrey sat with me to have a profound discussion about my future, as college was approaching. I'm so glad we had that conversation, and I still remember his words as if he said them now.
                <br /><br />
                What really struck me was when he said, "You know, you're a smart kid, but you're not street smart. You need to learn how to deal with people, work hard, and make money. You need to get a job."
                <br /><br />
                I asked him why I needed a job in the first place. He then gave a compelling argument and told me about his colleague Dima Pokaluhin. This guy was making $20k a month as the CFO of Adidas Russia at the age of 25. And he started his career as an intern at a Big 4 accounting firm. The point of the story was clear: you've got to start early and plan your journey ahead of time to be successful.
                <br /><br />
                I quickly doubled down on finishing up my school, quit playing computer games, started learning English, and when I turned 17, the only serious job I could get was at McDonald's. It was indeed a terrifying experience, but it served its purpose. I did become a hardworking person.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Another big lesson learned (2007)"
            subtext={
              <>
                The next two jobs followed the same logic. I wanted to develop my communication skills, so where did I go? I went to work at a local Best Buy store (Technopark in Russia), did my fair share of selling juice makers, and did it well. Then I went on to work at Raiffeisenbank, where I learned the ropes of being precise and attentive. It was my first experience of mundane corporate life.
                <br /><br />
                Funny story and a big lesson: my colleague Alexander and I hacked the bank bonus system, in a legal way. Back then, every rep would be rewarded for how many approved loan applications they brought in, not for the actual loans given out. So, we created a small project where we would run a pre-approval process for loans and get a commission for every approved loan, even though not every customer would end up getting one. We basically went around the bank's corporate clients and asked employees if they wanted to know how much of a loan they could get. We had an insane number of applications to process, to the extent that we hired other colleagues internally to help us process them.
                <br /><br />
                It was so much fun making tons of bonuses. But then the bank got suspicious of us, started an investigation, and they didn't like our project at all, even though some customers would end up getting loans. They eventually fired me on the grounds of breaking the internal procedure of how applications were processed, because I was not allowed to reassign any of my work to other employees. I was 19 years old. I was devastated. But I learned a big lesson: you can't be a cowboy in the corporate world, you can't do anything without a prior approval.
                <br /><br />
                The funniest thing, though, is that the next year, the bank implemented this project as a de facto standard approach to selling loans, and somebody probably got a huge promotion for the idea. Another validation check point.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="First legit company. First software product (2008)"
            subtext={
              <>
                It all started with a random project. Our friend Pavel approached us with an opportunity to work on a warehouse outstaffing project for stocktaking procedures. At first, it seemed like a simple task, but we quickly realized the potential to streamline the process with custom software.
                <br /><br />
                Excited by the challenge, we dove into building a solution that could manage the entire stocktaking workflow. From assigning tasks to tracking progress and generating reports, we wanted to create a tool that would make the process more efficient and less error-prone.
                <br /><br />
                As with any first-time endeavor, we encountered our fair share of obstacles. Looking back, it's clear that we were a bit naive in our approach to building production-ready software. We made mistakes, learned from them, and continuously improved our product.
                <br /><br />
                Despite the challenges, our hard work paid off. We managed to attract a few clients. To our surprise, this small project turned out to be quite lucrative. We generated over $500k in revenue, although a significant portion of it went towards covering the headcount costs.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Consulting experience (2010-2015)"
            subtext={
              <>
                Consulting was probably the most boring part of my life, despite being the most intense and educational experience.
                <br /><br />
                Coming from mostly technical and entrepreneurial background, aligning myself with the corporate world was a challenge.
                <br /><br />
                Day in and day out managing client expectations and just talking, which felt like a departure from my true passions.
                <br /><br />
                The remaining time was dedicated to project management and delivering enterprise software solutions. Tedious work, but I recognized its value to these dinasour companies.
                <br /><br />
                I persevered through five years of delivering polished, profitable projects to clients across Denmark, Italy, Russia, the UAE, and Egypt. My dedication earned me top performance ratings and several promotions along the way.              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="All the way through Exit (2017)"
            subtext={
              <>
                It was an incredible journey. I had saved up $150k before I left my comfortable job at Accenture and started a bootstrapped business with my university friend Alex.
                <br /><br />
                We almost went under water, but pivoted at the last second and found a lucrative niche of booking processing for hotels. 
                <br /><br />
                We quickly grew the company to 100 employees (5 engineers) and $8m in GMV. And sold part of the company within 18 months of starting it.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Rent automation (2017-2018)"
            subtext={
              <>
                After having the successful small exit experience, I felt so pumped. I thought I was a genius and could do anything. I started a new project in the real estate industry, building a platform to automate the rental process.
                <br /><br />
                Oh, I wish I had been a quicker learner. The idea of rent automation is by all means a tar pit idea. It looks so plausible on the surface, right? Go and automate the archaic rental process of apartments, creating an Uber-like experience on Craigslist.
                <br /><br />
                But the reality is that the rental process is very human-centric. It's not about the technology; it's about the people. And the people are not ready to change their habits.
                <br /><br />
                Also, since it's a people-centered business, it's primarily driven by trust and not logic. And trust is not something you can build with technology. It's a long-term relationship. Nobody cares if you can make an extra 10% in rental income unless you build the credibility that you are a legitimate business.
                <br /><br />
                Well, anyway, it was a great experience, with lots of lessons learned. I'm glad I didn't lose too much time on this project.
                <br /><br />
                It wasn't an outright failure. We had close to 300 paying customers, $1.3 million in GMV, $300k in ARR at peak, and an 80% margin. The company is still active.
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="ARINA"
            subtext={
              <>
                First legitimate experience in the AI/ML space. I'm deeply grateful to MESI university for introducing me to neural networks.
                <br /><br />
                Inspired by AI breakthroughs like DeepMind's AlphaGo defeating Go champion Lee Sedol, I launched a new project in the AI/ML sector.
                <br /><br />
                We analyzed millions of real estate sales records, merged them with all publicly available classifieds, and developed a model to determine the market price of any property.
                <br /><br />
                Our focus was on the Moscow market, which turned out to be a critical mistake.
                <br /><br />
                Progress was slow initially. When I first presented the idea to investors and customers, no one took it seriously. So, I decided to invest my own exit savings—around $300k—to buy undervalued apartments and sell them for a profit based on the model's predictions.
                <br /><br />
                I never visited the apartments before purchasing; I trusted the algorithm completely. It paid off. I made around $50k in 12 months from about 9 deals.
                <br /><br />
                This initial success helped me raise $1.5 million from my network. It was incredibly affirming to receive such trust. We also secured our first enterprise client, Rosbank, which started a paid pilot with us to assess mortgage deals.
                <br /><br />
                I was thrilled. It felt like everything I believed in was finally coming to fruition.
                <br /><br />
                But then, the unexpected happened. Just two months into the deal, war broke out.
                <br /><br />
                It was a national crisis. Being in my early 30s and partly Ukrainian, I was at high risk of being drafted. I had to make a swift decision.
                <br /><br />
                Fortuitously, I had just received my US visa on February 22nd. The war started the next day, and visa issuances halted. I returned from my visa trip to escalating tensions.
                <br /><br />
                By that Saturday, it was clear the situation was dire. Rumors swirled that the borders might close. After a tense call with a government-insider friend, I decided to leave immediately. I told my parents that it might be the last time we'd see each other for a while, grabbed my girlfriend, and we fled to Armenia.
                <br /><br />
                The border remained open, but the war intensified. Friends and acquaintances were drafted and faced unimaginable choices. Many didn't survive.
                <br /><br />
                Back in Russia, the real estate market collapsed. The ruble lost half its value in a week. The market froze, and my company suffered greatly. I was forced to make the heart-wrenching decision to shut it down.
              </>
}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="US journey (2022-Present)"
            subtext={
              <>
                Oh, how I wished for a smooth transition to the US, but reality had other plans. My past achievements meant little here. Amidst personal upheavals, including a breakup and friends not following through on promises to relocate.
                <br /><br />
                I found myself at San Francisco airport in April 2022 all alone. Drying up savings, without connections, struggling with English, coding skills forgotten, and clueless about the US startup scene.
                <br /><br />
                The first step was to connect with someone in the know. I moved into a Startup house in Palo Alto. My first day was filled with excitement, hoping to meet fellow entrepreneurs and possibly find a co-founder within a week. Instead, I found many were aspiring 'entrepreneurs' working odd jobs.
                <br /><br />
                Despite the risk of falling into the same trap, I was fortunate to meet my first co-founder there. Our project was a disaster, but our friendship endured our breakup as co-founders. Which later led to so many fruitful conversations and references. What happened next?
                <br /><br />
                I knew I needed to build my reputation. But how? Where to start?
                <br /><br />
                To succeed as a startup founder, you need two things: technical skills and direct communication with your customers/users. So, I enrolled in daily English classes. I began coding again, building apps, meeting people, and showcasing my work.
                <br /><br />
                Ohh. It is so hard. You get a brillaint idea, you start executing, and you crash against the wall of reality.
                <br /><br />
                First, the contrast with the rest of the world was stark: what I did in Russia was years behind what was happening in the Bay.
                <br /><br />
                Second, the average attention span of people in the Bay is about five times shorter than elsewhere, because there are so many things happening at the same time.
                <br /><br />
                Third, The competition is fierce. You must be the best to get noticed, delivering outstanding results from the first draft of your project.
                <br /><br />
                I embarked on building. One app, then another, and another... I worked on close to 15 projects in 2 years, spanning consumer, B2B, enterprise, finance, marketing, social media, cloud infrastructure, and developer tools.
                <br /><br />
                Some projects gained traction, with thousands of users and thousands in monthly recurring revenue. A few even received recognition from well-known founders and experts.
                <br /><br />
                But none of the 15 projects worked out. Cofounder disputes, bad ideas, lack of expertise in certain tech stack, intense competition, lack of funding- many reasons. 
                <br /><br />
                But I'm still here. Still building, learning, growing, and hustling.
                <br /><br />
                Somewhat close to March 2023, I felt very, very bad. For the first time in my life, I felt so low. It was a nightmare turning real. Working on several projects straight that turned into failures. Being such a stranger in a new country from a cultural and language perspective. Not having close friends, not having a girlfriend or relative close by. Not taking rest. And running out of money. Oh, it was a horrible experience. And not even logically. In terms of my daytime spirit, I was fine, I knew things were going to work out. But being an ADHD introverted nerd, I was hit hard during the nighttime. Every dream was a nightmare where I was killed, again and again. Every time I woke up, I wished I was dead. It was horrifying. At some point, I remember I called up my parents and for the first time in my life, I said I'm not ok, I need some help.
                <br /><br />
                The help came unexpectedly. A few friends had mentioned Vipassana meditation by that point. But one story, Kate's, stood out. She had suffered from the same experience. Moved to the US at the same time, didn't have any connections, started from scratch, but nothing was working out. She found a way out through deepening her spiritual practice, specifically Vipassana as taught by Goenka. Through it, she found a way to stay balanced, optimistic, persevere, and start a successful yoga practice.
               <br /><br />
               At first, I thought it was a religious sect. Sure, you can fix your psychological state, but at what cost? I didn't want to become a religious fanatic. But she wasn't one. She described meditation as something akin to a sport. She compared it to yoga and explained how you can manage your mind state similarly to how you can manage your body balance on a yoga mat.
               <br /><br />
               Wow, that was something very novel. I had never heard of such a thing. I was always a fan of self-improvement, but I never thought that you could improve your mind state by just sitting and observing your breath. I was intrigued. I started looking for the next course.
               <br /><br />
               I thought, alright, I'll give it a try. But then, looking at the Vipassana schedule, I thought: no way! 10 days of practice, no access to the internet. I can't do that; I have work to do. It's just a waste of time!
               <br /><br />
               But the desire to fix my depression overpowered. I ventured to go on a shorter 2-day weekend meditation course at Tathagata Meditation Center in San Jose.
               <br /><br />
               Again, wow effect. This is a legit thing. There is a reason why billions of people have done it for thousands of years. I was simply an ignorant kid who didn't appreciate advice from human history.
               <br /><br />
               Alright, I'm in, but how do I get real benefits? Two days of meditation was barely an introduction. It just gave me a taste of what I could expect considering the feedback I received from folks who had done it for years.
               <br /><br />
               The next thing was to sign up for the 10-day course. I did it. I went on it on May 3rd, 2023, and I will never be the same person again, ever. I was blind, and I awakened. On day 8 of the course, I felt something and realized something that had been haunting me my entire life.
               <br /><br />
               I clearly remember the night when I went back to my room after a 15-hour meditation day. I lay down, and then the familiar nightmare stress would roll in. And this type of nightmare had been chasing me my entire life. Ever since I was a kid, maybe 7 or 8 years old, I remember this nightmare coming back to me again and again.
               <br /><br />
               It was so deeply ingrained in me, it was like an enemy who grew up with me and knew all my weak spots. It was like a shadow that was always there, always following me, always waiting for the right moment to strike.
               <br /><br />
               And for the first time ever, I was able to look into his eyes and just observe him. I was able to see him for what he was. I was able to see that he was just a shadow, just a figment of my imagination. He was nothing but a projection of my own fears and insecurities.
               <br /><br />
               OMG, I thought I became immortal or something, haha. After that night, I ran to an interview with my teach next morning to boast about my breakthrough. Bruce congratulated me, and my journey began.
               <br /><br />
               In the following 12 months, I spent 60 days meditating full time on top of my daily 2 hours practice. Which seems ridiculous. It's like running a marathon for a person who never ran in his life.
               <br /><br />
               It seems such a waste of time and energy, to spend so much time doing nothing? Right? It is so counterintuitive. It doesn't make any sense. Well, until it does.
               <br /><br />
               The first 90 days of practice were hard. I did get out of depression. The investment paid off well. But it wasn't a complete remedy. And no other big breakthroughs followed.
              <br /><br />
              But I continued, and to keep myself upbeat and accountable, I signed up for another course. I went on a second course, I made more meditator friends. We continued daily practice together over Zoom. It helped. We still meditate from time to time, but it's not critical anymore. Then I signed up for a third course. Then I did a few more two and three-day courses. Then I signed up for a 4th course. And things started to evolve. Things really started to shift in my life.
              <br /><br />
              I quit all bad habits I could name. No weed, no alcohol, no excessive sugar. Exercise every dayly for at least an hour. Running, competitive sports. Meticulous daily sleep schedule. Work discipline. Relationship with friends. Girlfriend. New hobbies outside of tech like contact improv, ecstatic dance, cooking. Writing a journal, writing a blog. And the coding became so much better, winning in hackathons, being recognized as a legit engineer by Sergey Brin, Jimmy Ba, and others. Wow, I never felt so much clarity in my life. I never felt so happy.
              <br /><br />
              So here I am, still running out of money, but with a ton of enthusiasm. Happy to venture into new projects, figuring out how to build the next big thing...
              </>
            }
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
