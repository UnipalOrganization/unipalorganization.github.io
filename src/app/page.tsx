import {
  CalendarDays,
  MapPin,
  MessagesSquare,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import { Main } from "@/components/craft/craft";
import { ScrollPath } from "@/components/scroll-path";
import { TypeWrite } from "@/components/type-write";
import { SquigglyHighlight } from "@/components/squiggly-highlight";
import { svgLineFromFile } from "@/lib/svg-path";
import {
  SiteNav,
  HeroFive,
  SchoolLogoSlider,
  FeatureOne,
  FeatureThree,
  FeatureSix,
  FeatureSeven,
  FeatureNine,
  FaqsThree,
  CtaThree,
  FooterThree,
} from "@/components/sections";

/**
 * Example landing page assembled from the ported brijr catalog.
 *
 * Each section is one of the brijr variants, now driven entirely by props —
 * this is the file a copywriter edits. Swap `HeroFive` for `HeroOne`/`HeroSix`,
 * `PricingThree` for `PricingOne`, etc. to try other layouts; the content props
 * are consistent across variants of the same type. Design tokens live in
 * src/app/globals.css.
 */
export default function Home() {
  // Read at build time (static export) and hand the line data to <ScrollPath>.
  const curve = svgLineFromFile("src/assets/curve.svg");
  const curve2 = svgLineFromFile("src/assets/curve2.svg");

  return (
    <>
      <SiteNav
        brand="Unipal"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        cta={{ label: "Get the app", href: "#download" }}
      />

      <Main>
        
        <HeroFive
          announcement={{
            label: "Now live at 40+ campuses",
            href: "#download",
          }}
          title={
            <>
              <SquigglyHighlight color="var(--primary-foreground)">chat</SquigglyHighlight>.
              <TypeWrite
                words={[
                  "amherst",
                  "coloradocollege",
                  "lafayette",
                ]}
                cursorClassName="text-primary font-normal"
              />.edu
            </>
          }
          subtitle="Unipal helps you find your people, stay on top of classes, and actually enjoy campus — without juggling ten different apps."
          image={{ src: "/cc-cc-w-action.mp4", alt: "Unipal app preview" }}
        />

        <SchoolLogoSlider />

        <div id="features">
          <ScrollPath {...curve} />
          <FeatureOne
            title="Everything you need to feel at home on campus."
            subtitle="Built with students, for students."
            items={[
              {
                icon: Users,
                title: "Find your people",
                description:
                  "Match with students who share your course, clubs, and interests — from day one of orientation.",
              },
              {
                icon: CalendarDays,
                title: "One smart timetable",
                description:
                  "Classes, deadlines, and society events sync into a single schedule that reminds you before you forget.",
              },
              {
                icon: MapPin,
                title: "Never get lost",
                description:
                  "Indoor campus maps guide you room-to-room, so you make it to that 9am lecture on time.",
              },
            ]}
          />
        </div>

        <div className="">
          <ScrollPath {...curve2} reverse></ScrollPath>
          <FeatureThree
            title="Your timetable, finally sorted."
            body="Pull in classes, add society events, and get a nudge before anything starts. No more screenshots of a PDF timetable buried in your camera roll."
            primaryCta={{ label: "Get started", href: "#download" }}
            secondaryCta={{ label: "Learn more", href: "#" }}
            image={{ src: "/cc-cc-w-action.mp4", alt: "Unipal timetable in action" }}
          />
        </div>

        <FeatureSix
          title="More than a timetable."
          subtitle="The little things that make campus life click."
          items={[
            {
              icon: Wallet,
              title: "Student deals",
              description:
                "Local discounts and campus perks, surfaced automatically based on where you are.",
              cta: "Browse perks",
              href: "#",
            },
            {
              icon: MessagesSquare,
              title: "Group chats that stick",
              description:
                "Course and society chats stay organized long after the group chat goes quiet.",
              cta: "See how",
              href: "#",
            },
          ]}
          highlight={{
            icon: Sparkles,
            title: "Made for you",
            description:
              "The more you use Unipal, the better it gets at suggesting events and people you'll actually like.",
            cta: "Learn more",
            href: "#",
          }}
        />

        <FeatureSeven
          image={{
            src: "/school_assets/wellesley_college_sticker.webp",
            alt: "Wellesley College sticker",
          }}
          title="Made for your campus, mascot and all."
          body="Unipal comes with your school's community built in — societies, events, and the people who make it yours. Right down to the in-jokes on the stickers."
          primaryCta={{ label: "Find your campus", href: "#download" }}
          secondaryCta={{ label: "Request your school", href: "#" }}
        />

        <FeatureNine
          fit="contain"
          title="Loved on campuses across the country."
          body="From Amherst to Wellesley, students are making Unipal their own — one society, timetable, and unicorn sticker at a time."
          images={[
            {
              src: "/school_assets/amherst_college_sticker.webp",
              alt: "Amherst College sticker",
            },
            {
              src: "/school_assets/clark_university_sticker.webp",
              alt: "Clark University sticker",
            },
            {
              src: "/school_assets/colorado_college_sticker.webp",
              alt: "Colorado College sticker",
            },
            {
              src: "/school_assets/hws_college_sticker.webp",
              alt: "Hobart and William Smith Colleges sticker",
            },
            {
              src: "/school_assets/lafayette_college_sticker.webp",
              alt: "Lafayette College sticker",
            },
            {
              src: "/school_assets/skidmore_college_sticker.webp",
              alt: "Skidmore College sticker",
            },
            {
              src: "/school_assets/wellesley_college_sticker.webp",
              alt: "Wellesley College sticker",
            },
          ]}
        />

        <div id="faq">
          <FaqsThree
            title="Frequently asked questions"
            subtitle="Still curious? Reach out and the team will get back to you."
            items={[
              {
                question: "Is Unipal really free?",
                answer:
                  "Yes. The Free plan is free forever and covers the essentials most students need. Plus and Societies add extras for those who want them.",
                media: { src: "/placeholder.jpg", alt: "Unipal app preview" },
              },
              {
                question: "Which universities are supported?",
                answer:
                  "We're live at 40+ campuses across the UK and adding more every month. If yours isn't listed yet, you can request it in the app.",
                link: "#",
                media: {
                  src: "/cc-cc-w-action.mp4",
                  alt: "Unipal timetable in action",
                },
              },
              {
                question: "How does student matching work?",
                answer:
                  "You tell us your course, interests, and clubs. Unipal suggests people with overlap — you're always in control of who you connect with.",
                media: { src: "/placeholder.jpg", alt: "Unipal app preview" },
              },
              {
                question: "Is my data private?",
                answer:
                  "Your profile is only visible to your campus community, and you choose what to share. We never sell your data.",
                media: {
                  src: "/cc-cc-w-action.mp4",
                  alt: "Unipal timetable in action",
                },
              },
            ]}
          />
        </div>

        <div id="download">
          <CtaThree
            title="Ready to make the most of uni?"
            subtitle="Join thousands of students already using Unipal to find their people and stay organized."
            primaryCta={{ label: "Download the app", href: "#" }}
            secondaryCta={{ label: "Talk to us", href: "#contact" }}
          />
        </div>
      </Main>

      <FooterThree
        brand="Unipal"
        logo={{ src: "/logo.svg", alt: "Unipal" }}
        blurb="The all-in-one app for a better university life."
        columns={[
          {
            heading: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Download", href: "#download" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#contact" },
            ],
          },
        ]}
        copyright="© 2026 Unipal. All rights reserved."
      />
    </>
  );
}
