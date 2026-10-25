# Deployment — all options

Primary: **Vercel Hobby** (auto-deploys `main`). Every option below works with
the `morkie.is-a.dev` domain — just change the DNS record in the is-a.dev PR.

## A — Vercel (current)

- Project: `morkie-portfolio` on team `davids-projects-7f1d4f5f`, linked to `skunxxaddicts/portfolio`.
- Push to `main` → production deploy. PRs → previews.
- Custom domain `morkie.is-a.dev`: Vercel dashboard → project → Settings → Domains → add.
  DNS record for is-a.dev PR: `"CNAME": "cname.vercel-dns.com"`
- Optional env: `GITHUB_TOKEN` (no scopes) — raises repos-feed rate limit.

## B — Hermes VPS (76.13.22.211) — self-host path

The box already runs **Caddy** (auto-HTTPS). `output: "standalone"` is enabled,
so the build artifact is self-contained.

### B1 — build on box (only if RAM allows)

```bash
cd /opt && git clone https://github.com/skunxxaddicts/portfolio.git
cd portfolio && npm ci && npm run build
# run on port 3100
PORT=3100 NODE_ENV=production node .next/standalone/server.js
```

Wrap in systemd unit (`/etc/systemd/system/portfolio.service`):

```ini
[Unit]
Description=morkie portfolio
After=network.target

[Service]
WorkingDirectory=/opt/portfolio
Environment=NODE_ENV=production
Environment=PORT=3100
ExecStart=/usr/bin/node .next/standalone/server.js
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

> `standalone` output needs `public/` and `.next/static/` copied next to
> `server.js` — see Next standalone docs, or use B2 which ships the full tree.

### B2 — build in CI, ship artifact (recommended for a shared box)

GitHub Actions job builds, rsyncs to VPS, restarts the service:

```yaml
- run: npm ci && npm run build
- name: rsync build
  run: |
    rsync -az --delete \
      .next/standalone/ .next/static/ public/ \
      deploy@76.13.22.211:/opt/portfolio/
- run: ssh deploy@76.13.22.211 'sudo systemctl restart portfolio'
```

### Caddy (either path)

```
morkie.is-a.dev {
    reverse_proxy 127.0.0.1:3100
}
```

`caddy reload` — cert is automatic. is-a.dev DNS record: `"A": ["76.13.22.211"]`.

## C — Netlify free

Git-linked deploys; Next.js 16 runs on their OpenNext runtime (SSR/ISR handled).
Domain record: `CNAME` → `<site>.netlify.app`.

## D — Cloudflare Pages/Workers

Free, near-unlimited bandwidth. Needs `@opennextjs/cloudflare` adapter +
`open-next.config.ts`. Domain record: `CNAME` → `<site>.pages.dev`.

## E — GitHub Pages (static only)

`output: "export"`; GitHub feed must move to build-time fetch + a nightly
scheduled Action rebuild. Domain record: `CNAME` → `skunxxaddicts.github.io`.
Weakest fit for this design — kept for completeness.
