# AI Agent Instructions for Magic Portfolio Template

This file provides guidance for AI coding agents customizing this Next.js portfolio template.

## Quick Start

1. **Content**: Edit files in `src/resources/` for personal info and content
2. **Pages**: Edit files in `src/app/` for page layouts
3. **Components**: Customize `src/components/` for UI changes

---

## Files to MODIFY (Customize These)

### Content Resources (Most Important)
| Location | Purpose |
|----------|---------|
| `src/resources/` | All content data files |

### Pages
| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/app/*/page.tsx` | Other pages |

### Styling
| File | Purpose |
|------|---------|
| `src/app/globals.css` | Global styles |
| Tailwind classes | Component-level styling |

---

## Files to KEEP (Don't Modify Unless Necessary)

```
src/components/    # Reusable UI components
src/utils/         # Utility functions
src/types/         # TypeScript type definitions
```

---

## Environment Variables

Create `.env.local` from `.env.example`:

```env
# Add any required environment variables here
# Check .env.example for the full list
```

---

## Build and Test

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

---

## Deployment Notes

This is a Next.js app. For static export, add to `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```

Then run `npm run build` - output goes to `out/` folder.
