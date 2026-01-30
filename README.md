# vimis22.github.io

Et personligt website til at dele studienoter og opgaver for Datamatiker-studerende på SDU.

## Kom i gang

### Installation

Før du kan starte projektet, skal du installere alle nødvendige dependencies:

```bash
npm install
```

### Start udviklingsserver

For at starte projektet lokalt og se ændringer i real-time:

```bash
npm run dev
```

Dette vil starte en lokal udviklingsserver (typisk på `http://localhost:5173` eller en anden port hvis den er optaget).

### Byg til produktion

For at bygge projektet til deployment:

```bash
npm run build
```

Dette opretter en `dist/` mappe med de optimerede filer klar til deployment.

## Fejlfinding

### Problem: Ændringer vises ikke i browseren

Hvis du har lavet ændringer i koden, men de vises ikke når du kører `npm run dev`, kan du prøve følgende:

1. **Hard refresh i browseren:**
   - Tryk `Ctrl + Shift + R` (Windows/Linux)
   - Eller `Cmd + Shift + R` (Mac)
   - Dette tvinger browseren til at genindlæse siden uden cache

2. **Ryd Vite cache:**
   ```bash
   rm -rf .vite node_modules/.vite dist
   npm run build
   npm run dev
   ```

3. **Ryd gamle compiled filer:**
   Hvis der findes gamle `assets/` eller `index.html` filer i rod-mappen (ikke i `dist/`), skal disse slettes:
   ```bash
   rm -rf assets
   rm index.html  # Kun hvis der er en gammel compiled version
   ```

### Problem: GitHub Pages viser gammel version

Hvis den deployede version på `https://vimis22.github.io` ikke viser dine seneste ændringer:

1. **Byg projektet:**
   ```bash
   npm run build
   ```

2. **Deploy til GitHub Pages:**
   ```bash
   npm run deploy
   ```

   Dette bygger projektet og pusher `dist/` mappen til `gh-pages` branchen.

3. **Manuel deployment (hvis npm run deploy ikke virker):**

   a. Sørg for at du er på `gh-pages` branchen:
   ```bash
   git checkout gh-pages
   ```

   b. Merge ændringer fra main:
   ```bash
   git merge main
   ```

   c. Byg projektet:
   ```bash
   npm run build
   ```

   d. Kopier indholdet fra `dist/` til rod-mappen:
   ```bash
   cp -r dist/* .
   ```

   e. Commit og push ændringerne:
   ```bash
   git add .
   git commit -m "Deploy seneste ændringer til gh-pages"
   git push origin gh-pages
   ```

4. **Vent et par minutter** - GitHub Pages kan tage 1-5 minutter at opdatere efter push.

5. **Ryd browser cache** på den deployede side med `Ctrl + Shift + R`.

## Projektstruktur

```
vimis22.github.io/
├── src/
│   ├── components/
│   │   ├── display/
│   │   │   └── pages/
│   │   │       ├── mainpages/      # Hovedsider (MainPage, About, etc.)
│   │   │       └── semesterpages/  # Semester 1-6 sider
│   │   └── elements/               # Genanvendelige komponenter (LinkBox, etc.)
│   ├── styles/
│   │   └── main.css               # Global CSS
│   ├── App.jsx                    # Hoved-app komponent med routing
│   └── main.jsx                   # Entry point
├── public/                        # Statiske filer
├── dist/                          # Byggede filer (genereres automatisk)
└── index.html                     # HTML template

```

## Teknologier

- **React** - UI framework
- **Vite** - Build tool og dev server
- **React Router** - Client-side routing
- **GitHub Pages** - Hosting

## Kontakt

Email: vimis22@student.sdu.dk

