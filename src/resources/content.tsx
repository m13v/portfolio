import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Matthew",
  lastName: "Diakonov",
  name: "Matthew Diakonov",
  role: "Engineer & Founder",
  avatar: "/images/matthew/avatar.jpg",
  email: "i@m13v.com",
  location: "America/Los_Angeles",
  languages: ["English", "Russian"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Updates on projects and ideas</>,
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/m13v/",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/m13v",
    essential: true,
  },
  {
    name: "X",
    icon: "twitter",
    link: "https://x.com/m13v_",
    essential: true,
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/m13vcom",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Matthew Diakonov",
  description:
    "Engineer and founder in San Francisco. Cofounded screenpipe (YC S26). Builds agents that run without supervision.",
  headline: <>{person.name}</>,
  featured: {
    display: false,
    title: <>S4L</>,
    href: "/work/s4l",
  },
  subline: <>Engineer and founder in San Francisco.</>,
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About: ${person.name}`,
  description: `${person.name}, engineer and founder in San Francisco`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I live in San Francisco and build agentic software: developer tools, LLM
        pipelines, and consumer products. Math and computer science olympiads,
        then a CS degree. I built and sold a B2B SaaS hotel channel manager, and
        cofounded screenpipe. Now CTO and cofounder at Sundial.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Sundial (backed by a16z Speedrun)",
        timeframe: "Present",
        role: "Cofounder, CTO",
        achievements: [
          <>
            Infrastructure for human-agent collaboration: making agent work
            legible and reviewable when model autonomy outpaces our capacity to
            check it.
          </>,
        ],
        images: [],
      },
      {
        company: "S4L (s4l.ai)",
        timeframe: "",
        role: "Founder",
        achievements: [
          <>
            Done-for-you Reddit and X growth. Agents and humans pick high-intent
            threads where buyers are already asking, write the reply in the
            client&apos;s voice, and post it. Clients pay per signed-up user or
            booked call.
          </>,
          <>
            Autonomous engagement pipelines across Reddit, X, and GitHub, plus DM
            outreach and programmatic SEO on DataForSEO and Search Console. Core
            autoposter is open source at github.com/m13v/social-autoposter.
          </>,
        ],
        images: [],
      },
      {
        company: "screenpipe / Mediar",
        timeframe: "",
        role: "Cofounder",
        achievements: [
          <>
            Cofounded screenpipe: continuous local screen and audio capture that
            feeds context to coding agents. 21k GitHub stars, YC S26, $3M
            raised.
          </>,
          <>
            Built fazm.ai, a voice-first agent that operates a whole Mac. Scaled
            to thousands in MRR while fully open source.
          </>,
        ],
        images: [],
      },
      {
        company: "ARINA (AI Real Estate)",
        timeframe: "",
        role: "Founder & CEO",
        achievements: [
          <>
            Trained a price model on millions of real estate sales records, then
            put $300k of my own money behind it. Made ~$50k on 9 algorithmic
            deals in 12 months without visiting a single apartment.
          </>,
          <>
            Raised $1.5M. Signed Rosbank as the first enterprise client for a
            mortgage assessment pilot. Shut down when the war collapsed the
            market.
          </>,
        ],
        images: [],
      },
      {
        company: "Hotel Channel Manager",
        timeframe: "",
        role: "Cofounder (exit)",
        achievements: [
          <>
            B2B SaaS channel manager for small hotels. Grew to 100 employees
            and $8M GMV, sold part of the company within 18 months.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Moscow University (MESI)",
        description: <>Computer Science. Entered through Math Olympiad.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "What I Work On",
    skills: [
      {
        title: "Agentic systems",
        description: (
          <>
            Long-running agent pipelines, tool use, evaluation, and the
            unglamorous parts: retries, state, and knowing when to stop.
          </>
        ),
        images: [],
      },
      {
        title: "Applied ML",
        description: (
          <>
            Embeddings, RAG, chunking strategy, fine-tuning, and inference cost.
            Comfortable in the weeds of a model, not a researcher.
          </>
        ),
        images: [],
      },
      {
        title: "Full stack",
        description: (
          <>
            Next.js, React, TypeScript, Python, Node. I ship the whole thing, from
            schema to landing page.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Writing",
  title: "Writing",
  description: `Essays by ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Work",
  description: `Selected projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photos by ${person.name}`,
  description: `Photos by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
