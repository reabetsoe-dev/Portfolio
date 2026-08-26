import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-4 py-28">
      <section className="w-full max-w-xl rounded-md border border-border bg-surface p-8 text-center shadow-premium">
        <p className="text-sm font-bold uppercase text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-foreground">Page Not Found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for is not available in this portfolio.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to Home
        </Link>
      </section>
    </main>
  );
}
