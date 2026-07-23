import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

import { Main, Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Get started — Unipal",
  description:
    "Talk to the Unipal team about standing up your admissions assistant.",
};

/**
 * Simple get-started / contact page. All landing-page CTAs route here.
 * Replace the contact details below with your real ones.
 */
export default function GetStarted() {
  return (
    <Main>
      <Section className="min-h-dvh flex items-center">
        <Container className="flex flex-col items-center gap-8 text-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-opacity hover:opacity-70"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>

          <div className="flex flex-col gap-4">
            <h1>Let&rsquo;s get started.</h1>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              The next step isn&rsquo;t a yes-or-no on a pilot — it&rsquo;s a
              short walkthrough and a plan to stand up your assistant together,
              milestone by milestone. Tell us a good time and we&rsquo;ll take it
              from there.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg">
              <a href="mailto:hello@unipal.info">
                <Mail className="mr-2 size-4" /> hello@unipal.info
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Prefer to see it first?{" "}
              <a
                href="https://careerchat.coloradocollege.edu/demo"
                className="underline underline-offset-4 hover:opacity-70"
              >
                Try the live demo at Colorado College
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
