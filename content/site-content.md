# m13v.com — Complete Site Content

## URL Structure & Routing (preserve these in rebuild)

| URL | Page | Notes |
|-----|------|-------|
| `/` | Homepage | Single-page with anchor sections: #home, #about, #roadmap, #showcase, #team, #faq |
| `/setup` | Workstation setup | Hardware & software list |
| `/#home` | Home section | Hero with typewriter text + video |
| `/#about` | Story section | Bio + expandable text |
| `/#roadmap` | Life's journey section | Timeline of 10 life events |
| `/#showcase` | Gratitude section | Scrolling people cards |
| `/#team` | Recent projects section | 21 project cards with LinkedIn embeds |
| `/#faq` | FAQ section | 6 accordion Q&As |

**Domain:** m13v.com (deployed on Vercel)

---

## Site Metadata

- **Title:** Matthew Diakonov
- **Description (meta content):** Recent tack projects, hobbies, personal life story, friends
  > Note: Source has "tack" not "tech" — likely a typo. Also, the meta `name` attribute is "Matthew Diakonov personal website" instead of standard "description".
- **Favicon:** assets/icon.ico
- **Email:** i@m13v.com

---

## Navigation

| Label | Section ID |
|-------|-----------|
| Home | #home |
| Story | #about |
| Life's journey | #roadmap |
| Gratitude | #showcase |
| Recent projects | #team |
| FAQ | #faq |

**CTA Button:** LinkedIn — https://www.linkedin.com/in/matthew-diakonov-a84a1911/

---

## Home Section

### Heading
Yet another tech bro?

### Typewriter Strings
1. Machine learning.
2. Agentic pipelines.
3. Vipassna and EEG.

### Subtitle
I'm at the intersection of:
- engineering (20 products, won 3 hackathons in the Bay),
- startups (1 exit, 3 funded startups),
- vipassana meditation (60d of courses, {daysSinceStart}d of practice),
- sports (4.0 @ pickleball, 7.4m/mi in 5mi @ running).

Right now, I have the bandwidth to work on a new project, either something open-source, or a potential startup.

Single, no kids 😢

> Note: `{daysSinceStart}` = days since September 11, 2023

### CTA Button
Jump to tech stuff → #team

