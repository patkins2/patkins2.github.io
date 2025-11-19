# Portfolio Website Documentation

**Last Updated:** November 18, 2025

## 📁 Project Overview

This repository contains Paul Atkins' portfolio website, which has been migrated from vanilla HTML/CSS/JS to a modern React application.

### Current Structure

```
website/
├── archive/              ← Old HTML/CSS/JS site (for reference)
└── react-portfolio/      ← Current React application
```

---

## 🚀 Working with the React Portfolio

### Quick Start

```bash
cd react-portfolio
npm install          # Install dependencies (first time only)
npm run dev          # Start development server
```

Visit `http://localhost:5173` to see your site live with hot reload!

### Building for Production

```bash
npm run build        # Creates optimized production build in dist/
npm run preview      # Preview the production build locally
```

---

## 📝 How to Update Content

**All content lives in ONE file:** `react-portfolio/src/data/portfolioData.js`

### Adding a New Project

1. Open `src/data/portfolioData.js`
2. Add a new object to the `projects` array:

```javascript
export const projects = [
  // ... existing projects
  {
    id: 5,                    // Increment the ID
    title: "My New Project",
    type: "video",            // Options: "video", "image", "lightbox"
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
  }
];
```

**Project Types:**

- **`type: "video"`** - YouTube embed
  ```javascript
  {
    id: 5,
    title: "VR Project Demo",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/abc123"
  }
  ```

- **`type: "image"`** - Single image with optional link
  ```javascript
  {
    id: 5,
    title: "Unity Game",
    type: "image",
    image: "images/game-screenshot.png",
    link: "https://github.com/yourrepo"  // Optional
  }
  ```

- **`type: "lightbox"`** - Image gallery (multiple images)
  ```javascript
  {
    id: 5,
    title: "AR Application",
    type: "lightbox",
    thumbnailImage: "images/ar-thumb.png",
    images: [
      { src: "images/ar1.png", alt: "Main screen" },
      { src: "images/ar2.png", alt: "Feature view" },
      { src: "images/ar3.png", alt: "Settings" }
    ]
  }
  ```

3. **Add your images** to `react-portfolio/public/images/`
4. Save - changes appear instantly!

### Adding Work Experience

```javascript
export const workExperience = [
  // ... existing jobs
  {
    id: 4,
    title: "Senior Developer",
    company: "Tech Company",
    location: "City, State",
    dates: "Jan 2024 - Present",
    description: "Detailed description of responsibilities..."
  }
];
```

### Updating Personal Info

```javascript
export const personalInfo = {
  name: "Paul Atkins",
  title: "Software Developer",
  email: "patkins789@gmail.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  artstation: "https://artstation.com/yourusername",
  resumeFile: "PaulAtkinsResume_0225.pdf"  // Must be in public/ folder
};
```

### Updating Skills

```javascript
export const skills = [
  "Programming Languages: Java, Python, C#, C++, SQL, HTML/CSS, JavaScript",
  "Tools: Azure, Git/GitHub, Adobe Suite, MS Office, Unity, Unreal, React"
];
```

### Adding Education

```javascript
export const education = [
  // ... existing degrees
  {
    id: 3,
    degree: "Ph.D. in Computer Science",
    school: "University Name",
    location: "City, State",
    dates: "Aug 2023 - Present",
    gpa: "4.0",
    minors: null  // or "Minor Name" if applicable
  }
];
```

---

## 🎨 Styling

**Main stylesheet:** `react-portfolio/src/style.css`

### Key Color Variables

```css
body {
    background-color: #f0f0f0;  /* Page background */
    color: #000;                 /* Body text */
}

header {
    background-color: #894fab;   /* Header purple */
    color: white;                /* Header text */
}

h2, h3 {
    color: #333;                 /* Headings */
}

a {
    color: #007BFF;              /* Links */
}
```

### Responsive Breakpoints

The layout automatically adjusts:
- **Desktop (>1399px):** 3 columns
- **Tablet (900-1399px):** 2 columns  
- **Mobile (<900px):** 1 column

Modify in `style.css` under `@media` queries.

---

## 📦 Project Structure

```
react-portfolio/
├── public/
│   ├── images/              ← All images go here
│   └── *.pdf                ← Resume and static files
│
├── src/
│   ├── components/          ← React components
│   │   ├── Header.jsx       ← Site header with name/title
│   │   ├── About.jsx        ← About section with photo & contact
│   │   ├── WorkExperience.jsx   ← Job history list
│   │   ├── Skills.jsx       ← Skills list
│   │   ├── ProjectGrid.jsx  ← Projects gallery
│   │   ├── Education.jsx    ← Education history
│   │   └── Lightbox.jsx     ← Image gallery modal
│   │
│   ├── data/
│   │   └── portfolioData.js ← 👈 EDIT THIS FILE FOR CONTENT
│   │
│   ├── App.jsx              ← Main app component
│   ├── main.jsx             ← React entry point
│   ├── style.css            ← All styling
│   └── index.css            ← Base styles
│
├── .github/
│   └── workflows/
│       └── deploy.yml       ← GitHub Actions deployment
│
├── package.json             ← Dependencies & scripts
├── vite.config.js           ← Vite configuration
└── README.md                ← Quick reference guide
```

