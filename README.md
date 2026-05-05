# Nazeem Massoom Dickey Portfolio

Public portfolio for Nazeem Massoom Dickey, focused on junior network administrator, SOC analyst, NOC, MSP, IT support, and cybersecurity internship opportunities.

Live site: https://masternazz.com

## What This Shows

- Enterprise-style homelab architecture using Proxmox, OPNsense, Cisco switching, Synology storage, Cloudflare, Authentik, Wazuh, and NPMplus.
- Public-safe project writeups for firewalling, virtualization, secure remote access, identity, and SIEM workflows.
- Resume and certification material aimed at helping employers verify hands-on infrastructure work.

## Site Stack

- HTML
- CSS
- Small JavaScript interactions
- GitHub Pages
- Custom domain via `masternazz.com`

## Project Layout

- `index.html` - homepage and main entry point.
- `pages/` - secondary site pages and resume HTML sources.
- `assets/css/` - shared stylesheet.
- `assets/js/` - shared JavaScript.
- `assets/images/` - rack photos and certification logos.
- `assets/diagrams/` - public-safe architecture diagrams.
- `assets/resumes/` - generated PDF resumes.
- `tools/` - local Playwright maintenance scripts.
- `screenshots/` - generated visual-check output, ignored by git.

## Maintenance Tools

Install local tooling once:

```powershell
npm install
```

Useful commands:

```powershell
npm run visual:check
npm run resume:measure
npm run resume:export
```

- `visual:check` captures local page screenshots into `screenshots/`.
- `resume:measure` checks resume page height and PDF page count.
- `resume:export` regenerates PDFs in `assets/resumes/`.

## AI Assistance Credit

OpenAI Codex, Anthropic Claude, and Google Gemini assisted with drafting, review, implementation support, and documentation polish. The project direction, infrastructure decisions, lab ownership, validation, and final technical judgment are Nazeem's.

## AI Starter Repos

This portfolio is maintained with a small set of official Claude, Gemini, and Codex starter repos for workflow research, examples, and implementation reference.

Current starter set:

- `anthropics/claude-code`
- `anthropics/skills`
- `google-gemini/gemini-cli`
- `google-gemini/cookbook`
- `googleapis/python-genai`
- `googleapis/js-genai`
- `openai/codex`
- `openai/plugins`
- `openai/codex-action`
- `openai/codex-plugin-cc`

## Public-Safe Boundary

This site intentionally avoids publishing private configuration exports, secrets, exact firewall rule details, credential material, MAC addresses, and full internal addressing.
