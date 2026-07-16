import {
  Bell,
  CalendarDays,
  Compass,
  MapPin,
  MessagesSquare,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

import { Container } from "@/components/craft/craft";
import {
  FeatureOne,
  FeatureTwo,
  FeatureThree,
  FeatureFour,
  FeatureFive,
  FeatureSix,
  FeatureSeven,
  FeatureEight,
  FeatureNine,
} from "@/components/sections";
import type { ImageContent } from "@/components/sections";

/**
 * Debug-only gallery: every `features/*` section rendered back-to-back so
 * media-driven layouts can be eyeballed with both a real video and a real
 * image. Not linked from the site nav — visit /debug/features directly.
 */

const VIDEO: ImageContent = {
  src: "/cc-cc-w-action.mp4",
  alt: "Unipal course chat in action",
};

const IMAGE: ImageContent = {
  src: "/school_assets/hws_college_avatar2.webp",
  alt: "HWS student avatar sticker",
};

const primaryCta = { label: "Get started", href: "#" };
const secondaryCta = { label: "Learn more", href: "#" };

const gridItems = [
  {
    icon: Users,
    title: "Find your people",
    description:
      "Match with students who share your course, clubs, and interests.",
  },
  {
    icon: CalendarDays,
    title: "One smart timetable",
    description:
      "Classes, deadlines, and events sync into a single schedule.",
  },
  {
    icon: MapPin,
    title: "Never get lost",
    description: "Indoor campus maps guide you room-to-room.",
  },
  {
    icon: Compass,
    title: "Explore campus",
    description: "Discover societies and events tailored to you.",
  },
];

const linkedItems = gridItems.map((item) => ({
  ...item,
  href: "#",
  cta: "Learn more",
}));

const highlight = {
  icon: Sparkles,
  title: "Made for you",
  description:
    "The more you use Unipal, the better it gets at suggesting events and people you'll actually like.",
  cta: "Learn more",
  href: "#",
};

const DebugLabel = ({ children }: { children: React.ReactNode }) => (
  <Container className="max-w-none! border-y bg-amber-200 py-2 font-mono text-xs font-semibold uppercase tracking-wide text-amber-950">
    {children}
  </Container>
);

export default function FeaturesDebugPage() {
  return (
    <main>
      <div className="border-b bg-black py-8 text-center text-white">
        <h1 className="text-2xl font-semibold">Feature sections — debug gallery</h1>
        <p className="mt-1 text-sm opacity-70">
          Every component from src/components/sections/features, rendered with
          the real video and the real image asset.
        </p>
      </div>

      <DebugLabel>FeatureOne — icon grid (no media slot)</DebugLabel>
      <FeatureOne
        title="Everything you need to feel at home on campus."
        subtitle="Built with students, for students."
        items={gridItems.slice(0, 3)}
      />

      <DebugLabel>FeatureTwo — linked icon grid (no media slot)</DebugLabel>
      <FeatureTwo
        title="More ways to get the most out of Unipal."
        subtitle="Explore every corner of the app."
        items={linkedItems}
      />

      <DebugLabel>FeatureThree — video (image on left)</DebugLabel>
      <FeatureThree
        title="Your timetable, finally sorted."
        body="Pull in classes, add society events, and get a nudge before anything starts."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={VIDEO}
      />

      <DebugLabel>FeatureThree — image (image on left)</DebugLabel>
      <FeatureThree
        title="Your timetable, finally sorted."
        body="Pull in classes, add society events, and get a nudge before anything starts."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={IMAGE}
      />

      <DebugLabel>FeatureFour — video (image on right)</DebugLabel>
      <FeatureFour
        title="Group chats that stick."
        body="Course and society chats stay organized long after the group chat goes quiet."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={VIDEO}
      />

      <DebugLabel>FeatureFour — image (image on right)</DebugLabel>
      <FeatureFour
        title="Group chats that stick."
        body="Course and society chats stay organized long after the group chat goes quiet."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={IMAGE}
      />

      <DebugLabel>FeatureFive — linked card grid (no media slot)</DebugLabel>
      <FeatureFive
        title="Two ways to stay in the loop."
        subtitle="Pick what matters to you."
        items={linkedItems.slice(0, 2)}
      />

      <DebugLabel>FeatureSix — grid + highlight card (no media slot)</DebugLabel>
      <FeatureSix
        title="More than a timetable."
        subtitle="The little things that make campus life click."
        items={[
          {
            icon: Wallet,
            title: "Student deals",
            description: "Local discounts and campus perks, surfaced automatically.",
            cta: "Browse perks",
            href: "#",
          },
          {
            icon: MessagesSquare,
            title: "Group chats that stick",
            description: "Course and society chats stay organized.",
            cta: "See how",
            href: "#",
          },
        ]}
        highlight={highlight}
      />

      <DebugLabel>
        FeatureSeven — video, shown in full at its own ratio (stacked)
      </DebugLabel>
      <FeatureSeven
        image={VIDEO}
        title="Made for your campus, mascot and all."
        body="Unipal comes with your school's community built in."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <DebugLabel>
        FeatureSeven — image, contain + left-aligned (stacked)
      </DebugLabel>
      <FeatureSeven
        image={IMAGE}
        title="Made for your campus, mascot and all."
        body="Unipal comes with your school's community built in."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />

      <DebugLabel>FeatureEight — video (stacked, image below)</DebugLabel>
      <FeatureEight
        title="Perks that find you."
        body="Local discounts and campus perks, surfaced automatically based on where you are."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={VIDEO}
      />

      <DebugLabel>FeatureEight — image (stacked, image below)</DebugLabel>
      <FeatureEight
        title="Perks that find you."
        body="Local discounts and campus perks, surfaced automatically based on where you are."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        image={IMAGE}
      />

      <DebugLabel>FeatureNine — all video, carousel, fit=cover</DebugLabel>
      <FeatureNine
        title="Loved on campuses across the country."
        body="From Amherst to Wellesley, students are making Unipal their own."
        fit="cover"
        images={[VIDEO, VIDEO, VIDEO]}
      />

      <DebugLabel>FeatureNine — all image, carousel, fit=cover</DebugLabel>
      <FeatureNine
        title="Loved on campuses across the country."
        body="From Amherst to Wellesley, students are making Unipal their own."
        fit="cover"
        images={[IMAGE, IMAGE, IMAGE]}
      />

      <DebugLabel>FeatureNine — mixed video/image, carousel, fit=contain</DebugLabel>
      <FeatureNine
        title="Loved on campuses across the country."
        body="From Amherst to Wellesley, students are making Unipal their own."
        fit="contain"
        images={[IMAGE, VIDEO, IMAGE, VIDEO]}
      />

      <div className="border-t bg-black py-6 text-center text-xs text-white/50">
        <Bell className="mx-auto mb-2 size-4" />
        End of gallery.
      </div>
    </main>
  );
}
