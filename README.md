# GENG Wei's Homepage

Source for [wgeng.site](https://wgeng.site) — Wei GENG's personal academic webpage,
built with [MkDocs](https://www.mkdocs.org/) and the
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Run locally

```bash
python3 -m venv venv          # once
source venv/bin/activate
pip install -r requirements.txt
mkdocs serve                  # live preview at http://127.0.0.1:8000
```

Build a production copy into `site/` (and catch broken links/refs):

```bash
mkdocs build --strict
```

## Deployment

Pushing to `master` triggers `.github/workflows/main.yml`, which runs
`mkdocs gh-deploy` to publish the built site to the `gh-pages` branch.
GitHub Pages serves that branch at the `wgeng.site` domain (`docs/CNAME`).

## Repository layout

```
docs/                 page content (docs_dir)
  index.md            home page — pulls in the includes below
  papers/             one page per publication (+ the PDFs)
  teaching/           teaching & supervision
  figures/            images, logos, favicon, profile photo
  stylesheets/        extra.css (theme overrides, profile card, news feed)
  javascripts/        copyright-year.js (auto-updating footer year)
includes/             Markdown partials injected via pymdownx.snippets
  news.md             "Recent News" feed  ← edit here to add news
  profile.md          contact links + profile photo card
overrides/            theme overrides (custom_dir)
  main.html           injects Open Graph / Twitter + Google Scholar citation meta
  partials/copyright.html
mkdocs.yml            site config, nav, theme, plugins, extensions
requirements.txt      pinned Python dependencies
```

## Editing notes

- **Add a news item:** edit `includes/news.md` (newest on top).
- **Add a publication:** create `docs/papers/<slug>.md` (copy an existing one for
  the `citation_*` front matter that powers Google Scholar indexing), drop the PDF
  in `docs/papers/`, then add it to `nav` in `mkdocs.yml` and to `docs/papers/index.md`.
- **Nested lists need 4-space indentation**, not 2.

## References

- Changing colors: <https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/>
- MkDocs: <https://www.mkdocs.org/>
