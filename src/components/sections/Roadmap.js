import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

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

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
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
                <br /><br />
                Eager to learn, I asked Andrey to teach me how to burn CDs. He showed me the process, and I quickly started burning CDs of computer games that my friends had but I didn't. It felt like I had discovered a superpower!
                <br /><br />
                But then I had an idea: why not start burning CDs for my friends? I went to the local computer store, bought a stack of blank CDs and a few popular games, and began my entrepreneurial journey.
                <br /><br />
                I started selling the CDs to my classmates at school. At first, it seemed like a brilliant plan, but I soon realized the risks involved. Not only was I jeopardizing my friendships, but I also faced the possibility of getting expelled if caught. It was a tough lesson to learn.
                <br /><br />
                In the end, I almost got kicked out of school. The principal shut down my lucrative business, but not before I had saved up enough money to buy my own computer. It was a bittersweet moment - the end of my first entrepreneurial experience, but the beginning of a new chapter in my life. Looking back, I'm grateful for learning the basic fundemental skills: how to make money by turning ideas into real projects.              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="First Software Experience (2004)"
            subtext={
              <>
                Back in the day, software development wasn't something you could image you could do yourself.
                <br /><br />
                It was mostly perceived as something big companies did, like Microsoft, Google, or Yandex in Russia. Luckily, my school provided informatics classes where we learned how to write simple programs in Pascal and Visual Basic.
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
            title="Keyrent"
            subtext={
              <>
                Proptech management software, founder, 2017-2018. Scaled the company to 300 units. Achieved $1.3mm in GMV. Built the product with a team of 2 engineers                
                <br /><br />
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="ARINA"
            subtext={
              <>
                ML model for assessment of residential real estate, 2018-2022 (similar to Opendoor, Zillow). Built a team of 10 people (including 5 engineers). Achieved over $1mm in GMV               
                <br /><br />
              </>
            }
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="US"
            subtext={
              <>
                Working on developer tools, LLM wrappers, function calling, agentic frameworks, chunking, embeddings, fine-tuning.               
                <br /><br />
              </>
            }
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
