vimis22-react (Vite + React)

This is a simple React port of your static site, prepared for GitHub Pages.

Prerequisites
- Node.js 18+ and npm

1) Install
    cd react_version
    npm install

2) Development
    npm run dev
Open the URL shown in the terminal (typically http://localhost:5173). Navigation uses hash-based routing so refreshes work like on GitHub Pages.

3) Build
    npm run build
Outputs static files to dist/.

4) Deploy to GitHub Pages
This project already includes gh-pages and scripts.
    npm run deploy
It will build and publish the dist folder to the gh-pages branch.

Notes
- Place your logo image at: react_version/public/vimis22.png so it’s available at /vimis22.png.
- The UI styles are copied from your original CSS to src/styles/main.css and class names were kept.
- Routing uses HashRouter to work reliably on GitHub Pages.
- Countdown, theme selector, and simple quiz check logic were converted into basic React hooks/components.

Project structure overview:
- src/main.jsx — entry with HashRouter
- src/App.jsx — routes and app shell
- src/styles/main.css — original CSS
- src/components/ — Navbar, Countdown
- src/hooks/ — useCountdown, useTheme, useQuizChecker
- src/pages/ — MainPage, Quiz, QuizMath, ThemeBar, Semester, About

If you need to add more pages later, create a new component in src/pages and add a <Route> in src/App.jsx.
