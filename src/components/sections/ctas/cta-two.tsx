import { Section, Container } from "@/components/craft/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type CtaTwoProps = {
  title: string;
  body?: string;
  emailLabel?: string;
  placeholder?: string;
  description?: string;
  submitLabel?: string;
  /**
   * Where the form posts. Point this at your form/newsletter endpoint
   * (Formspree, Buttondown, etc.). Defaults to a no-op.
   */
  formAction?: string;
};

/**
 * CTA with a stacked email capture form. Uses a native <form> that posts to
 * `formAction` — no client-side JS or form library.
 */
export const CtaTwo = ({
  title,
  body,
  emailLabel = "Email",
  placeholder = "you@example.com",
  description,
  submitLabel = "Submit",
  formAction = "#",
}: CtaTwoProps) => (
  <Section>
    <Container className="space-y-8">
      <h2>{title}</h2>
      {body && <p className="text-lg opacity-70 md:text-2xl">{body}</p>}
      <form action={formAction} method="post" className="space-y-3">
        <label htmlFor="cta-two-email" className="block text-sm font-medium">
          {emailLabel}
        </label>
        <Input
          id="cta-two-email"
          type="email"
          name="email"
          required
          className="md:w-96"
          placeholder={placeholder}
        />
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        <Button type="submit">{submitLabel}</Button>
      </form>
    </Container>
  </Section>
);
