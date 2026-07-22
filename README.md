# Bilal Portfolio Website

A React and Vite portfolio website for a Web & Business Systems Developer. Content is organized into reusable components and configuration files so projects, contact methods, images, and documents can be updated without redesigning the website.

## Getting started

Install the dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open the local address displayed in the terminal.

## Available commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Check JavaScript and JSX
npm run format   # Format the project with Prettier
```

Before publishing changes, run:

```bash
npm run lint
npm run build
```

## Public assets

Files placed inside `public` are served from the root of the website. For example:

```text
public/images/example.jpg → /images/example.jpg
```

Create `public/images` if it does not already exist.

## Case-study screenshots

Upload the current project screenshots using these paths:

```text
public/images/panther-x-vision.jpg
public/images/legacy-chamber.jpg
public/images/adpilot-ai.jpg
```

Recommended screenshot settings:

- Approximately 1600 × 1000 pixels
- A 16:10 aspect ratio
- JPG, PNG, or WebP format
- Compressed for web delivery
- Lowercase filenames without spaces

If a screenshot is missing, the website displays a neutral fallback instead of breaking the layout.

## Editing projects

All case-study content is stored in:

```text
src/data/projects.js
```

Each project uses this structure:

```js
{
  id: "new-project",
  title: "New Project",
  category: "Project Category",
  description: "Short business-focused project description.",
  challenge: "The problem that needed to be solved.",
  solution: "How the project solved the problem.",
  impact: "The business value created by the solution.",
  achievements: ["Key achievement one", "Key achievement two"],
  result: "The resulting improvement or project outcome.",
  performance: "Responsive or performance-focused improvements.",
  technologies: ["React", "JavaScript", "CSS"],
  image: "/images/new-project.jpg",
  projectUrl: "https://example.com",
  featured: true,
  year: "2026",
}
```

Important behavior:

- Set `featured: true` to display the project.
- Use a real URL for `projectUrl` to display the “View Live Project” button.
- Set `projectUrl: null` when no live URL exists. No fake or disabled button will be rendered.
- The image filename must exactly match the file inside `public/images`.

## Profile photo

Upload the professional headshot at:

```text
public/images/profile.jpg
```

The image is displayed in the About section. If it is missing, the website shows a tasteful placeholder frame. Do not add placeholder people, generated faces, or avatar images.

## Contact links

Contact methods are configured in:

```text
src/data/contact.js
```

Example:

```js
export const contact = {
  email: "mailto:hello@example.com",
  github: "https://github.com/username",
  linkedin: "https://www.linkedin.com/in/username",
  whatsapp: "https://wa.me/1234567890",
};
```

Leave any contact value as an empty string to hide that method automatically. Empty contact links do not create placeholders or broken icons.

## Contact form integration

The form currently includes frontend validation, accessible error messages, loading state, duplicate-submission protection, and success/error states. It is intentionally not connected to a backend.

The future integration point is inside:

```text
src/components/Contact.jsx
```

Find the `submitProjectInquiry` function and replace its placeholder delay with a Formspree, EmailJS, Web3Forms, or custom API request:

```js
async function submitProjectInquiry(form) {
  const response = await fetch("YOUR_API_ENDPOINT", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!response.ok) throw new Error("Submission failed");
  return response;
}
```

Do not place private API secrets directly in frontend code.

## Main files

```text
src/App.jsx                    Page section order
src/data/projects.js          Case-study content and live URLs
src/data/contact.js           Contact methods
src/components/Hero.jsx       Hero content and technical visual
src/components/About.jsx      About section
src/components/Process.jsx    Development process
src/components/Solutions.jsx  Services and trust signals
src/components/Contact.jsx    Contact CTA and form
src/utils/scrollToSection.js  Navbar-aware section scrolling
src/styles/global.css         Global and responsive styling
index.html                    SEO and Open Graph metadata
public/robots.txt             Search-engine crawling rules
public/sitemap.xml            Public sitemap
```

## Troubleshooting

If an image does not appear:

1. Confirm the file is inside `public/images`.
2. Confirm its filename, capitalization, and extension match the configured path.
3. Restart the development server if necessary.

If a project button does not appear, confirm that `projectUrl` contains a real URL instead of `null`.