### Hero Video
- **File:** assets/Paparazzi_Video.mp4
- **Behavior:** Autoplay, loop, muted, with mute/unmute toggle
- **Info tooltip:** Video was generated from a single picture with DreamTalk diffusion model ([arXiv](https://arxiv.org/abs/2312.09767v1)))
  > Note: Source has double closing parenthesis "(arXiv))" — preserved as-is from original
- **Tooltip image:** assets/cropped-2022.JPG

---

## Story Section

### Video
- **File:** assets/MyMovie.mp4
- **Behavior:** Autoplay, loop, muted
- **Info tooltip:** Video was generated from a single picture with Stable Video Diffusion. [(stability.ai)](https://stability.ai/news/stable-video-diffusion-open-ai-video-model)
- **Tooltip image:** assets/105.jpg

### Main Text
I live in San Francisco and work on various tech projects in ML, developer tools, LLM apps, productivity, and EEG.

I'm fortunate to have

### Expandable "Read More" Text
grown up in Moscow, Russia, where a strong technical culture is prevalent. I got into college through a Math Olympiad and studied Computer Science. I then embarked on a 5-year journey as a Business Consultant at Accenture Strategy, helping various large clients cut their costs and increase revenues while working on projects in different countries around Europe and the Middle East.

It was an incredible gift from Accenture to let me study in Illinois for an MBA program while also taking care of me financially. When I had saved up enough money from my job, I finally left Accenture and started my first tech company back in 2015. My co-founder, Alexander, and I were lucky to get initial traction, build the product, and finally sell the company. Back then, B2B SaaS was still a novel concept in Europe, so it was relatively easy for us to get all the way through exit with our CRM tool for small hotels.

Needless to say, I was under the delusion that I was a great entrepreneur and that I could do it again and again. The following three startups were not as successful, haha. I'll tell you more about it below.

### Secondary Text (lighter)
Being an immigrant in the US is tough, but I greatly appreciate the challenge. Living in SF has certainly opened up a new life for me. I discovered my spiritual journey and delved deeply into the tech world.

Even though I've had an exit in the past and diverse experience across CS, business, entrepreneurship, and investments, none of these things count because all of these experiences are from outside of the US. So, I've had to pave my way into the local community from scratch. And it seems to be working out quite well.

I've been able to build my credibility both as a technical contributor and an agile product manager and mentor. My friends and I have had an incredible time winning local hackathons at the AGI House and Cerebral Valley Shack15 while also serving as a judge and mentor at Calhacks hackathons multiple times.

However, the biggest realization that came to me here is that I never want to be a one-sided person. I highly appreciate the benefits I harvest from maintaining my daily running routine, playing pickleball, volleyball, soccer, and tennis. I also engage in spiritual practices like Vipassana and creative endeavors like contact improv classes, ecstatic dance, and Burning Man.

I also found it incredibly valuable to immerse myself in the local culture, meeting people from different walks of life by mingling with them at places like The Commons and The Center SF, where I now live. There is something unique and ingenious about SF culture, which is neatly hidden from the eyes of tourists and business professionals.

One thing that stood out to me the most in recent months is the pursuit of happiness through the dissolution of ego. I keep realizing that serving others without expecting anything in return is probably the single most important skill I have to master. This is why I'm so glad to contribute to open-source projects in the AI space like LlamaIndex or simply be a server at a local Vipassana meditation camp.

### CTA
If any of this clicks with you, send me an email. Happy to connect! → mailto:i@m13v.com

---

## Life's Journey Section (Timeline)

### 1. First Entrepreneurship Experience (2001)
When I was 12 years old, my older brother Andrey bought a new CD burner for his college project. I was instantly fascinated by the idea of creating my own CDs.

**Read more:**
Eager to learn, I asked Andrey to teach me how to burn CDs. He showed me the process, and I quickly started burning CDs of computer games that my friends had but I didn't. It felt like I had discovered a superpower!

But then I had an idea: why not start burning CDs for my friends? I went to the local computer store, bought a stack of blank CDs and a few popular games, and began my entrepreneurial journey.

I started selling the CDs to my classmates at school. At first, it seemed like a brilliant plan, but I soon realized the risks involved. Not only was I jeopardizing my friendships, but I also faced the possibility of getting expelled if caught. It was a tough lesson to learn.

In the end, I almost got kicked out of school. The principal shut down my lucrative business, but not before I had saved up enough money to buy my own computer. It was a bittersweet moment—the end of my first entrepreneurial experience, but the beginning of a new chapter in my life. Looking back, I'm grateful for learning the basic fundamental skills: how to make money by turning ideas into real projects.

### 2. First Software Experience (2004)
Back in the day, software development wasn't something you could imagine doing yourself. It was mostly perceived as something big companies did, like Microsoft, Google, or Yandex in Russia. Luckily, my school

**Read more:**
provided informatics classes where we learned how to write simple programs in Pascal and Visual Basic.

It was an eye-opening experience to learn that you could program a computer to do a job for you, whatever it might be. I'm grateful to my informatics teacher Irina, who encouraged us to work on our own projects. That's when I started writing my own programs.

Needless to say, they were pretty basic at first. But soon, I realized I could create fun stuff too. At the time, PowerPoint was a big deal, and it was cool to practice creating animated presentations.

I took it one step further and integrated some Visual Basic scripts to make the slides interactive. I turned the slides into a puzzle game where the user had to navigate through a labyrinth to get to the next slide.

It was so much fun, and my classmates even asked me to make games for them! That experience sparked my passion for software.

### 3. First job (2006)
This might sound counterintuitive, but my first job was actually at McDonald's. And it wasn't by accident. I remember that day very clearly when I came back from summer vacation, having just turned 16.

**Read more:**
My older brother Andrey sat with me to have a profound discussion about my future, as college was approaching. I'm so glad we had that conversation, and I still remember his words as if he said them now.

What really struck me was when he said, "You know, you're a smart kid, but you're not street smart. You need to learn how to deal with people, work hard, and make money. You need to get a job."

I asked him why I needed a job in the first place. He then gave a compelling argument and told me about his colleague Dima Pokaluhin. This guy was making $20k a month as the CFO of Adidas Russia at the age of 25. And he started his career as an intern at a Big 4 accounting firm. The point of the story was clear: you've got to start early and plan your journey ahead of time to be successful.

I quickly doubled down on finishing up my school, quit playing computer games, started learning English, and when I turned 17, the only serious job I could get was at McDonald's. It was indeed a terrifying experience, but it served its purpose. I did become a hardworking person.

### 4. Another big lesson learned (2007)
The next two jobs followed the same logic. I wanted to develop my communication skills, so where did I go?

**Read more:**
I went to work at a local Best Buy store (Technopark in Russia), did my fair share of selling juice makers, and did it well. Then I went on to work at Raiffeisenbank, where I learned the ropes of being precise and attentive. It was my first experience of mundane corporate life.

Funny story and a big lesson: my colleague Alexander and I hacked the bank bonus system, in a legal way. Back then, every rep would be rewarded for how many approved loan applications they brought in, not for the actual loans given out. So, we created a small project where we would run a pre-approval process for loans and get a commission for every approved loan, even though not every customer would end up getting one. We basically went around the bank's corporate clients and asked employees if they wanted to know how much of a loan they could get. We had an insane number of applications to process, to the extent that we hired other colleagues internally to help us process them.

It was so much fun making tons of bonuses. But then the bank got suspicious of us, started an investigation, and they didn't like our project at all, even though some customers would end up getting loans. They eventually fired me on the grounds of breaking the internal procedure of how applications were processed because I was not allowed to reassign any of my work to other employees. I was 19 years old. I was devastated. But I learned a big lesson: you can't be a cowboy in the corporate world, you can't do anything without prior approval.

The funniest thing, though, is that the next year, the bank implemented this project as a de facto standard approach to selling loans, and somebody probably got a huge promotion for the idea. Another validation checkpoint.

### 5. First legit company. First software product (2008)
It all started with a random project. Our friend Pavel approached us with an opportunity to work on

**Read more:**
a warehouse outstaffing project for stocktaking procedures. At first, it seemed like a simple task, but we quickly realized the potential to streamline the process with custom software.

Excited by the challenge, we dove into building a solution that could manage the entire stocktaking workflow. From assigning tasks to tracking progress and generating reports, we wanted to create a tool that would make the process more efficient and less error-prone.

As with any first-time endeavor, we encountered our fair share of obstacles. Looking back, it's clear that we were a bit naive in our approach to building production-ready software. We made mistakes, learned from them, and continuously improved our product.

Despite the challenges, our hard work paid off. We managed to attract a few clients. To our surprise, this small project turned out to be quite lucrative. We generated over $500k in revenue, although a significant portion of it went towards covering the headcount costs.

### 6. Consulting experience (2010-2015)
Consulting was probably the most

**Read more:**
boring part of my life, despite being the most intense and educational experience.

Coming from a mostly technical and entrepreneurial background, aligning myself with the corporate world was a challenge.

Day in and day out managing client expectations and just talking felt like a departure from my true passions.

The remaining time was dedicated to project management and delivering enterprise software solutions. Tedious work, but I recognized its value to these dinosaur companies.

I persevered through five years of delivering polished, profitable projects to clients across Denmark, Italy, Russia, the UAE, and Egypt. My dedication earned me top performance ratings and several promotions along the way.

### 7. All the way through Exit (2017)
It was an incredible journey. I had saved up $150k before I left my comfortable job at Accenture and

**Read more:**
started a bootstrapped business with my university friend Alex.

We almost went underwater, but pivoted at the last second and found a lucrative niche in booking processing for hotels.

We quickly grew the company to 100 employees (5 engineers) and $8m in GMV. We sold part of the company within 18 months of starting it.

### 8. Rent automation (2017-2018)
> Note: This item has NO "Read more" expansion in the source — all text is shown upfront.

After having the successful small exit experience, I felt so pumped. I thought I was a genius and could do anything. I started a new project in the real estate industry, building a platform to automate the rental process.

Oh, I wish I had been a quicker learner. The idea of rent automation is by all means a tar pit idea. It looks so plausible on the surface, right? Go and automate the archaic rental process of apartments, creating an Uber-like experience on Craigslist.

But the reality is that the rental process is very human-centric. It's not about the technology; it's about the people. And the people are not ready to change their habits.

Also, since it's a people-centered business, it's primarily driven by trust and not logic. And trust is not something you can build with technology. It's a long-term relationship. Nobody cares if you can make an extra 10% in rental income unless you build the credibility that you are a legitimate business.

Well, anyway, it was a great experience, with lots of lessons learned. I'm glad I didn't lose too much time on this project.

It wasn't an outright failure. We had close to 300 paying customers, $1.3 million in GMV, $300k in ARR at peak, and an 80% margin. The company is still active.

### 9. ARINA
First legitimate experience in the AI/ML space. I'm deeply grateful to MESI University for introducing me to neural networks. Inspired by AI breakthroughs like DeepMind's AlphaGo defeating Go champion Lee Sedol, I

**Read more:**
launched a new project in the AI/ML sector.

We analyzed millions of real estate sales records, merged them with all publicly available classifieds, and developed a model to determine the market price of any property.

Our focus was on the Moscow market, which turned out to be a critical mistake.

Progress was slow initially. When I first presented the idea to investors and customers, no one took it seriously. So, I decided to invest my own exit savings—around $300k—to buy undervalued apartments and sell them for a profit based on the model's predictions.

I never visited the apartments before purchasing; I trusted the algorithm completely. It paid off. I made around $50k in 12 months from about 9 deals.

This initial success helped me raise $1.5 million from my network. It was incredibly affirming to receive such trust. We also secured our first enterprise client, Rosbank, which started a paid pilot with us to assess mortgage deals.

I was thrilled. It felt like everything I believed in was finally coming to fruition.

But then, the unexpected happened. Just two months into the deal, war broke out.

It was a national crisis. Being in my early 30s and partly Ukrainian, I was at high risk of being drafted. I had to make a swift decision.

Fortuitously, I had just received my US visa on February 22nd. The war started the next day, and visa issuances halted. I returned from my visa trip to escalating tensions.

By that Saturday, it was clear the situation was dire. Rumors swirled that the borders might close. After a tense call with a government-insider friend, I decided to leave immediately. I told my parents that it might be the last time we'd see each other for a while, grabbed my girlfriend, and we fled to Armenia.

The border remained open, but the war intensified. Friends and acquaintances were drafted and faced unimaginable choices. Many didn't survive.

Back in Russia, the real estate market collapsed. The ruble lost half its value in a week. The market froze, and my company suffered greatly. I was forced to make the heart-wrenching decision to shut it down.

### 10. US journey (2022-Present)
Oh, how I wished for a smooth transition to the US, but reality had other plans.

**Read more:**
My past achievements meant little here. Amidst personal upheavals, including a breakup and friends not following through on promises to relocate.

I found myself at San Francisco airport in April 2022 all alone. Drying up savings, without connections, struggling with English, coding skills forgotten, and clueless about the US startup scene.

The first step was to connect with someone in the know. I moved into a Startup house in Palo Alto. My first day was filled with excitement, hoping to meet fellow entrepreneurs and possibly find a co-founder within a week. Instead, I found many were aspiring 'entrepreneurs' working odd jobs.

Despite the risk of falling into the same trap, I was fortunate to meet my first co-founder there. Our project was a disaster, but our friendship endured our breakup as co-founders, which later led to so many fruitful conversations and references. What happened next?

I knew I needed to build my reputation. But how? Where to start?

To succeed as a startup founder, you need two things: technical skills and direct communication with your customers/users. So, I enrolled in daily English classes. I began coding again, building apps, meeting people, and showcasing my work.

Ohh. It is so hard. You get a brilliant idea, you start executing, and you crash against the wall of reality.

First, the contrast with the rest of the world was stark: what I did in Russia was years behind what was happening in the Bay.

Second, the average attention span of people in the Bay is about five times shorter than elsewhere because there are so many things happening at the same time.

Third, the competition is fierce. You must be the best to get noticed, delivering outstanding results from the first draft of your project.

I embarked on building. One app, then another, and another... I worked on close to 15 projects in 2 years, spanning consumer, B2B, enterprise, finance, marketing, social media, cloud infrastructure, and developer tools.

Some projects gained traction, with thousands of users and thousands in monthly recurring revenue. A few even received recognition from well-known founders and experts.

But none of the 15 projects worked out. Cofounder disputes, bad ideas, lack of expertise in certain tech stacks, intense competition, lack of funding—many reasons.

But I'm still here. Still building, learning, growing, and hustling.

Somewhat close to March 2023, I felt very, very bad. For the first time in my life, I felt so low. It was a nightmare turning real. Working on several projects straight that turned into failures. Being such a stranger in a new country from a cultural and language perspective. Not having close friends, not having a girlfriend or relative close by. Not taking rest. And running out of money. Oh, it was a horrible experience. And not even logically. In terms of my daytime spirit, I was fine, I knew things were going to work out. But being an ADHD introverted nerd, I was hit hard during the nighttime. Every dream was a nightmare where I was killed, again and again. Every time I woke up, I wished I was dead. It was horrifying. At some point, I remember I called up my parents and for the first time in my life, I said I'm not ok, I need some help.

The help came unexpectedly. A few friends had mentioned Vipassana meditation by that point. But one story, Kate's, stood out. She had suffered from the same experience. Moved to the US at the same time, didn't have any connections, started from scratch, but nothing was working out. She found a way out through deepening her spiritual practice, specifically Vipassana as taught by Goenka. Through it, she found a way to stay balanced, optimistic, persevere, and start a successful yoga practice.

At first, I thought it was a religious sect. Sure, you can fix your psychological state, but at what cost? I didn't want to become a religious fanatic. But she wasn't one. She described meditation as something akin to a sport. She compared it to yoga and explained how you can manage your mind state similarly to how you can manage your body balance on a yoga mat.

Wow, that was something very novel. I had never heard of such a thing. I was always a fan of self-improvement, but I never thought that you could improve your mind state by just sitting and observing your breath. I was intrigued. I started looking for the next course.

I thought, alright, I'll give it a try. But then, looking at the Vipassana schedule, I thought: no way! 10 days of practice, no access to the internet. I can't do that; I have work to do. It's just a waste of time!

But the desire to fix my depression overpowered. I ventured to go on a shorter 2-day weekend meditation course at Tathagata Meditation Center in San Jose.

Again, wow effect. This is a legit thing. There is a reason why billions of people have done it for thousands of years. I was simply an ignorant kid who didn't appreciate advice from human history.

Alright, I'm in, but how do I get real benefits? Two days of meditation was barely an introduction. It just gave me a taste of what I could expect considering the feedback I received from folks who had done it for years.

The next thing was to sign up for the 10-day course. I did it. I went on it on May 3rd, 2023, and I will never be the same person again, ever. I was blind, and I awakened. On day 8 of the course, I felt something and realized something that had been haunting me my entire life.

I clearly remember the night when I went back to my room after a 15-hour meditation day. I lay down, and then the familiar nightmare stress would roll in. And this type of nightmare had been chasing me my entire life. Ever since I was a kid, maybe 7 or 8 years old, I remember this nightmare coming back to me again and again.

It was so deeply ingrained in me, it was like an enemy who grew up with me an enemy who grew up with me and knew all my weak spots. It was like a shadow that was always there, always following me, always waiting for the right moment to strike.

> Note: The duplicated phrase "an enemy who grew up with me" appears twice in the original source code (likely unintentional).

And for the first time ever, I was able to look into his eyes and just observe him. I was able to see him for what he was. I was able to see that he was just a shadow, just a figment of my imagination. He was nothing but a projection of my own fears and insecurities.

OMG, I thought I became immortal or something, haha. After that night, I ran to an interview with my teacher the next morning to boast about my breakthrough. Bruce congratulated me, and my journey began.

In the following 12 months, I spent 60 days meditating full-time on top of my daily 2-hour practice. Which seems ridiculous. It's like running a marathon for a person who never ran in his life.

It seems such a waste of time and energy, to spend so much time doing nothing? Right? It is so counterintuitive. It doesn't make any sense. Well, until it does.

The first 90 days of practice were hard. I did get out of depression. The investment paid off well. But it wasn't a complete remedy. And no other big breakthroughs followed.

But I continued, and to keep myself upbeat and accountable, I signed up for another course. I went on a second course, I made more meditator friends. We continued daily practice together over Zoom. It helped. We still meditate from time to time, but it's not critical anymore. Then I signed up for a third course. Then I did a few more two and three-day courses. Then I signed up for a 4th course. And things started to evolve. Things really started to shift in my life.

I quit all bad habits I could name. No weed, no alcohol, no excessive sugar. Exercise every day for at least an hour. Running, competitive sports. Meticulous daily sleep schedule. Work discipline. Relationship with friends. Girlfriend. New hobbies outside of tech like contact improv, ecstatic dance, cooking. Writing a journal, writing a blog. And the coding became so much better, winning in hackathons, being recognized as a legit engineer by Sergey Brin, Jimmy Ba, and others. Wow, I never felt so much clarity in my life. I never felt so happy.

So here I am, still running out of money, but with a ton of enthusiasm. Happy to venture into new projects, figuring out how to build the next big thing...

---

## Gratitude Section

**People acknowledged:**

| First Name | Last Name |
|-----------|-----------|
| Marina | Diakonov |
| Yury | Diakonov |
| Irina | Victorovna |
| Valentina | Alekseevna |
| Andrey | Talalaev |
| Alex | Boldyrev |
| Elizaveta | Litvinova |
| Max | Irisov |
| Raffaella | Campagnoli |
| William | Durst |
| Alex | Reshetnikov |
| Alex | Kravcov |
| Yury | Kudryakov |
| Veronika | Aksenova |
| Ilya | Mehedkin |
| Nolan | Holden |
| Kate | — |
| Bruce | Dockter |

---

## Recent Projects Section

| # | Name | Description | Link |
|---|------|-------------|------|
| 1 | screenpipe | Technical deep dive: screen recording, OCR & STT, local db, AI | https://www.linkedin.com/posts/m13v/activity-7227174333838675968 |
| 2 | Shadcn for AI | Customizable open source react components, LLM to generate UI content to adapt to user experience | https://www.linkedin.com/posts/m13v/activity-7209080988415475712 |
| 3 | AI Sales Assistant | An assistant that helps users find products. Rendering a React carousel through function calls for an e-commerce product catalog. The product search is multi-modal, allowing for context-based image searches | https://www.linkedin.com/posts/m13v/activity-7205835013702000640 |
| 4 | GPT Auto Debugger | Coding assistant that actually test runs the code in a safe sandbox environment. | https://www.linkedin.com/posts/m13v/activity-7204346420089245696 |
| 5 | Gemini 4 Docs | Search and chat with any documentation inside your terminal. | https://www.linkedin.com/posts/m13v/activity-7188433049213120512 |
| 6 | Realtime Sora | Gamified immersive image generation. Control prompts with keyboard shortcuts. SD Lightning, 15 frames/sec. | https://www.linkedin.com/posts/m13v/activity-7186172629676953600 |
| 7 | County Law RAG | Legal agent updating a vector database across all local county government websites, including materials published in PDF documents. | https://www.linkedin.com/posts/m13v/activity-7183692573184602113 |
| 8 | GPT vs. Gemini | An easy way to compare outputs from different models. One message - two answers. | https://www.linkedin.com/posts/m13v/activity-7182239229421187072 |
| 9 | SEMA: arXiv Search Agent | Research the latest academic papers using RAG, CoT, Crawler. | https://www.linkedin.com/posts/m13v/activity-7172740669008932864 |
| 10 | YouTube GPT | Summarizes any video into chapters with clickable timestamp links. | https://www.linkedin.com/posts/m13v/activity-7176403945651671041 |
| 11 | Semantic Chunking | Hierarchical chunking with LLMs allows for dynamic adjustment of chunk size based on semantic meaning. | https://www.linkedin.com/posts/m13v/activity-7166654942856884225 |
| 12 | Docs2CLI | Search any documentation online without leaving your VS Code. | https://www.linkedin.com/posts/m13v/activity-7158326288988995584 |
| 13 | Holodeck | AI tool that converts user analytics heatmaps into code improvements for your website. Run your A/B tests on autopilot. | https://www.linkedin.com/posts/m13v/activity-7155747786464878592 |
| 14 | Reddit -> LinkedIn Reposting Tool | Crawls predefined subreddits and reposts top-performing content. | https://www.linkedin.com/posts/m13v_weve-made-with-vadims-casecnikovs-a-reddit-activity-7151297160863453184-DNp1 |

> **Hardcoded inline content for project #14** (renders instead of LinkedIn embed):
> We've made (with Vadims Casecnikovs) a Reddit -> Linkedin reposting tool in 3 days and it worked!
> I've started gaining 10 followers a day without putting in any effort.
>
> Here's how it works:
> 1. Our script goes to predefined list of top subReddits
> 2. It then forwards top posts to our telegram bot
> 3. I then choose which post to repost in Telegram and forward it my reposting Telegram bot
> 4. It triggers a script to publish the post on my Linkedin page🕺
>
> Next steps:
> - Happy to give a beta access to anyone interested
> - Tweak the post title and content with chatGPT
> - Create a RAG based on my Linkedin profile content
> - Tweak new posts considering my profile / personality
| 15 | Virtual Try-On | Uses AI to put clothes on models, making a merchant's life easier. | https://www.linkedin.com/posts/m13v/activity-7142589169377116160 |
| 16 | Image Gen Tool | 1 million visitors in 3 months, 25k MAU, $10k MRR. | https://youtu.be/DNqqRRQaLk8 |
| 17 | Feliciti | Matching platform for residents and co-living houses. | https://www.linkedin.com/in/m13v/posts/coliving-startuphouse-techhouse-activity-7071924035613323264-P8bJ |
| 18 | GetQ | Cloud compute. Templates for your frontend and backend. | https://docs.google.com/presentation/d/17HxnFUF7jhE1Bc0C9W31on75dFszVZFll0JGBfVZ0-4/edit |
| 19 | Betzy | Bet on your good habits with friends. | https://youtu.be/WKirA7P59fQ |
| 20 | TimeTree | Time tracker for personal productivity. | https://docs.google.com/presentation/d/1OuZb8LslpVTa4_Hp8aRvs1enDjZ-lQ8FJ5BilJmM_vo/edit |
| 21 | Newcomers | Matchmaking among newcomers and locals for mutual help. | https://youtu.be/jGbqnAjLi-0 |

---

## FAQ Section

**Q: HOW TECHNICAL ARE YOU?**
I'm a CS grad, but I've never worked as a SWE. However, I do ship code every day nowadays. I'm very comfortable getting into the weeds of any tech stack: playing with chunking, embeddings, quantization, fine-tuning, changing layers in foundational models, deploying things, building frontend, backend, and middleware. Although I'm not a pro in any of this, when there is a big enough business case, I'll figure it out quickly.

**Q: DO YOU HAVE BUSINESS EXPERIENCE?**
Starting a company from scratch, finding the first customers/users, building a team, raising money, and scaling a company are all things I've done before. I've also worked with large companies such as PepsiCo, Mondelez, Etihad, AB InBev, and PMI as part of Accenture consulting projects, and I have a good understanding of how they operate.

**Q: WHAT IS YOUR MAIN WEAKNESS?**
Socially inept, and natural languages are harder for me than technical ones.

**Q: ARE YOU LOOKING FOR A TEAM/COFOUNDER**
Yes, but I strongly believe that fewer people on the team is better. I think every new team addition should raise the average. So, I guess I'm looking for someone way better than myself.

**Q: WHY ARE YOU DOING STARTUPS?**
I think that's the best way I can do something meaningful.

**Q: WHY DO YOU LIVE IN SAN FRANCISCO?**
My observation is that the better the people around you, the better person you become. SF has the most diverse culture, with great people from all walks of life, including arts, psychology, tech, sports, and spiritual paths. Also, the ocean, bay, forests, climate, and city landscape are amazing. And the prices well represent it, paying $2k for a room, haha.

---

## Footer / Banner

**Banner title:** Join me on social media
**Banner button:** Add to bookmarks (triggers browser bookmark prompt via JS)

> Note: There is also an UNUSED `sections/Banner.js` with title "Join the Weirdos Club" and a "Join Now" button — this is dead code, NOT rendered anywhere in the app.

### Social Links

| Platform | URL |
|----------|-----|
| Telegram | https://t.me/matthew_ddi |
| GitHub | https://github.com/matthew-heartful |
| Twitter | https://twitter.com/MatthewHeartful |
| LinkedIn | https://www.linkedin.com/in/matthew-diakonov-a84a1911/ |

**Footer text:** Life motto: I'm uncomfortable being comfortable

---

## Setup Page (/setup)

### Title
My Workstation

### Intro
I spend most of my day at this desk, so I've optimized every inch of it. Here's the hardware and software that powers my workflow.

### Hardware

| Name | Description |
|------|-------------|
| Samsung 57" Odyssey Neo G9 (G95NC) | 8K+ curved monitor — immersive workspace for research and side tasks |
| Dell UltraSharp U4025QW 40" | 5K2K ultrawide — primary display for coding and multitasking |
| MacBook Pro M4 | Main development machine — waiting for Mac Studio to replace it |
| AMD Threadripper 9980X | 200 GB RAM workstation for heavy ML workloads and parallel builds |
| HUGE Trackball Mouse | Ergonomic trackball — saves my wrist during long sessions |
| Apple Magic Keyboard | Low-profile keyboard for a clean, minimal desk |
| Logi Keypad | Programmable macro pad for custom shortcuts and workflow automation |
| Logi Ultra-Wide 4K Camera | High-quality webcam for calls and recordings |
| Bose Headphones (latest, noise cancelling) | Active noise cancellation — essential for deep work |
| AirPods Pro 3 | Dual audio — connected to both Mac and Windows simultaneously |
| Philips Speech One | Professional dictation microphone for crystal-clear voice input |
| Savant Elite Pedals | Foot pedals for extra input — because hands aren't enough |
| SKG Foot Massager | Your feet deserve care during marathon coding sessions |
| Two water bottles | Hydration is part of the setup 😄 |

### Software

| Name | Description | Link |
|------|-------------|------|
| Claude Code | AI-powered coding — running 20 agents in parallel for maximum velocity | — |
| Fazm | AI assistant for day-to-day tasks, planning, and operations | https://fazm.ai/m |
| Arc Browser | Modern browser with spaces, profiles, and a clean UI | — |
| Wispr Flow | Voice-to-text that actually works — dictate code, messages, and notes | — |

---

## Analytics Tracking IDs

| Service | ID |
|---------|----|
| Google Analytics 4 | G-0X7VCZSZGG |
| Google Tag Manager | GTM-M5SZMWZG |
| Hotjar | 4956789 |
