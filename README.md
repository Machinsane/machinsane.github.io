# Kevin Yu's Personal Website

Welcome to your personal website source code! This project is built cleanly with vanilla **HTML5**, **CSS3**, and **JavaScript**, designed to be hosted directly on **GitHub Pages** at `https://machinsane.github.io`.

---

## 1. How a Website Works (The Core Trio)

Every webpage on the internet is made up of three fundamental building blocks:

1. **HTML (`index.html`) — The Structure / Skeleton**
   - Defines what content appears on the page: headings (`<h1>`), paragraphs (`<p>`), navigation (`<nav>`), buttons (`<button>`), and links (`<a>`).
   - Like the framing and rooms of a house.
2. **CSS (`style.css`) — The Appearance / Style**
   - Controls colors, fonts, spacing, alignment, card layouts, dark mode, and responsive mobile behavior.
   - Like the paint, furniture, lighting, and interior design of a house.
3. **JavaScript (`script.js`) — The Interactivity / Behavior**
   - Powers dynamic features: the dark/light mode toggle, the mobile hamburger menu, and updating the copyright year automatically.
   - Like the electrical switches and smart appliances in a house.

---

## 2. Project File Structure

```text
machinsane.github.io/
├── index.html        # Main webpage structure and text content
├── style.css         # Visual styles, themes (light/dark), and responsive layout
├── script.js         # Interactive behaviors (theme toggle, mobile menu)
├── .nojekyll         # Disables Jekyll processing on GitHub Pages (serves static files fast)
└── README.md         # Guide and instructions
```

---

## 3. How to Preview Your Website Locally

You don't need any complex software to see your site:
1. Open your Mac's **Finder** and navigate to this folder (`machinsane.github.io`).
2. Double-click **`index.html`** — it will open directly in Safari, Chrome, or your default browser.
3. Whenever you make changes in `index.html` or `style.css`, simply **refresh your browser** (⌘ + R) to see the updates instantly.

---

## 4. How to Customize Your Content

Open the files in any code editor (like VS Code or TextEdit):

- **Update Your Bio & Details**:
  - Open `index.html`.
  - Look for the `<section id="about">` and edit the text inside the `<p>` tags.
  - Update your location, email, or social links.
- **Add or Edit Projects**:
  - In `index.html`, look for `<div class="projects-grid">`.
  - Copy and paste any `<article class="project-card">` block to add a new project, or edit the existing project cards with your real project titles, descriptions, and GitHub links.
- **Modify Colors & Theme**:
  - Open `style.css`.
  - Near the top, under `:root`, you will find variables like `--primary: #2563eb;` (accent blue). Changing this hex code will change the accent color across the entire site.

---

## 5. How GitHub Pages Publishing Works

GitHub has a special feature called **GitHub Pages**:
- Because your repository name is **`machinsane.github.io`** (matching your GitHub username `machinsane`), GitHub automatically serves the root files of the `main` branch at:
  **`https://machinsane.github.io`**

### Steps to Publish Your Changes:

Whenever you're ready to publish updates to the live internet, run these three Git commands in your terminal:

```bash
# 1. Stage all your changed files
git add .

# 2. Save a snapshot of your changes with a message describing what you did
git commit -m "Build initial personal website"

# 3. Push your changes to GitHub
git push origin main
```

Within 1–2 minutes after pushing, GitHub Pages builds and serves your site live at `https://machinsane.github.io`!
