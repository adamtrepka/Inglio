# Inglio

Inglio is a language learning web application that helps users improve their language skills through interactive exercises based on real-world articles. The application features flashcards, tense practice, and fact-checking activities to enhance vocabulary and comprehension.

## Features

- **Article-based Learning**: Study language in context using real articles
- **Flashcard System**: Learn new vocabulary and phrasal verbs with a spaced repetition system
- **Tense Exercises**: Practice and master verb tenses in context
- **Fact Checking**: Improve comprehension by verifying facts from articles
- **User Progress Tracking**: Track your learning journey

## Technologies

- [Next.js 15](https://nextjs.org/) with App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Turbopack](https://turbo.build/pack) for fast development

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/adamtrepka/Inglio.git
   cd inglio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or 
   pnpm install
   # or
   bun install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

```
src/
  app/                   # Next.js App Router
    components/          # React components
      factChecking/      # Fact checking components
      flashcards/        # Flashcard components
      sections/          # Main section components
    data/                # Data files and content
    types/               # TypeScript type definitions
    utils/               # Utility functions
    exercise.json        # Exercise data
    page.tsx             # Main application page
```

## Development

The application uses the latest React and Next.js features, with a modern development setup:

- Built with the Next.js App Router architecture
- Uses React 19's latest features
- TypeScript for type safety
- Tailwind CSS for styling
- Development server with Turbopack for fast refresh

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.