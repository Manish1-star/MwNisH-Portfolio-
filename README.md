# 🌐 Manish Ghimire — Personal Portfolio

> A modern, production-ready personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript.

![Preview](assets/images/preview-placeholder.png)

---

## ✨ Features

- **Glassmorphism + Dark/Light Mode** — elegant modern aesthetic
- **Animated Typing Effect** — dynamic role showcase in the hero
- **Scroll Reveal Animations** — smooth section entry effects
- **Skill Progress Bars** — animated on scroll
- **Project Filtering** — filter by category (Design / Content / Dev)
- **Responsive Design** — fully mobile-first, works on all devices
- **Contact Form** — with validation and success feedback
- **SEO Optimized** — semantic HTML + meta tags
- **Accessible** — WCAG-friendly, ARIA labels, keyboard navigation
- **Zero dependencies** — no frameworks, no build tools required

---

## 📁 Folder Structure

```
manish-portfolio/
│
├── index.html           # Main single-page portfolio
├── css/
│   ├── style.css        # Core styles (glassmorphism, components)
│   └── responsive.css   # Media queries (mobile-first)
│
├── js/
│   ├── main.js          # Core JS (nav, theme, filter, form, typing)
│   └── animations.js    # Scroll reveal & skill bar animations
│
├── assets/
│   ├── images/          # Profile photo, project previews
│   └── icons/           # Custom icon files (if any)
│
└── README.md
```

---

## 🚀 Getting Started (Local)

1. **Clone or download** this repository
2. Open `index.html` in any modern browser — **no server needed**
3. Customize the content in `index.html` with your real info

---

## 📝 Customization Guide

### 1. Update Personal Info
Open `index.html` and update:
- Name, tagline, description in the **Hero** section
- Bio text in the **About** section
- Email address in the **Contact** section

### 2. Replace Social Links
Search for `href="#"` in `index.html` and replace with your real social URLs:
- YouTube, Instagram, GitHub, LinkedIn, Twitter/X

### 3. Add Your Projects
Duplicate a `.project-card` block in the **Projects** section and update:
- `data-category` attribute (`design`, `content`, or `dev`)
- Title, description, gradient colors, links

### 4. Add a Profile Photo
Replace the `<span>MG</span>` inside `.profile-avatar` with:
```html
<img src="assets/images/profile.jpg" alt="Manish Ghimire" />
```
Then update the CSS for `.profile-avatar` to remove the gradient background.

### 5. Connect the Contact Form
To make the form actually send emails, integrate [EmailJS](https://emailjs.com):
1. Sign up for a free EmailJS account
2. Follow their SDK setup guide
3. Replace the `setTimeout` simulation in `main.js` → `initContactForm()` with real EmailJS call

---

## 📤 Uploading to GitHub

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** (green button) or go to `github.com/new`
3. Repository name: `manish-portfolio` (or any name you prefer)
4. Set to **Public**
5. Do NOT initialize with README (we already have one)
6. Click **"Create repository"**

### Step 2 — Initialize Git Locally
Open your terminal in the `manish-portfolio/` folder:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "🚀 Initial portfolio launch"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/manish-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🌍 Deploying on GitHub Pages (Free Hosting)

### Method 1 — Via GitHub Settings (Easiest)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **"Pages"** in the left sidebar
4. Under **"Branch"**, select `main` → `/ (root)`
5. Click **Save**
6. Wait ~2 minutes, then your site is live at:
   ```
   https://YOUR_USERNAME.github.io/manish-portfolio/
   ```

### Method 2 — Via GitHub CLI

```bash
# Install GitHub CLI if needed: https://cli.github.com
gh repo create manish-portfolio --public --source=. --push
```

Then enable Pages via Settings as above.

### 🔄 Updating Your Site

Whenever you make changes:
```bash
git add .
git commit -m "Update: describe your change"
git push
```
GitHub Pages will automatically rebuild and deploy within ~1-2 minutes.

---

## 🛠 Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5      | Structure & semantics |
| CSS3       | Styling, glassmorphism, animations |
| JavaScript | Interactivity, typing effect, filtering |
| [Syne](https://fonts.google.com/specimen/Syne) | Display / heading font |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body font |
| [Remix Icons](https://remixicon.com) | Icon library (CDN) |

---

## 📊 Performance Tips

- **Images**: Use WebP format for all images (`profile.webp` instead of `.png`)
- **Fonts**: Fonts are loaded with `display=swap` to avoid render blocking
- **Icons**: Remix Icons is loaded from CDN — if offline-first is needed, download locally
- **Images**: Always add `width` and `height` attributes to avoid layout shift

---

## 🎨 Color Palette

| Name | Dark Mode | Light Mode |
|------|-----------|------------|
| Background | `#060912` | `#f0f2ff` |
| Surface | `rgba(255,255,255,0.04)` | `rgba(255,255,255,0.7)` |
| Accent (Indigo) | `#818cf8` | `#818cf8` |
| Accent 2 (Purple) | `#c084fc` | `#c084fc` |
| Green | `#34d399` | `#34d399` |
| Pink | `#f472b6` | `#f472b6` |

---

## 📜 License

This project is open source and free to use. If you use it as a template, a credit is appreciated but not required.

---

## 👤 Author

**Manish Ghimire**  
🇳🇵 Nepal  
Content Creator · Graphic Designer · Future App Developer

---

*Built with ❤️ and lots of ☕ in Nepal.*
