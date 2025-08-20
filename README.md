# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 💰 Colleague Loan Tracker

A simple and efficient Single Page Application (SPA) for tracking money lent to colleagues. Built with React, TypeScript, and Vite for modern web development and easy deployment.

## ✨ Features

- **Track Loans**: Add new loans with colleague name, amount, date, and description
- **Mark as Repaid**: Easily mark loans as repaid when colleagues pay you back
- **Visual Summary**: See outstanding and repaid amounts at a glance
- **Local Storage**: All data persists in your browser's local storage
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with visual status indicators

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Yarn package manager

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   yarn install
   ```

### Development

Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:5173/colleague-loan-tracker/`

### Building for Production

Build the project:
```bash
yarn build
```

Preview the production build:
```bash
yarn preview
```

## 🌐 Deployment

### GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/colleague-loan-tracker"
   ```

2. Deploy to GitHub Pages:
   ```bash
   yarn deploy
   ```

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it as a Vite project
3. Set the build command to `yarn build`
4. Set the output directory to `dist`
5. Deploy!

## 📱 How to Use

1. **Add a Loan**: Fill in the colleague's name, amount, and optional description, then click "Add Loan"
2. **Track Status**: See all loans in the history section with clear visual indicators
3. **Mark as Repaid**: Click "Mark as Repaid" when a colleague pays you back
4. **View Summary**: Check the summary at the top to see outstanding vs repaid amounts
5. **Delete Loans**: Remove loans from the list if needed

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with responsive design
- **Local Storage** - Client-side data persistence

## 🎨 Project Structure

```
src/
├── App.tsx          # Main application component
├── App.css          # Application styles
├── main.tsx         # Application entry point
└── vite-env.d.ts    # Vite type definitions
```

## 🔧 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 👤 Author

Built with ❤️ for keeping track of colleague loans in a simple and efficient way.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
