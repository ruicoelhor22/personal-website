# Rui Coelho — Portfolio

A portable static portfolio built with HTML, CSS and JavaScript. No package installation or build step is needed. The deployable files are in `dist/`.

## Run locally

Run `python3 -m http.server 8000 --directory dist` and open `http://localhost:8000`.

For the managed Sites development environment, use `sites-preview start` with this checkout's absolute path instead of starting another server.

## Edit

- Homepage and experience copy: `dist/index.html`
- Project details, illustrative demo data and gallery captions: `dist/app.js`
- Company case studies and the detailed thesis story: `dist/case-studies.js`
- Appearance and responsive layouts: `dist/styles.css`
- Services, numerical evidence, thesis landing section and navigation: `dist/index.html`
- Optimised photos and font: `dist/assets/`

The first deployment is owner-private. Do not change the audience without Rui's explicit request.

## Content boundaries

Engineering work and professional experience take priority. Photography is a small supporting personal section, following Rui's latest direction. All photographs were supplied by Rui. There are no stock or generated photographs, no analytics, no contact-form backend, and no publication of personal training data.

Endurance Lab's portfolio panel uses fictional weekly activity summaries. It is a separate browser concept, not the full Python application. The contract checker is a separately labelled conceptual example, not functionality claimed for the Collibra proof of concept.

## Sources reviewed

- GitHub profile and public repository list: https://github.com/ruicoelhor22
- Endurance Lab README: https://github.com/ruicoelhor22/strava_analysis
- Collibra prototype README: https://github.com/ruicoelhor22/DataContracts-Collibra
- R/Shiny project README: https://github.com/ruicoelhor22/R_MachineLearning
- Professional reference: https://pt.linkedin.com/in/ruicoelho00
- Rui's supplied career and Data Spaces dissertation context
- Supplied CV, used for role progression, dates, company workstreams, platform scale and certification
- Supplied 105-page master's dissertation, used for the detailed research case study and linked unchanged at `dist/documents/rui-coelho-masters-dissertation.pdf`

Employer/client descriptions intentionally remain high level. No internal screenshots, schemas, datasets, operational identifiers or nonpublic metrics are included. The Collibra prototype creates logical relationships; infrastructure provisioning is explicitly treated as a possible extension, not shipped functionality.

The research story follows the supplied dissertation: YAML/JSON governance artifacts, a controlled Databricks execution layer, three fictional organisations, explicit contracts and grants, and a reference-based catalogue. Automated policy enforcement, federated identity, standalone connectors and production-scale validation are described as outside the proof of concept's scope. The PDF is credited to Rui Coelho with its original CC BY-NC 4.0 licence. The website edition of the CV is linked at `dist/documents/rui-coelho-cv.pdf`. It retains the supplied layout and experience, lightly revises the introductory sentence and replaces the phone contact with a labelled Portfolio link. Email and LinkedIn remain visible.

## Numerical evidence and readability

The Services section connects capabilities to delivered company or research work. Nordex's 20,000+ turbines and 5M+ daily records describe platform scale. The automation account's dozens of file types and thousands of wind farms are approximate delivery scope from Rui's earlier project account. The research counts of three fictional organisations, two source products and one derived product describe the controlled proof of concept. None of these are represented as a measured percentage improvement. No verified before/after performance, cost or time-saving metric is available for FrontWell, Nordex or adidas; do not invent one.

FrontWell's narrative follows Rui's current scope clarification: understanding source data and stakeholder needs, connecting legacy laboratory/manufacturing/SAP systems, building the modern platform, and delivering data for apps, reports and dashboards. Performance and cost efficiency are design priorities, without quantified savings claims. Tools support the end-to-end story rather than leading it.

The thesis has its own `#thesis` landing section and direct reading/download links. Services is at `#services`. Navigation collapses into a readable menu on smaller screens. Body copy is generally 18px and secondary text has a 16px minimum. The analytics chart uses a viewport-sized SVG and a resize observer so its text is not compressed on phones.

## Assets

Photo originals remain with Rui. WebP copies have been resized and compressed for this site, with metadata omitted. CSS handles responsive framing. Update the gallery list in `app.js` when adding photos.

Manrope is distributed under the SIL Open Font License; see `dist/assets/OFL-Manrope.txt`.

The About section includes Rui’s explicitly supplied high-performance sport and national champion background, connected to preparation, consistency, feedback and his approach to engineering. No discipline, competition year or medal count is inferred.

The FWS client is anonymised as a global materials company. Client repositories have not been accessed from this cloud workspace. The latest visible inventory supports the aggregate source-product and analytical-product counts below; distinct source-system and report counts remain unverified. The supplied credential badges are viewable on click; do not infer verification links or certification dates. LinkedIn is also linked in the hero.

Five user-supplied credential badges are available in a click-to-view dialog. Data Engineer Associate is a professional certification; the other four are labelled fundamentals badges. Four input badges already had alpha transparency and are copied unchanged. The Associate preview uses built-in image editing with the prompt: remove only the white/off-white exterior background, preserve badge text, four stars, artwork, colours and proportions. No verification links or credential dates are inferred. Badge files are in `dist/assets/credentials/`.

Latest refinements: national champion in K1 kayaking, stated simply in About. The photo dialog shows all five photos together in a responsive grid. Credential downloads were removed. Secondary text is now at least 16px and body copy is generally 18px, with stronger secondary contrast in both themes.

Visible repository inventory, provided by Rui as screenshots: four departments, 22 distinct source-data-product folder groups and ten analytical-data-product folder groups. Counted once per logical product; ADF and dbt implementations of the same source product are not counted twice. This is project-estate scope, not evidence that Rui independently authored every product. No unique source-system or end-report count can be verified from the screenshots. No repository identifiers or screenshots are published. The FWS documentation framework is described using Rui’s supplied scope: dbt-driven model reference, lineage and compiled SQL. Lineage diagrams use illustrative generic categories and do not reproduce client topology. Endurance Lab now has an overview and synthetic session explorer; route profiles and metrics are fictional.

## GitHub Pages

The repository is https://github.com/ruicoelhor22/personal-website.
The public website address is https://ruicoelhor22.github.io/personal-website/.

All HTML, CSS, JavaScript, photographs, credential badges and PDFs are included in `dist/`. No backend, package installation or build step is required. Relative asset paths support the `/personal-website/` project path.

In repository Settings > Pages, set the publishing source to **GitHub Actions** once. The workflow in `.github/workflows/pages.yml` publishes `dist/` whenever its files change on `main`, or when run manually from Actions. It does not deploy the README or source metadata.

The website edition of the CV is `dist/documents/rui-coelho-cv.pdf`. Its visible Portfolio label links to the GitHub Pages address. The original layout and experience are preserved, with a lightly polished introduction and the phone contact replaced by the Portfolio label. Email and LinkedIn remain visible.

The previous private Sites-hosted copy is separate. This repository does not contain its project identity or credentials. No ongoing synchronisation between the two hosts is configured.

Photos and the dissertation retain their original ownership and applicable licensing; the Manrope font license is bundled. No blanket open-source licence is applied to personal photographs or documents.
