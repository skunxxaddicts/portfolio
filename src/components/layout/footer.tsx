import { site } from "@/data/site";

export async function Footer() {
  "use cache";

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-xs tracking-wider text-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} — {site.domain}
        </p>
        <div className="flex gap-6">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="link-sweep uppercase transition-colors hover:text-text"
            >
              {s.label} ↗
            </a>
          ))}
          <a href={`mailto:${site.email}`} className="link-sweep uppercase transition-colors hover:text-text">
            email ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
