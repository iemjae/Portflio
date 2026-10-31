# ajaysohal.com

Personal site of Ajay Sohal. Plain HTML, CSS and a few lines of vanilla JavaScript.
No frameworks, no build step, no npm. Hosted on GitHub Pages.

## Structure

```
index.html                 the story (homepage)
404.html                   "page not found", same design
articles/
  index.html               full list of articles, newest first
  article-template.html    copy this for each new article
  *.html                   one file per article
notes/                     redirects from the old /notes/ URLs to /articles/
css/style.css              all styles; colours and fonts are CSS variables at the top
js/main.js                 full-screen menu only
assets/images/             portrait, book cover, project photos, link-preview image
CNAME                      custom domain for GitHub Pages (ajaysohal.com)
sitemap.xml, robots.txt    for search engines
```

All paths are relative, so the site also works from `username.github.io/repo-name`.

## Publishing a new article (weekly)

1. Copy `articles/article-template.html` and rename it, e.g. `articles/why-firmware-lies.html`
   (lowercase, hyphens, no spaces).
2. Replace every CAPITALISED placeholder: title, description, canonical URL, category,
   standfirst, date, read time (about 200 words per minute). Delete the
   `<meta name="robots" content="noindex">` line.
3. Write the article between `ARTICLE BODY` and `END`.
4. In `articles/index.html`, copy one `<li class="card">…</li>` block and paste it at the
   **top** of the `ARTICLE CARDS` list. Update its link, category, read time, title and summary.
5. Do the same at the top of the `ARTICLE CARDS` block in `index.html`, then delete the
   bottom card there, so the homepage always shows the latest 3.
6. Add the new URL to `sitemap.xml`.
7. Commit and push. GitHub Pages updates in a minute or two.

## Deploying on GitHub Pages

1. Push these files to the root of a GitHub repository.
2. Repository → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Custom domain: `ajaysohal.com` (the `CNAME` file already sets this). Tick "Enforce HTTPS".
4. At your domain registrar, point the domain to GitHub Pages
   (A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153,
   and a CNAME for `www` pointing to `username.github.io`).

If you host at `username.github.io/repo-name` instead, delete the `CNAME` file.

## Preview locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Design

- Fonts (Google Fonts): Newsreader (serif headings, italic accents) and DM Sans (text).
- Colours (CSS variables at the top of `css/style.css`): off-white `#FBF9F6`, sage `#E4EEE3`,
  lilac `#EEE8F6`, peach `#FBE7DA`, sky `#E3EBF8`, rose `#F6DDE6`, peach button `#F7C6A5`,
  indigo links `#3D4E9E`, plum accent `#9B3F68`, ink `#22284A`.
