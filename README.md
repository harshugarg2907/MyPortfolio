# Harsh Kumar Garg Portfolio

A futuristic personal portfolio for Harsh Kumar Garg, built with React, Vite, Tailwind CSS v4, Framer Motion, Three.js, React Three Fiber, Drei, GSAP-ready architecture, Lenis smooth scrolling, Lucide React, and React Icons.

## Tech Stack

- React 19 through the current `react` package
- Vite
- Tailwind CSS v4 with `@tailwindcss/vite`
- Framer Motion
- Three.js, `@react-three/fiber`, `@react-three/drei`
- GSAP
- Lenis
- Lucide React and React Icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The dev server uses `127.0.0.1` by default.

## Folder Structure

```text
src/
  components/
    background/
    layout/
    sections/
    three/
    ui/
  data/
  hooks/
  styles/
  App.jsx
  main.jsx
```

## Editing Content

Personal information, navigation, social links, education, experience, projects, skills, and contact methods live in:

```text
src/data/portfolio.js
```

To add a project, add a new object to the `projects` array. Use a real `liveUrl` only when the project is public. Repository buttons are intentionally disabled until real repository URLs are available.

## Profile Image

The hero reads the profile sticker from:

```text
public/profile-sticker.png
```

Save your sticker image with that exact filename to show it in the hero. If the file is missing, the site falls back to initials so there is no broken image. To use a different filename:

1. Place the image in `public/`.
2. Add the image path to `profile` in `src/data/portfolio.js`.
3. Replace or extend the identity card in `src/components/sections/Hero.jsx`.

## Resume

The resume button points to:

```text
public/resume-placeholder.pdf
```

Replace this file with the real resume PDF and keep the same filename, or update `profile.resumePath` in `src/data/portfolio.js`.

## Contact Form

The contact form uses client-side validation and a reliable `mailto:` fallback because no backend email provider is configured. To connect a real service, replace the submit handler in `src/components/sections/Contact.jsx` with your provider integration and keep the validation/error states.

## Deployment

For Vercel:

1. Import the project.
2. Use `npm install` as the install command.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.

## Performance Notes

- Three.js scenes are lazy-loaded.
- Background 3D accents are disabled on smaller screens and reduced-motion environments.
- Motion-heavy behavior respects `prefers-reduced-motion`.
- Layout uses stable grids and fixed-format visual areas to reduce shift.

## Accessibility Notes

- Semantic landmarks and sections are used.
- Navigation has keyboard focus states and a mobile menu.
- The contact form has labels, validation messages, and `aria-invalid` states.
- Decorative canvas layers are marked with `aria-hidden`.
