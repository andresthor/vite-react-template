# React + TypeScript + Vite Template

This is a modern React template with TypeScript, ESLint, and Prettier configuration.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast frontend tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📦 [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
- 🔍 [ESLint](https://eslint.org/) - Linting utility for JavaScript and TypeScript
- 💅 [Prettier](https://prettier.io/) - Opinionated code formatter
- 🧪 [Vitest](https://vitest.dev/) - Unit testing powered by Vite (optional)

## Usage

### Start Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Lint and Format Code

```bash
# Lint code
npm run lint

# Fix linting errors
npm run lint:fix

# Format code with Prettier
npm run format
```

### Run Tests (if configured)

```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## Project Structure

```
my-react-app/
├── public/               # Public assets
├── src/
│   ├── assets/           # Project assets
│   ├── components/       # Reusable components
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Application pages
│   ├── services/         # API services
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── App.tsx           # Main App component
│   ├── main.tsx          # Application entry
│   └── vite-env.d.ts     # Vite type declarations
├── .eslintrc.cjs         # ESLint configuration
├── .gitignore            # Git ignore file
├── .prettierrc           # Prettier configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## Using This Template

### GitHub Template

1. Click the "Use this template" button at the top of the repository
2. Choose a name for your new repository
3. Click "Create repository from template"
4. Clone your new repository
5. Install dependencies with `npm install`
6. Start developing!

### Manual Clone

If you prefer not to use GitHub's template feature:

1. Clone this repo to your local machine
2. Remove the existing git history: `rm -rf .git/`
3. Initialize a fresh git repository: `git init`
4. Install dependencies: `npm install`
5. Start developing!

## Customization

This template provides a solid foundation, but you may want to add:

- **Routing**: Add [React Router](https://reactrouter.com/) for navigation
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/) or [Zustand](https://github.com/pmndrs/zustand)
- **UI Components**: [Material UI](https://mui.com/), [Chakra UI](https://chakra-ui.com/), or [Tailwind CSS](https://tailwindcss.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://github.com/colinhacks/zod) for validation
- **API Queries**: [TanStack Query](https://tanstack.com/query) (formerly React Query)

## License

MIT
