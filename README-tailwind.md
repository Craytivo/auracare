Tailwind build (local)

This project includes a small Tailwind build setup so you can generate a branded `dist/styles.css` file from `src/styles/tailwind.css`.

Steps (Windows PowerShell):

1. Install dependencies (run once):

```powershell
npm install
```

2. Build the CSS once:

```powershell
npm run build:css
```

3. Or watch for changes during development:

```powershell
npm run watch:css
```

Notes:
- The `tailwind.config.js` includes our brand color tokens and looks for classes in `index.html` and other html files.
- The output file is `dist/styles.css`. After building, the HTML can include it with `<link rel="stylesheet" href="dist/styles.css">`.
- If you don't want to install dependencies, the site will continue to work using the Tailwind CDN already included in `index.html`, but building provides the configured brand tokens and custom components.
