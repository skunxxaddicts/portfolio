import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center px-5 text-center">
      <p className="kicker mb-4">404</p>
      <h1 className="font-serif text-4xl tracking-tight text-text md:text-5xl">
        Nothing lives <em className="text-accent italic">here.</em>
      </h1>
      <Link
        href="/"
        className="link-sweep mt-8 font-mono text-xs tracking-widest text-muted uppercase transition-colors hover:text-text"
      >
        ← back home
      </Link>
    </main>
  );
}
