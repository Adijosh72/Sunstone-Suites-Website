# Sunstone Suites — Website

Display website for **Sunstone Suites**, a boutique hotel in Ratnagiri by Jagrut Retreats.

- Single-page, no booking engine (phone + OTA deeplinks only)
- Vanilla HTML / CSS / JS — zero build step
- Deployed as a GitHub Pages site at [sunstonesuites.in](https://sunstonesuites.in)

## Deploy

Push to `main`. GitHub Pages serves the root of the branch (CNAME file is in place for the custom domain).

## Local preview

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Edit guide

- Copy / content: `index.html`
- Visuals / theme: `styles.css` (CSS variables in `:root`)
- Images: `images/`
