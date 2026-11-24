# Daylin Armstead portfolio
A Next.js Pages Router port of the React frontend published at https://daylin-armstead.web.app/. The deployment’s JavaScript source map supplied the portfolio components. The Next.js entry points, theme handling, and dependency manifest were adapted for this project.

## Run locally
Use Node.js 22 or 24. From the directory containing package.json, run:

    npm ci
    npm run dev

Open http://localhost:3000. On Windows PowerShell you can use npm.cmd in place of npm.

For production, run npm run build followed by npm start.

## Edit the portfolio
- src/components/Hero.js and About.js contain the introduction and personal details.
- src/components/Utils.js/Constant.js contains projects, skills, and experience.
- public/assets contains images, icons, scripts, and styles. The main stylesheet loads Nunito from Google Fonts.
- public/Daylin_Armstead_Resume.pdf is the linked résumé.
