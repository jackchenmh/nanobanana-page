# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for code issues

### Package Manager
This project uses **pnpm** as the package manager, not npm or yarn.

## Architecture

This is a **Next.js 15** application using **React 19** with the following architecture:

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **TypeScript**: Full TypeScript support with strict configuration
- **Fonts**: Geist Sans and Geist Mono fonts
- **Analytics**: Vercel Analytics integrated

### Project Structure
- `app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with fonts and analytics
  - `page.tsx` - Main landing page composition
  - `globals.css` - Global styles and Tailwind imports

- `components/` - React components organized by feature
  - Main landing page sections: `header.tsx`, `hero.tsx`, `image-editor.tsx`, `features.tsx`, `showcase.tsx`, `testimonials.tsx`, `faq.tsx`, `cta.tsx`, `footer.tsx`
  - `ui/` - shadcn/ui component library (60+ components)
  - `theme-provider.tsx` - Theme context provider

- `lib/` - Utility functions
  - `utils.ts` - Tailwind class merging utility using clsx and tailwind-merge

- `hooks/` - Custom React hooks
  - `use-mobile.ts` - Mobile device detection
  - `use-toast.ts` - Toast notification system

### Key Features
- **Image Editor**: Main feature component with prompt-based image editing interface
- **Landing Page**: Marketing site with multiple sections showcasing the AI image editing product
- **Theme System**: Dark/light mode support using next-themes
- **Responsive Design**: Mobile-first design with responsive breakpoints
- **Component System**: Comprehensive UI component library based on Radix UI

### Configuration
- **shadcn/ui**: Configured with "new-york" style, RSC enabled, base color "neutral"
- **Path Aliases**: `@/*` maps to root directory for imports
- **Tailwind**: Custom configuration with CSS variables and animations