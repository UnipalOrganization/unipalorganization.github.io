import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type CtaFourProps = {
  title: string;
  body?: string;
  placeholder?: string;
  submitLabel?: string;
  /** Where the form posts (Formspree, Buttondown, etc.). Defaults to a no-op. */
  formAction?: string;
};

/** Centered CTA with a compact inline email form. Native <form>, no JS. */
export const CtaFour = ({
  title,
  body,
  placeholder = "Your email address",
  submitLabel = "Submit",
  formAction = "#",
}: CtaFourProps) => (
  <Section>
    <Container className="flex flex-col items-center gap-6 text-center">
      <h2>{title}</h2>
      {body && <p className="text-lg opacity-70 md:text-2xl">{body}</p>}
      <form
        action={formAction}
        method="post"
        className="mt-6 flex w-full max-w-md items-start justify-center gap-2"
      >
        <label htmlFor="cta-four-email" className="sr-only">
          Email
        </label>
        <Input
          id="cta-four-email"
          type="email"
          name="email"
          required
          className="md:w-64"
          placeholder={placeholder}
        />
        <Button type="submit">{submitLabel}</Button>
      </form>
    </Container>
  </Section>
);
