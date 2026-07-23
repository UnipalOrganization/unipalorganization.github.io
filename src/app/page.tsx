import {
  BookMarked,
  Bot,
  Clock,
  SlidersHorizontal,
  TrendingUp,
  Zap,
} from "lucide-react";

import { Main } from "@/components/craft/craft";
import { TypeWrite } from "@/components/type-write";
import { SquigglyHighlight } from "@/components/squiggly-highlight";
import {
  SiteNav,
  HeroFive,
  SchoolLogoSlider,
  FeatureOne,
  FeatureThree,
  FeatureFour,
  FeatureSix,
  FaqsThree,
  CtaThree,
  FooterThree,
} from "@/components/sections";

/**
 * Unipal landing page — US / Liberal Arts college market.
 *
 * Copy is derived from the internal sales guide (signals, not verbatim). Media
 * points at the neutral /placeholder.jpg and all button hrefs are left empty on
 * purpose — real assets and links are wired in later.
 */
export default function Home() {
  return (
    <>
      <SiteNav
        brand="Unipal"
        links={[
          { label: "Features", href: "#features" },
          { label: "Why Unipal", href: "#why" },
          { label: "FAQ", href: "#faq" },
        ]}
        cta={{ label: "See it live", href: "/get-started" }}
      />

      <Main>
        <HeroFive
          announcement={{
            label: "Live now at Colorado College",
            href: "/get-started",
          }}
          title={
            <>
              <SquigglyHighlight color="var(--primary-foreground)">chat</SquigglyHighlight>.
              <TypeWrite
                words={["amherst", "coloradocollege", "lafayette"]}
                cursorClassName="text-primary font-normal"
              />.edu
            </>
          }
          subtitle="An AI admissions champion, grounded in your school's own content. It answers every prospect's questions, surfaces what makes you their fit, and calls them to their next step down your funnel."
          image={{ src: "/hero2.mp4", alt: "Unipal admissions assistant" }}
        />

        <SchoolLogoSlider />

        <FeatureOne
          title={
            <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
              <img
                src="/Colorado_College_seal.svg"
                alt="Colorado College seal"
                className="inline-block h-10 w-10 md:h-12 md:w-12"
              />
              <span>
                <SquigglyHighlight color="var(--primary-foreground)">
                  Colorado College
                </SquigglyHighlight>{" "}
                put Unipal to work.
              </span>
            </span>
          }
          subtitle="&ldquo;Unipal answers the questions prospects were never going to email us, and shows us what they're actually asking about. It's like adding a recruiter who never clocks out.&rdquo; — Brett Woodard, Colorado College"
          items={[
            {
              icon: TrendingUp,
              title: "2–4×",
              description:
                "Campus visitors yield far higher than students who never come. Unipal turns questions into booked visits, sign-ups, and other conversion actions.",
            },
            {
              icon: Clock,
              title: "24/7",
              description:
                "Prospective students get grounded, sourced answers the moment they're curious — nights, weekends, long after the office closes.",
            },
            {
              icon: Zap,
              title: "5 minutes",
              description:
                "From a new subdomain record to a live assistant. No engineering project, no code — the rest runs on our side.",
            },
          ]}
          primaryCta={{
            label: "See the live demo",
            href: "https://careerchat.coloradocollege.edu/demo",
          }}
        />

        <div id="features">
          <FeatureThree
            title="Not a FAQ bot. An admissions champion."
            body="Unipal speaks in your office's voice, meets each prospect on their major or research interest, and surfaces the professor, program, or opportunity that makes your school their fit. That depth of connection is what a prospect remembers — and what puts you a step ahead of the schools next door."
            primaryCta={{ label: "See it in action", href: "/get-started" }}
            secondaryCta={{ label: "How it works", href: "/get-started" }}
            image={{ src: "/champion.png", alt: "Unipal in conversation with a prospective student" }}
          />

          <FeatureFour
            title="Every answer ends in a next step."
            body="The moment a prospect is interested, Unipal calls them to act — book a campus visit, save an info session, join a mailing list, or send a counselor a pre-drafted note. You name the action cards; Unipal surfaces the events and touchpoints your team worked hard to build. And since the campus visit is the highest-converting moment in the funnel, that nudge is the one that matters most."
            primaryCta={{ label: "Explore action cards", href: "/get-started" }}
            secondaryCta={{ label: "See the funnel", href: "/get-started" }}
            image={{ src: "/action2.png", alt: "Unipal action cards prompting a prospect to convert" }}
          />

          <FeatureThree
            title="See the questions behind the applications."
            body="Every conversation is a signal. Unipal shows you what prospects ask — and what they hesitate to ask — where they came from, and which action cards they click. You get engagement depth, not just applicant volume, so you can tell genuine interest from noise. It all flows into the CRM you already run."
            primaryCta={{ label: "See the dashboard", href: "/get-started" }}
            secondaryCta={{ label: "Read the analytics", href: "/get-started" }}
            image={{ src: "/analytics.png", alt: "Unipal analytics dashboard of prospect conversations" }}
          />
        </div>

        <div id="why">
          <FeatureSix
            title="Why not just ChatGPT?"
            subtitle="Because a general chatbot doesn't work for your admissions office — it works for everyone's."
            items={[
              {
                icon: BookMarked,
                title: "Grounded in your school, cited every time",
                description:
                  "Trained on your official site and the documents you add, Unipal ties every answer back to its source. You decide which pages are in, and drop in offline material the public site never covered.",
              },
              {
                icon: SlidersHorizontal,
                title: "You hold the controls",
                description:
                  "Shape how it speaks and what it will — and won't — say, in plain language from your dashboard. Prep it for the tough comparison questions instead of hoping a generic model gets them right.",
              },
            ]}
            highlight={{
              icon: Bot,
              title: "The smartest model on earth still won't recruit for you",
              description:
                "ChatGPT could top every benchmark tomorrow and it still wouldn't move a single prospect toward your school. Unipal lives on your site, tuned by you, sourced from your content, and fully visible to you — every question asked, every answer given. None of that is something a general chatbot can do.",
            }}
          />
        </div>

        <div id="faq">
          <FaqsThree
            title="Questions admissions teams ask us"
            subtitle="Still curious? Reach out and we'll walk you through it."
            items={[
              {
                question: "Can we add our own offline content?",
                answer:
                  "Yes. Beyond the pages on your official domain, you can upload documents straight to your dashboard — background briefs, comparison notes, anything the public site doesn't cover — and Unipal will use them.",
                link: "",
                media: { src: "/placeholder.jpg", alt: "Uploading documents to the Unipal dashboard" },
              },
              {
                question: "What if it surfaces something we don't want — or makes something up?",
                answer:
                  "You control what goes into the knowledge base and how the assistant behaves, in plain words, from the dashboard. Every answer is grounded in your sources and cited, so it isn't guessing — and our default setup has been tuned over months to stay on-message.",
                media: { src: "/placeholder.jpg", alt: "Unipal source citations and controls" },
              },
              {
                question: "How long does it take to go live?",
                answer:
                  "About five minutes. You create one new subdomain record — chat.yourschool.edu — and you're live. Zero code, no rebuild. Everything else runs on our infrastructure.",
                media: { src: "/placeholder.jpg", alt: "Setting up the chat subdomain" },
              },
              {
                question: "Will this turn into an IT project?",
                answer:
                  "No. There's nothing to integrate beyond that single subdomain record — no plugins, no rebuild, no ongoing maintenance burden on your team. The system lives on our side.",
                media: { src: "/placeholder.jpg", alt: "Unipal hosted infrastructure" },
              },
              {
                question: "How does this work with FERPA?",
                answer:
                  "Unipal is anonymous by design. It requires no sign-up and collects no personally identifiable information — which is exactly right for prospective students exploring your pages.",
                media: { src: "/placeholder.jpg", alt: "Anonymous, privacy-first conversations" },
              },
            ]}
          />
        </div>

        <div id="contact">
          <CtaThree
            title="Let's put your admissions champion live."
            subtitle="The next step isn't a yes-or-no on a pilot — it's a short walkthrough and a plan to stand up your assistant together, milestone by milestone. Tell us when works and we'll take it from there."
            primaryCta={{ label: "Book a walkthrough", href: "/get-started" }}
            secondaryCta={{ label: "Talk to the team", href: "/get-started" }}
          />
        </div>
      </Main>

      <FooterThree
        brand="Unipal"
        logo={{ src: "/logo.svg", alt: "Unipal" }}
        blurb="An AI admissions champion that lives on your site — grounded in your content, tuned by your office."
        columns={[
          {
            heading: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Why Unipal", href: "#why" },
              { label: "FAQ", href: "#faq" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About", href: "/get-started" },
              { label: "Contact", href: "/get-started" },
            ],
          },
        ]}
        copyright="© 2026 Unipal. All rights reserved."
      />
    </>
  );
}
