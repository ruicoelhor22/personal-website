# Rui Coelho — Portfolio

Personal portfolio of **Rui Coelho**, Senior Data Engineer based in Portugal.

**Website:** https://ruicoelhor22.github.io/personal-website/

The site highlights my professional experience, selected data engineering projects, master's research, and interests outside work.

## Technology

Built with HTML, CSS, and vanilla JavaScript. The website is static, responsive, and does not require a backend, dependencies, or a build step.

## Run locally

From the repository root:

```bash
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000 in your browser.

## Project structure

```text
dist/
├── index.html                  # Main page and content
├── styles.css                  # Styling and responsive layouts
├── app.js                      # Navigation, interactions and project demos
├── case-studies.js             # Extended project case studies
├── assets/                     # Images, icons, fonts and credentials
└── documents/                  # CV and master's dissertation
.github/workflows/pages.yml     # GitHub Pages deployment
```

## Website sections

- **Services & technology:** Core skills, platforms, and examples of delivered work.
- **Selected work:** Professional case studies and independent projects.
- **Experience:** Roles at FrontWell Solutions, Nordex, and adidas.
- **Thesis:** Master's research on inter-organizational data architectures and Data Spaces.
- **About & contact:** Background, photography, and contact links.

Project demos use illustrative data where indicated. Professional work is described at a high level without publishing confidential systems or datasets.

## Deployment

GitHub Actions publishes the contents of `dist/` to GitHub Pages when changes are pushed to `main`. The workflow can also be run manually from the repository's Actions tab.

The site uses relative asset paths so it works at the `/personal-website/` project URL.

## Documents and assets

The CV is available at `dist/documents/rui-coelho-cv.pdf`. The master's dissertation is available at `dist/documents/rui-coelho-masters-dissertation.pdf`.

Personal photographs, original content, and documents belong to their respective copyright holders. The dissertation retains its original CC BY-NC 4.0 license; the bundled Manrope font is distributed under the SIL Open Font License (see `dist/assets/OFL-Manrope.txt`).