---

## 🌐 Deployment to GitHub Pages

### Option 1: GitHub Actions (Automatic - Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   
3. **Automatic deployment on every push!** ✨

The workflow file `.github/workflows/deploy.yml` handles everything automatically.

### Option 2: Manual Deployment

```bash
npm run deploy
```

This builds and pushes to `gh-pages` branch.

---

## 🔧 Tech Stack

- **React 19** - UI library
- **Vite 7** - Lightning-fast build tool
- **CSS3** - Styling (preserved from original)
- **GitHub Pages** - Free hosting
- **GitHub Actions** - CI/CD pipeline

---

## 💡 Component Architecture

### How Components Work

Each section of your site is a React component that receives data as props:

```javascript
// App.jsx orchestrates everything
function App() {
  return (
    <>
      <Header name={personalInfo.name} title={personalInfo.title} />
      <About aboutText={aboutText} personalInfo={personalInfo} />
      <WorkExperience experiences={workExperience} />
      <Skills skills={skills} />
      <ProjectGrid projects={projects} />
      <Education education={education} />
    </>
  );
}
```

### Lightbox Component

The lightbox is now a React component using hooks:

- **State management:** `useState` for modal open/close and current slide
- **Props:** `isOpen`, `onClose`, `images`
- **Features:** Keyboard navigation, thumbnail selection, slide counter

Instead of global functions like the old `openModal()`, it uses React state:

```javascript
const [lightboxOpen, setLightboxOpen] = useState(false);
const openLightbox = (images) => {
  setLightboxImages(images);
  setLightboxOpen(true);
};
```

---

## 🐛 Common Tasks

### Change Resume File

1. Add new PDF to `react-portfolio/public/`
2. Update `src/data/portfolioData.js`:
   ```javascript
   resumeFile: "NewResume_1125.pdf"
   ```

### Add New Social Media Icon

1. Add icon image to `public/images/`
2. Update `personalInfo` in `portfolioData.js`
3. Edit `src/components/About.jsx` to add the link

### Modify Layout

Grid settings are in `src/style.css`:

```css
.project-grid {
    display: grid;
    grid-template-columns: repeat(3, 420px);  /* Change column count here */
    gap: 50px;  /* Spacing between items */
}
```

### Change Project Thumbnail Size

In `src/style.css`:

```css
.section3 iframe,
.project-thumbnail {
    width: 420px;   /* Change width */
    height: 315px;  /* Change height */
}
```

---

## 📚 Learning Resources

- [React Docs](https://react.dev/) - Official React documentation
- [Vite Guide](https://vite.dev/guide/) - Vite features and configuration
- [GitHub Pages](https://pages.github.com/) - Hosting documentation

---

## 🔄 Migrating from Old Site

The old HTML/CSS/JS version is preserved in this `archive/` folder for reference.

### What Changed?

| Old Approach | New React Approach |
|--------------|-------------------|
| Edit HTML directly | Edit data file only |
| Manual DOM manipulation | React component rendering |
| Global functions | React hooks & state |
| No build process | Optimized Vite builds |
| Inline styles | Component-based styling |
| Copy/paste to add projects | Add object to array |

### Benefits of React Version

✅ **Faster updates** - Change data, not HTML  
✅ **Hot reload** - See changes instantly  
✅ **Component reuse** - DRY principle  
✅ **Type safety ready** - Easy to add TypeScript  
✅ **Better performance** - Optimized production builds  
✅ **Modern tooling** - ESLint, Prettier, etc.  
✅ **Scalable** - Easy to add features like filtering, search, animations

---

## 🎯 Future Enhancements Ideas

Consider adding:
- **Dark mode** toggle
- **Project filtering** by technology/type
- **Search functionality** for projects
- **Animations** with Framer Motion
- **Blog section** with Markdown support
- **Contact form** with form handling
- **Analytics** to track visitors
- **Multi-language support**

---

## ❓ Troubleshooting

**Dev server won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Changes not showing?**
- Check if dev server is running
- Hard refresh browser (Ctrl+Shift+R)
- Clear browser cache

**Build fails?**
- Check for syntax errors in `portfolioData.js`
- Ensure all image paths are correct
- Run `npm run build` to see detailed errors

**Deployment not working?**
- Verify GitHub Actions is enabled in repo settings
- Check Actions tab for error logs
- Ensure `base` in `vite.config.js` is correct

---

**Need help?** Check the React and Vite documentation, or review the archived old site code for reference!
