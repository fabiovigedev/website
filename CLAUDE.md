# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page "em desenvolvimento" (coming soon) for `fabiovigedev.com.br`. Single `index.html` served via nginx.

## Running Locally

```bash
# Docker (matches production)
docker build -t fabiovigedev-website .
docker run -p 8080:80 fabiovigedev-website
# Access: http://localhost:8080

# Or open directly in browser
open website/index.html
```

## Architecture

- `website/index.html` — markup da página
- `website/css/style.css` — estilos (CSS variables via `:root`)
- `Dockerfile` — nginx:alpine serving the static files on port 80

## Design System

CSS custom properties defined in `:root`:
- `--bg` / `--surface` / `--border` — dark background layers
- `--accent: #00e5ff` — cyan highlight color used for interactive elements and animations
- `--font: 'Courier New'` — monospace throughout

Keep the dark terminal aesthetic when adding new visual elements.

## CI/CD

`.github/workflows/deploy.yml` — triggered on push to `main`:
1. Assumes AWS role `GithubActionsRepoWebsite` via OIDC (no static credentials)
2. Logs into ECR (`us-east-2`, account `448049815254`)
3. Builds and pushes image to `website-prod` repository tagged with `github.sha`

To deploy: merge to `main`. There is no staging environment.
