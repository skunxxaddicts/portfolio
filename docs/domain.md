# Domain — `morkie.is-a.dev` (free)

is-a.dev is free for personal/non-commercial dev sites. Registration = a PR to
their register repo. **File the PR yourself** — they reject AI-generated
requests. Everything you need is below.

## Files to add in your fork of `is-a-dev/register`

TWO files (the second one is Vercel's ownership verification — already added
to the project, pending this record):

**`domains/morkie.json`** (swap in an email you actually read):

```json
{
  "owner": {
    "username": "skunxxaddicts",
    "email": "YOUR-EMAIL@example.com"
  },
  "records": {
    "CNAME": "cname.vercel-dns.com"
  }
}
```

**`domains/_vercel.morkie.json`** (exact value — this is live, don't change it):

```json
{
  "owner": {
    "username": "skunxxaddicts",
    "email": "YOUR-EMAIL@example.com"
  },
  "records": {
    "TXT": "vc-domain-verify=morkie.is-a.dev,3221b706ade81a75c721"
  }
}
```

## Steps

1. Fork https://github.com/is-a-dev/register
2. Add both files above → PR title: `Register morkie.is-a.dev`
3. Human review, usually ~2–12h — watch the PR for change requests
4. After merge, DNS propagates in minutes; Vercel verifies and issues TLS
   automatically. Check: `curl -sI https://morkie.is-a.dev` → `server: Vercel`

## If `morkie` is taken

Check first: https://github.com/is-a-dev/register/tree/main/domains
Fallbacks: `morkie-dev`, `skunxx`, `skunxxaddicts` — same two files, new names
(the TXT file is still `_vercel.<name>.json`).

## VPS path instead

Use `"records": { "A": ["76.13.22.211"] }` in `domains/morkie.json` and skip
the `_vercel` file — then add the Caddy block from `docs/deploy.md`.

## Alternate free `.dev` suffixes

| suffix               | provider      | how                 |
| -------------------- | ------------- | ------------------- |
| `is-a-good.dev`      | is-a.dev org  | GitHub PR, 1/person |
| `is-cool.dev`        | Open Domains  | GitHub PR           |
| `is-a-fullstack.dev` | Open Domains  | GitHub PR           |
| `is-not-a.dev`       | Open Domains  | GitHub PR           |

A real `morkie.dev` costs ~$10–12/yr (Cloudflare/Porkbun) — swap the CNAME
record later if you ever buy it; nothing else changes.
