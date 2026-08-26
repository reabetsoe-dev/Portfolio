import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { useMemo, useState } from "react";
import { submitContactForm, type ContactPayload } from "../utils/contact";
import { cn } from "../utils/cn";

type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const initialValues: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

function validate(values: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitContactForm(values);
      setStatus(result);

      if (result.ok) {
        setValues(initialValues);
      }
    } catch {
      setStatus({
        ok: false,
        message: "The message could not be sent. Please try again or use a direct contact link.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(field: keyof ContactPayload, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-foreground">
          Name
          <input
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={cn(
              "h-12 rounded-md border bg-surface px-4 text-foreground shadow-sm outline-none transition placeholder:text-muted/70 focus:border-primary focus:shadow-focus",
              errors.name ? "border-danger" : "border-border",
            )}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your name"
          />
          {errors.name ? <span id="name-error" className="text-xs text-danger">{errors.name}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={cn(
              "h-12 rounded-md border bg-surface px-4 text-foreground shadow-sm outline-none transition placeholder:text-muted/70 focus:border-primary focus:shadow-focus",
              errors.email ? "border-danger" : "border-border",
            )}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
          />
          {errors.email ? <span id="email-error" className="text-xs text-danger">{errors.email}</span> : null}
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-foreground">
        Message
        <textarea
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={cn(
            "min-h-36 resize-y rounded-md border bg-surface px-4 py-3 text-foreground shadow-sm outline-none transition placeholder:text-muted/70 focus:border-primary focus:shadow-focus",
            errors.message ? "border-danger" : "border-border",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell me what you would like to build or discuss."
        />
        {errors.message ? <span id="message-error" className="text-xs text-danger">{errors.message}</span> : null}
      </label>

      {status ? (
        <div
          className={cn(
            "flex items-start gap-3 rounded-md border px-4 py-3 text-sm",
            status.ok
              ? "border-primary/30 bg-primary/10 text-foreground"
              : "border-accent/30 bg-accent/10 text-foreground",
          )}
          role="status"
        >
          {status.ok ? (
            <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          ) : (
            <AlertCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          )}
          <span>{status.message}</span>
        </div>
      ) : null}

      {hasErrors ? (
        <p className="text-sm text-danger" role="alert">
          Please review the highlighted fields.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
