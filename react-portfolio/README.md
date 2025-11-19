# Paul Atkins - Portfolio Website (React)

A modern, responsive portfolio website built with React and Vite.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📝 Updating Your Portfolio

All your content is centralized in one easy-to-edit file:

**`src/data/portfolioData.js`**

### Adding a New Project

1. Open `src/data/portfolioData.js`
2. Add a new object to the `projects` array:

```javascript
{
  id: 5,
  title: "Your New Project Title",
  type: "video", // or "image" or "lightbox"
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
  // OR for images:
  // image: "images/your-image.png",
  // link: "https://github.com/yourrepo"
}
```

3. Save the file - changes will appear automatically in dev mode!

### Adding Work Experience

Simply add a new object to the `workExperience` array in `portfolioData.js`

### Updating Contact Info

Edit the `personalInfo` object in `portfolioData.js`

## 🎨 Styling

All styles are in `src/style.css` - your existing CSS has been preserved!

## 📦 Project Structure

```
react-portfolio/
├── public/
│   ├── images/          # Your images
│   └── *.pdf            # Resume and other files
├── src/
│   ├── components/      # React components
│   ├── data/
│   │   └── portfolioData.js  # 👈 EDIT THIS FILE
│   ├── App.jsx
│   └── style.css
└── package.json
```

## 🌐 Deploying to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Push your code to GitHub
2. Go to Settings → Pages → Source → "GitHub Actions"
3. Push to main branch - automatic deployment!

### Option 2: Manual Deploy

```bash
npm run deploy
```

## 🔧 Tech Stack

- **React** - UI library
- **Vite** - Build tool (super fast!)
- **GitHub Pages** - Hosting

## 💡 Benefits of This React Version

✅ **Easy Updates** - All content in one file  
✅ **Component Reusability** - Add projects by just updating data  
✅ **Modern Development** - Hot reload during development  
✅ **Optimized Build** - Faster loading times  

## 📱 Responsive Design

Your site automatically adapts to:
- 🖥️ Desktop (3 columns)
- 📱 Tablet (2 columns)
- 📱 Mobile (1 column)


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
