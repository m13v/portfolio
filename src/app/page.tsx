import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
  Media,
  TypeFx,
  Accordion,
  AccordionGroup,
  Card,
  Timeline,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { ProjectList } from "@/components/work/ProjectList";
import { getPosts } from "@/utils/utils";
import { NoScrollAccordion } from "@/components/NoScrollAccordion";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

function VipassanaDays() {
  const start = new Date("2023-09-11");
  const now = new Date();
  const days = Math.floor(
    (now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return <>{days}</>;
}

export default function Home() {
  const allProjects = getPosts(["src", "app", "work", "projects"])
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .map((p) => ({
      slug: p.slug,
      metadata: {
        title: p.metadata.title,
        summary: p.metadata.summary,
        publishedAt: p.metadata.publishedAt,
        images: p.metadata.images || [],
        team: p.metadata.team,
        link: p.metadata.link,
      },
      content: p.content,
    }));

  const faqItems = [
    {
      title: "HOW TECHNICAL ARE YOU?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          I&apos;m a CS grad, but I&apos;ve never worked as a SWE. However, I
          do ship code every day nowadays. I&apos;m very comfortable getting into
          the weeds of any tech stack: playing with chunking, embeddings,
          quantization, fine-tuning, changing layers in foundational models,
          deploying things, building frontend, backend, and middleware. Although
          I&apos;m not a pro in any of this, when there is a big enough business
          case, I&apos;ll figure it out quickly.
        </Text>
      ),
    },
    {
      title: "DO YOU HAVE BUSINESS EXPERIENCE?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          Starting a company from scratch, finding the first customers/users,
          building a team, raising money, and scaling a company are all things
          I&apos;ve done before. I&apos;ve also worked with large companies such
          as PepsiCo, Mondelez, Etihad, AB InBev, and PMI as part of Accenture
          consulting projects, and I have a good understanding of how they
          operate.
        </Text>
      ),
    },
    {
      title: "WHAT IS YOUR MAIN WEAKNESS?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          Socially inept, and natural languages are harder for me than technical
          ones.
        </Text>
      ),
    },
    {
      title: "ARE YOU LOOKING FOR A TEAM/COFOUNDER?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          Yes, but I strongly believe that fewer people on the team is better. I
          think every new team addition should raise the average. So, I guess
          I&apos;m looking for someone way better than myself.
        </Text>
      ),
    },
    {
      title: "WHY ARE YOU DOING STARTUPS?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          I think that&apos;s the best way I can do something meaningful.
        </Text>
      ),
    },
    {
      title: "WHY DO YOU LIVE IN SAN FRANCISCO?",
      content: (
        <Text variant="body-default-m" onBackground="neutral-weak">
          My observation is that the better the people around you, the better
          person you become. SF has the most diverse culture, with great people
          from all walks of life, including arts, psychology, tech, sports, and
          spiritual paths. Also, the ocean, bay, forests, climate, and city
          landscape are amazing. And the prices well represent it, paying $2k for
          a room, haha.
        </Text>
      ),
    },
  ];

  const journeyItems = [
    {
      label: "2001",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">
            First Entrepreneurship Experience
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            When I was 12 years old, my older brother Andrey bought a new CD
            burner for his college project. I was instantly fascinated by the
            idea of creating my own CDs.
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Eager to learn, I asked Andrey to teach me how to burn CDs. He
                showed me the process, and I quickly started burning CDs of
                computer games that my friends had but I didn&apos;t. It felt
                like I had discovered a superpower!
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But then I had an idea: why not start burning CDs for my friends?
                I went to the local computer store, bought a stack of blank CDs
                and a few popular games, and began my entrepreneurial journey.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I started selling the CDs to my classmates at school. At first,
                it seemed like a brilliant plan, but I soon realized the risks
                involved. Not only was I jeopardizing my friendships, but I also
                faced the possibility of getting expelled if caught. It was a
                tough lesson to learn.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                In the end, I almost got kicked out of school. The principal shut
                down my lucrative business, but not before I had saved up enough
                money to buy my own computer. It was a bittersweet moment—the end
                of my first entrepreneurial experience, but the beginning of a
                new chapter in my life. Looking back, I&apos;m grateful for
                learning the basic fundamental skills: how to make money by
                turning ideas into real projects.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2004",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">First Software Experience</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Back in the day, software development wasn&apos;t something you
            could imagine doing yourself. It was mostly perceived as something
            big companies did, like Microsoft, Google, or Yandex in Russia.
            Luckily, my school
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                provided informatics classes where we learned how to write simple
                programs in Pascal and Visual Basic.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It was an eye-opening experience to learn that you could program
                a computer to do a job for you, whatever it might be. I&apos;m
                grateful to my informatics teacher Irina, who encouraged us to
                work on our own projects. That&apos;s when I started writing my
                own programs.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Needless to say, they were pretty basic at first. But soon, I
                realized I could create fun stuff too. At the time, PowerPoint
                was a big deal, and it was cool to practice creating animated
                presentations.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I took it one step further and integrated some Visual Basic
                scripts to make the slides interactive. I turned the slides into
                a puzzle game where the user had to navigate through a labyrinth
                to get to the next slide.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It was so much fun, and my classmates even asked me to make games
                for them! That experience sparked my passion for software.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2006",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">
            First Job — McDonald&apos;s
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            This might sound counterintuitive, but my first job was actually at
            McDonald&apos;s. And it wasn&apos;t by accident. I remember that day
            very clearly when I came back from summer vacation, having just
            turned 16.
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                My older brother Andrey sat with me to have a profound discussion
                about my future, as college was approaching. I&apos;m so glad we
                had that conversation, and I still remember his words as if he
                said them now.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                What really struck me was when he said, &quot;You know, you&apos;re
                a smart kid, but you&apos;re not street smart. You need to learn
                how to deal with people, work hard, and make money. You need to
                get a job.&quot;
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I asked him why I needed a job in the first place. He then gave a
                compelling argument and told me about his colleague Dima
                Pokaluhin. This guy was making $20k a month as the CFO of Adidas
                Russia at the age of 25. And he started his career as an intern
                at a Big 4 accounting firm. The point of the story was clear:
                you&apos;ve got to start early and plan your journey ahead of
                time to be successful.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I quickly doubled down on finishing up my school, quit playing
                computer games, started learning English, and when I turned 17,
                the only serious job I could get was at McDonald&apos;s. It was
                indeed a terrifying experience, but it served its purpose. I did
                become a hardworking person.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2007",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">Another Big Lesson Learned</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            The next two jobs followed the same logic. I wanted to develop my
            communication skills, so where did I go?
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                I went to work at a local Best Buy store (Technopark in Russia),
                did my fair share of selling juice makers, and did it well. Then
                I went on to work at Raiffeisenbank, where I learned the ropes of
                being precise and attentive. It was my first experience of
                mundane corporate life.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Funny story and a big lesson: my colleague Alexander and I hacked
                the bank bonus system, in a legal way. Back then, every rep would
                be rewarded for how many approved loan applications they brought
                in, not for the actual loans given out. So, we created a small
                project where we would run a pre-approval process for loans and
                get a commission for every approved loan, even though not every
                customer would end up getting one. We basically went around the
                bank&apos;s corporate clients and asked employees if they wanted
                to know how much of a loan they could get. We had an insane
                number of applications to process, to the extent that we hired
                other colleagues internally to help us process them.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It was so much fun making tons of bonuses. But then the bank got
                suspicious of us, started an investigation, and they didn&apos;t
                like our project at all, even though some customers would end up
                getting loans. They eventually fired me on the grounds of
                breaking the internal procedure of how applications were
                processed because I was not allowed to reassign any of my work to
                other employees. I was 19 years old. I was devastated. But I
                learned a big lesson: you can&apos;t be a cowboy in the corporate
                world, you can&apos;t do anything without prior approval.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The funniest thing, though, is that the next year, the bank
                implemented this project as a de facto standard approach to
                selling loans, and somebody probably got a huge promotion for the
                idea. Another validation checkpoint.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2008",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">
            First Legit Company. First Software Product
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            It all started with a random project. Our friend Pavel approached us
            with an opportunity to work on
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                a warehouse outstaffing project for stocktaking procedures. At
                first, it seemed like a simple task, but we quickly realized the
                potential to streamline the process with custom software.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Excited by the challenge, we dove into building a solution that
                could manage the entire stocktaking workflow. From assigning
                tasks to tracking progress and generating reports, we wanted to
                create a tool that would make the process more efficient and less
                error-prone.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                As with any first-time endeavor, we encountered our fair share of
                obstacles. Looking back, it&apos;s clear that we were a bit naive
                in our approach to building production-ready software. We made
                mistakes, learned from them, and continuously improved our
                product.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Despite the challenges, our hard work paid off. We managed to
                attract a few clients. To our surprise, this small project turned
                out to be quite lucrative. We generated over $500k in revenue,
                although a significant portion of it went towards covering the
                headcount costs.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2010–2015",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">Consulting at Accenture Strategy</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Consulting was probably the most
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                boring part of my life, despite being the most intense and
                educational experience.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Coming from a mostly technical and entrepreneurial background,
                aligning myself with the corporate world was a challenge.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Day in and day out managing client expectations and just talking
                felt like a departure from my true passions.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The remaining time was dedicated to project management and
                delivering enterprise software solutions. Tedious work, but I
                recognized its value to these dinosaur companies.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I persevered through five years of delivering polished, profitable
                projects to clients across Denmark, Italy, Russia, the UAE, and
                Egypt. My dedication earned me top performance ratings and several
                promotions along the way.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2017",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">All the Way Through Exit</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            It was an incredible journey. I had saved up $150k before I left my
            comfortable job at Accenture and
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                started a bootstrapped business with my university friend Alex.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                We almost went underwater, but pivoted at the last second and
                found a lucrative niche in booking processing for hotels.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                We quickly grew the company to 100 employees (5 engineers) and
                $8m in GMV. We sold part of the company within 18 months of
                starting it.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2017–2018",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">Rent Automation</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            After having the successful small exit experience, I felt so pumped.
            I thought I was a genius and could do anything. I started a new
            project in the real estate industry, building a platform to automate
            the rental process.
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                Oh, I wish I had been a quicker learner. The idea of rent automation
                is by all means a tar pit idea. It looks so plausible on the surface,
                right? Go and automate the archaic rental process of apartments,
                creating an Uber-like experience on Craigslist.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But the reality is that the rental process is very human-centric.
                It&apos;s not about the technology; it&apos;s about the people. And
                the people are not ready to change their habits.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Also, since it&apos;s a people-centered business, it&apos;s primarily
                driven by trust and not logic. And trust is not something you can
                build with technology. It&apos;s a long-term relationship. Nobody
                cares if you can make an extra 10% in rental income unless you build
                the credibility that you are a legitimate business.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Well, anyway, it was a great experience, with lots of lessons
                learned. I&apos;m glad I didn&apos;t lose too much time on this
                project.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It wasn&apos;t an outright failure. We had close to 300 paying
                customers, $1.3 million in GMV, $300k in ARR at peak, and an 80%
                margin. The company is still active.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2019–2022",
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">ARINA — AI Real Estate</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            First legitimate experience in the AI/ML space. I&apos;m deeply
            grateful to MESI University for introducing me to neural networks.
            Inspired by AI breakthroughs like DeepMind&apos;s AlphaGo defeating
            Go champion Lee Sedol, I
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                launched a new project in the AI/ML sector.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                We analyzed millions of real estate sales records, merged them
                with all publicly available classifieds, and developed a model to
                determine the market price of any property.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Our focus was on the Moscow market, which turned out to be a
                critical mistake.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Progress was slow initially. When I first presented the idea to
                investors and customers, no one took it seriously. So, I decided
                to invest my own exit savings—around $300k—to buy undervalued
                apartments and sell them for a profit based on the model&apos;s
                predictions.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I never visited the apartments before purchasing; I trusted the
                algorithm completely. It paid off. I made around $50k in 12
                months from about 9 deals.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                This initial success helped me raise $1.5 million from my
                network. It was incredibly affirming to receive such trust. We
                also secured our first enterprise client, Rosbank, which started
                a paid pilot with us to assess mortgage deals.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I was thrilled. It felt like everything I believed in was finally
                coming to fruition.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But then, the unexpected happened. Just two months into the deal,
                war broke out.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It was a national crisis. Being in my early 30s and partly
                Ukrainian, I was at high risk of being drafted. I had to make a
                swift decision.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Fortuitously, I had just received my US visa on February 22nd.
                The war started the next day, and visa issuances halted. I
                returned from my visa trip to escalating tensions.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                By that Saturday, it was clear the situation was dire. Rumors
                swirled that the borders might close. After a tense call with a
                government-insider friend, I decided to leave immediately. I told
                my parents that it might be the last time we&apos;d see each
                other for a while, grabbed my girlfriend, and we fled to Armenia.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The border remained open, but the war intensified. Friends and
                acquaintances were drafted and faced unimaginable choices. Many
                didn&apos;t survive.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Back in Russia, the real estate market collapsed. The ruble lost
                half its value in a week. The market froze, and my company
                suffered greatly. I was forced to make the heart-wrenching
                decision to shut it down.
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
    {
      label: "2022–Present",
      state: "active" as const,
      children: (
        <Column gap="8">
          <Text variant="heading-strong-m">US Journey</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Oh, how I wished for a smooth transition to the US, but reality had
            other plans.
          </Text>
          <Accordion title="Read more" size="s">
            <Column gap="8">
              <Text variant="body-default-s" onBackground="neutral-weak">
                My past achievements meant little here. Amidst personal
                upheavals, including a breakup and friends not following through
                on promises to relocate.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I found myself at San Francisco airport in April 2022 all alone.
                Drying up savings, without connections, struggling with English,
                coding skills forgotten, and clueless about the US startup scene.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The first step was to connect with someone in the know. I moved
                into a Startup house in Palo Alto. My first day was filled with
                excitement, hoping to meet fellow entrepreneurs and possibly find
                a co-founder within a week. Instead, I found many were aspiring
                &apos;entrepreneurs&apos; working odd jobs.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Despite the risk of falling into the same trap, I was fortunate
                to meet my first co-founder there. Our project was a disaster,
                but our friendship endured our breakup as co-founders, which
                later led to so many fruitful conversations and references. What
                happened next?
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I knew I needed to build my reputation. But how? Where to start?
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                To succeed as a startup founder, you need two things: technical
                skills and direct communication with your customers/users. So, I
                enrolled in daily English classes. I began coding again, building
                apps, meeting people, and showcasing my work.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Ohh. It is so hard. You get a brilliant idea, you start
                executing, and you crash against the wall of reality.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                First, the contrast with the rest of the world was stark: what I
                did in Russia was years behind what was happening in the Bay.
                Second, the average attention span of people in the Bay is about
                five times shorter than elsewhere because there are so many
                things happening at the same time. Third, the competition is
                fierce. You must be the best to get noticed, delivering
                outstanding results from the first draft of your project.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I embarked on building. One app, then another, and another... I
                worked on close to 15 projects in 2 years, spanning consumer,
                B2B, enterprise, finance, marketing, social media, cloud
                infrastructure, and developer tools.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Some projects gained traction, with thousands of users and
                thousands in monthly recurring revenue. A few even received
                recognition from well-known founders and experts.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But none of the 15 projects worked out. Cofounder disputes, bad
                ideas, lack of expertise in certain tech stacks, intense
                competition, lack of funding—many reasons.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But I&apos;m still here. Still building, learning, growing, and
                hustling.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Somewhat close to March 2023, I felt very, very bad. For the
                first time in my life, I felt so low. It was a nightmare turning
                real. Working on several projects straight that turned into
                failures. Being such a stranger in a new country from a cultural
                and language perspective. Not having close friends, not having a
                girlfriend or relative close by. Not taking rest. And running out
                of money. Oh, it was a horrible experience. And not even
                logically. In terms of my daytime spirit, I was fine, I knew
                things were going to work out. But being an ADHD introverted
                nerd, I was hit hard during the nighttime. Every dream was a
                nightmare where I was killed, again and again. Every time I woke
                up, I wished I was dead. It was horrifying. At some point, I
                remember I called up my parents and for the first time in my
                life, I said I&apos;m not ok, I need some help.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The help came unexpectedly. A few friends had mentioned Vipassana
                meditation by that point. But one story, Kate&apos;s, stood out.
                She had suffered from the same experience. Moved to the US at the
                same time, didn&apos;t have any connections, started from scratch,
                but nothing was working out. She found a way out through
                deepening her spiritual practice, specifically Vipassana as
                taught by Goenka. Through it, she found a way to stay balanced,
                optimistic, persevere, and start a successful yoga practice.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                At first, I thought it was a religious sect. Sure, you can fix
                your psychological state, but at what cost? I didn&apos;t want to
                become a religious fanatic. But she wasn&apos;t one. She
                described meditation as something akin to a sport. She compared
                it to yoga and explained how you can manage your mind state
                similarly to how you can manage your body balance on a yoga mat.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Wow, that was something very novel. I had never heard of such a
                thing. I was always a fan of self-improvement, but I never
                thought that you could improve your mind state by just sitting
                and observing your breath. I was intrigued. I started looking for
                the next course.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I thought, alright, I&apos;ll give it a try. But then, looking
                at the Vipassana schedule, I thought: no way! 10 days of
                practice, no access to the internet. I can&apos;t do that; I
                have work to do. It&apos;s just a waste of time!
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But the desire to fix my depression overpowered. I ventured to go
                on a shorter 2-day weekend meditation course at Tathagata
                Meditation Center in San Jose.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Again, wow effect. This is a legit thing. There is a reason why
                billions of people have done it for thousands of years. I was
                simply an ignorant kid who didn&apos;t appreciate advice from
                human history.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Alright, I&apos;m in, but how do I get real benefits? Two days of
                meditation was barely an introduction. It just gave me a taste of
                what I could expect considering the feedback I received from
                folks who had done it for years.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The next thing was to sign up for the 10-day course. I did it. I
                went on it on May 3rd, 2023, and I will never be the same person
                again, ever. I was blind, and I awakened. On day 8 of the course,
                I felt something and realized something that had been haunting me
                my entire life.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I clearly remember the night when I went back to my room after a
                15-hour meditation day. I lay down, and then the familiar
                nightmare stress would roll in. And this type of nightmare had
                been chasing me my entire life. Ever since I was a kid, maybe 7
                or 8 years old, I remember this nightmare coming back to me again
                and again.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It was so deeply ingrained in me, it was like an enemy who grew
                up with me an enemy who grew up with me and knew all my weak
                spots. It was like a shadow that was always there, always
                following me, always waiting for the right moment to strike.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                And for the first time ever, I was able to look into his eyes and
                just observe him. I was able to see him for what he was. I was
                able to see that he was just a shadow, just a figment of my
                imagination. He was nothing but a projection of my own fears and
                insecurities.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                OMG, I thought I became immortal or something, haha. After that
                night, I ran to an interview with my teacher the next morning to
                boast about my breakthrough. Bruce congratulated me, and my
                journey began.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                In the following 12 months, I spent 60 days meditating full-time
                on top of my daily 2-hour practice. Which seems ridiculous.
                It&apos;s like running a marathon for a person who never ran in
                his life.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                It seems such a waste of time and energy, to spend so much time
                doing nothing? Right? It is so counterintuitive. It doesn&apos;t
                make any sense. Well, until it does.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                The first 90 days of practice were hard. I did get out of
                depression. The investment paid off well. But it wasn&apos;t a
                complete remedy. And no other big breakthroughs followed.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                But I continued, and to keep myself upbeat and accountable, I
                signed up for another course. I went on a second course, I made
                more meditator friends. We continued daily practice together over
                Zoom. It helped. We still meditate from time to time, but
                it&apos;s not critical anymore. Then I signed up for a third
                course. Then I did a few more two and three-day courses. Then I
                signed up for a 4th course. And things started to evolve. Things
                really started to shift in my life.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                I quit all bad habits I could name. No weed, no alcohol, no
                excessive sugar. Exercise every day for at least an hour. Running,
                competitive sports. Meticulous daily sleep schedule. Work
                discipline. Relationship with friends. Girlfriend. New hobbies
                outside of tech like contact improv, ecstatic dance, cooking.
                Writing a journal, writing a blog. And the coding became so much
                better, winning in hackathons, being recognized as a legit
                engineer by Sergey Brin, Jimmy Ba, and others. Wow, I never felt
                so much clarity in my life. I never felt so happy.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                So here I am, still running out of money, but with a ton of
                enthusiasm. Happy to venture into new projects, figuring out how
                to build the next big thing...
              </Text>
            </Column>
          </Accordion>
        </Column>
      ),
    },
  ];

  const gratitudePeople = [
    "Marina Diakonov",
    "Yury Diakonov",
    "Irina Victorovna",
    "Valentina Alekseevna",
    "Andrey Talalaev",
    "Alex Boldyrev",
    "Elizaveta Litvinova",
    "Max Irisov",
    "Raffaella Campagnoli",
    "William Durst",
    "Alex Reshetnikov",
    "Alex Kravcov",
    "Yury Kudryakov",
    "Veronika Aksenova",
    "Ilya Mehedkin",
    "Nolan Holden",
    "Kate",
    "Bruce Dockter",
  ];

  return (
    <NoScrollAccordion>
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── HERO ── */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}

          <RevealFx
            translateY="4"
            fillWidth
            horizontal="center"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="center"
            paddingBottom="8"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-l"
              align="center"
            >
              I&apos;m at the intersection of:
            </Text>
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.3}
            fillWidth
            horizontal="center"
            paddingBottom="8"
          >
            <TypeFx
              words={[
                "AI agentic pipelines.",
                "Sport.",
                "Vipassana.",
              ]}
              speed={60}
              hold={2000}
              loop
              trigger="instant"
              variant="heading-default-xl"
              onBackground="brand-medium"
              align="center"
            />
          </RevealFx>

          <RevealFx
            translateY="8"
            delay={0.4}
            fillWidth
            horizontal="center"
            paddingBottom="32"
          >
            <Column gap="8" horizontal="center">
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
                wrap="balance"
              >
                Engineering (40+ products, won 16 hackathons, judged 9),
                startups (9 startups, 1 exit, 4 funded, $6M raised), vipassana
                meditation (8 courses completed, <VipassanaDays />d of
                practice).
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                align="center"
              >
                Single, no kids
              </Text>
            </Column>
          </RevealFx>

          <RevealFx paddingTop="12" delay={0.5} horizontal="center">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>

      {/* ── STORY ── */}
      <Column fillWidth gap="24" paddingY="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="32" s={{ direction: "column" }}>
          <Column flex={1} gap="16">
            <Heading as="h2" variant="display-strong-s">
              My Story
            </Heading>
            <Media src="/images/matthew/MyMovie.mp4" aspectRatio="1/1" />
          </Column>
          <Column flex={2} gap="16">
            <Text variant="body-default-l">
              I live in San Francisco and build various tech projects in the
              AI agentic space. Agentic tools, B2B and consumer products, PCB
              and wearable devices. I&apos;m fortunate to have grown up in
              Moscow, Russia, where a strong technical culture is prevalent. I
              got into college through a Math Olympiad and studied Computer
              Science.
            </Text>
            <Text variant="body-default-l">
              I then embarked on a 5-year journey as a Business Consultant at
              Accenture Strategy, helping various large clients cut their costs
              and increase revenues while working on projects in different
              countries around Europe and the Middle East.
            </Text>
            <Accordion title="Read more" size="m">
              <Column gap="12">
                <Text variant="body-default-m" onBackground="neutral-weak">
                  It was an incredible gift from Accenture to let me study in
                  Illinois for an MBA program while also taking care of me
                  financially. When I had saved up enough money from my job, I
                  finally left Accenture and started my first tech company back
                  in 2015. My co-founder, Alexander, and I were lucky to get
                  initial traction, build the product, and finally sell the
                  company. Back then, B2B SaaS was still a novel concept in
                  Europe, so it was relatively easy for us to get all the way
                  through exit with our CRM tool for small hotels.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Needless to say, I was under the delusion that I was a great
                  entrepreneur and that I could do it again and again. The
                  following three startups were not as successful, haha.
                  I&apos;ll tell you more about it below.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Being an immigrant in the US is tough, but I greatly appreciate
                  the challenge. Living in SF has certainly opened up a new life
                  for me. I discovered my spiritual journey and delved deeply
                  into the tech world.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Even though I&apos;ve had an exit in the past and diverse
                  experience across CS, business, entrepreneurship, and
                  investments, none of these things count because all of these
                  experiences are from outside of the US. So, I&apos;ve had to
                  pave my way into the local community from scratch. And it seems
                  to be working out quite well.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  I&apos;ve been able to build my credibility both as a technical
                  contributor and an agile product manager and mentor. My friends
                  and I have had an incredible time winning local hackathons at
                  the AGI House and Cerebral Valley Shack15 while also serving as
                  a judge and mentor at Calhacks hackathons multiple times.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  However, the biggest realization that came to me here is that I
                  never want to be a one-sided person. I highly appreciate the
                  benefits I harvest from maintaining my daily running routine,
                  playing pickleball, volleyball, soccer, and tennis. I also
                  engage in spiritual practices like Vipassana and creative
                  endeavors like contact improv classes, ecstatic dance, and
                  Burning Man.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  I also found it incredibly valuable to immerse myself in the
                  local culture, meeting people from different walks of life by
                  mingling with them at places like The Commons and The Center
                  SF, where I now live. There is something unique and ingenious
                  about SF culture, which is neatly hidden from the eyes of
                  tourists and business professionals.
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  One thing that stood out to me the most in recent months is the
                  pursuit of happiness through the dissolution of ego. I keep
                  realizing that serving others without expecting anything in
                  return is probably the single most important skill I have to
                  master. This is why I&apos;m so glad to contribute to
                  open-source projects in the AI space like LlamaIndex or simply
                  be a server at a local Vipassana meditation camp.
                </Text>
              </Column>
            </Accordion>
            <Button
              href="mailto:i@m13v.com"
              variant="tertiary"
              size="s"
              arrowIcon
            >
              If any of this clicks with you, send me an email
            </Button>
          </Column>
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>

      {/* ── LIFE'S JOURNEY ── */}
      <Column fillWidth gap="24" paddingY="l">
        <Heading as="h2" variant="display-strong-s">
          Life&apos;s Journey
        </Heading>
        <Timeline items={journeyItems} alignment="left" size="m" />
      </Column>

      {/* ── RECENT PROJECTS ── */}
      <Column fillWidth gap="24" paddingY="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Heading as="h2" variant="display-strong-s">
          Recent Projects
        </Heading>
        <ProjectList projects={allProjects} />
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>

      {/* ── GRATITUDE ── */}
      <Column fillWidth gap="24" paddingY="l">
        <Heading as="h2" variant="display-strong-s">
          Gratitude
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          People who shaped my journey and who I&apos;m deeply grateful to:
        </Text>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
            gap: "var(--static-space-8)",
            width: "100%",
          }}
        >
          {gratitudePeople.map((name) => (
            <Card
              key={name}
              padding="12"
              style={{ textAlign: "center" }}
            >
              <Text variant="label-default-s">{name}</Text>
            </Card>
          ))}
        </div>
      </Column>

      {/* ── FAQ ── */}
      <Column fillWidth gap="24" paddingY="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Heading as="h2" variant="display-strong-s">
          FAQ
        </Heading>
        <AccordionGroup items={faqItems} size="m" autoCollapse />
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>

      {/* ── MOTTO ── */}
      <Column fillWidth horizontal="center" paddingY="l">
        <Text
          variant="heading-default-m"
          onBackground="neutral-weak"
          align="center"
        >
          Life motto: I&apos;m uncomfortable being comfortable
        </Text>
      </Column>
    </Column>
    </NoScrollAccordion>
  );
}
