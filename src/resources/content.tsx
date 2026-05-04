import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Matthew",
  lastName: "Diakonov",
  name: "Matthew Diakonov",
  role: "Engineer & Entrepreneur",
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
  description: "Recent tech projects, hobbies, personal life story, friends",
  headline: <>Yet another tech bro?</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">screenpipe</strong>
      </Row>
    ),
    href: "/work/screenpipe",
  },
  subline: (
    <>
      I&apos;m at the intersection of engineering (20 products, won 3 hackathons in the Bay),
      startups (1 exit, 3 funded startups), vipassana meditation, and sports.
      Currently based in <Text as="span" size="xl" weight="strong">San Francisco</Text>, building the next thing.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name} – engineer, entrepreneur, meditator, based in San Francisco`,
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
        I live in San Francisco and work on various tech projects in ML, developer tools,
        LLM apps, productivity, and EEG. I&apos;m a CS grad with an MBA, a former Accenture Strategy consultant,
        and a serial entrepreneur with one exit. I discovered my spiritual journey through Vipassana meditation
        and I&apos;m deeply invested in the SF tech community.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent / Open Source",
        timeframe: "2022 – Present",
        role: "Engineer & Founder",
        achievements: [
          <>
            Built 20+ products spanning AI/ML, developer tools, and consumer apps.
            Won 3 hackathons in the Bay Area at AGI House and Cerebral Valley.
          </>,
          <>
            Cofounded screenpipe, fundraised $2,850,000, 15k GitHub stars.
          </>,
          <>
            On top of it, created fazm.ai, a Jarvis style AI assistant that does real work for you,
            scaled to thousands of MRR despite being fully open source.
          </>,
          <>
            Created social-autoposter tool (s4l.ai) that reaches millions of users every month
            on autopilot with AI-generated content grounded in information from the internet and customers.
          </>,
        ],
        images: [],
      },
      {
        company: "ARINA (AI Real Estate)",
        timeframe: "2019 – 2022",
        role: "Founder & CEO",
        achievements: [
          <>
            Analyzed millions of real estate sales records, developed ML model to determine
            market prices. Made ~$50k from 9 algorithmic deals in 12 months.
          </>,
          <>
            Raised $1.5M from network. Secured first enterprise client (Rosbank) for
            mortgage deal assessment pilot.
          </>,
        ],
        images: [],
      },
      {
        company: "Hotel CRM (Exit)",
        timeframe: "2015 – 2017",
        role: "Co-Founder",
        achievements: [
          <>
            Built a B2B SaaS CRM for small hotels. Grew to 100 employees, 5 engineers,
            $8M in GMV. Sold part of the company within 18 months.
          </>,
        ],
        images: [],
      },
      {
        company: "Accenture Strategy",
        timeframe: "2010 – 2015",
        role: "Business Consultant",
        achievements: [
          <>
            Delivered projects for PepsiCo, Mondelez, Etihad, AB InBev, and PMI across
            Denmark, Italy, Russia, UAE, and Egypt.
          </>,
          <>
            Earned top performance ratings and multiple promotions. Completed MBA at
            University of Illinois while sponsored by Accenture.
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
        name: "University of Illinois",
        description: <>MBA program, sponsored by Accenture.</>,
      },
      {
        name: "Moscow University (MESI)",
        description: <>Computer Science. Entered through Math Olympiad.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "AI / ML",
        description: (
          <>Embeddings, RAG, fine-tuning, foundational models, agentic pipelines, EEG processing.</>
        ),
        images: [],
      },
      {
        title: "Full Stack",
        description: (
          <>Next.js, React, TypeScript, Python, Node.js. Ship code every day.</>
        ),
        images: [],
      },
      {
        title: "Product & Startups",
        description: (
          <>1 exit, 3 funded startups, 20+ shipped products. From idea to users.</>
        ),
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and life...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Tech projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photos – ${person.name}`,
  description: `Photos by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
