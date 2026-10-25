# Domain — `morkie.is-a.dev` (free)

is-a.dev is free for personal/non-commercial dev sites. Registration = a PR to
their register repo. **File the PR yourself** — they reject AI-generated
requests. Everything you need is below.

## Steps

1. Fork https://github.com/is-a-dev/register
2. Create `domains/morkie.json` in your fork with this exact content
   (swap in an email you actually read — it's where abuse/contact mail goes):

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

   For the VPS path instead, use:

```json
  "records": { "A": ["76.13.22.211"] }
```

3. PR title: `Register morkie.is-a.dev`
4. Review is human — usually ~2–12h. Watch for change requests on the PR.
5. After merge, DNS is live in minutes. Then in Vercel:
   project `morkie-portfolio` → Settings → Domains → add `morkie.is-a.dev`.

## If `morkie` is taken

Check first: https://github.com/is-a-dev/register/tree/main/domains
Fallbacks: `morkie-dev`, `skunxx`, `skunxxaddicts` — same JSON, new filename.

## Alternate free `.dev` suffixes (if you prefer)

| suffix            | provider      | how                    |
| ----------------- | ------------- | ---------------------- |
| `is-a-good.dev`   | is-a.dev org  | GitHub PR, 1/person    |
| `is-cool.dev`     | Open Domains  | GitHub PR              |
| `is-a-fullstack.dev` | Open Domains | GitHub PR              |
| `is-not-a.dev`    | Open Domains  | GitHub PR              |

A real `morkie.dev` costs ~$10–12/yr (Cloudflare/Porkbun) — swap the CNAME
record later if you ever buy it; nothing else changes.
