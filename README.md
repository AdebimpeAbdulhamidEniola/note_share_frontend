# NoteShare - Code Sharing Platform

.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://codeshare-coral.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A modern, real-time code sharing platform built with Next.js 15 that enables developers to create, share, and collaborate on code snippets with syntax highlighting for multiple programming languages.

**🔗 Live Demo:** [https://codeshare-coral.vercel.app](https://codeshare-coral.vercel.app)

## Features

- **Multi-Language Support** - Syntax highlighting for 15+ programming languages including HTML, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Kotlin, Swift, SQL, JavaScript, and CSS
- **Real-Time Code Sharing** - Generate shareable links to code snippets instantly
- **Modern UI/UX** - Clean, intuitive interface with light and dark theme support (light/vs-dark/hc-black)
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Fast & Lightweight** - Built with Next.js 15 for optimal performance
- **Type-Safe** - Full TypeScript implementation for reliability

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **UI Components:** Radix UI primitives
- **Fonts:** Geist Font Family (optimized with `next/font`)
- **Code Editor:** Monaco-based syntax highlighting
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AdebimpeAbdulhamidEniola/note_share_frontend.git
cd note_share_frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
note_share_frontend/
├── app/                    # Next.js app directory (App Router)
├── components/            # Reusable React components
│   └── ui/               # shadcn/ui components
├── design/               # Design assets and resources
├── lib/                  # Utility functions and helpers
├── public/              # Static assets
│   └── resources/       # Images and icons
├── types.ts             # TypeScript type definitions
├── components.json      # shadcn/ui configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Usage

### Creating a Code Snippet

1. Select your programming language from the dropdown menu
2. Write or paste your code in the editor
3. Choose your preferred theme (light/vs-dark/hc-black)
4. Click the "Share" button to generate a shareable link

### Sharing Code

- Copy the generated link and share it with colleagues or the community
- Recipients can view the code with proper syntax highlighting
- No authentication required for viewing shared snippets

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

This project uses ESLint for code quality and follows Next.js recommended configuration. Run linting with:

```bash
npm run lint
```

## Deployment

The application is deployed on Vercel. To deploy your own instance:

1. Fork this repository
2. Import the project in [Vercel](https://vercel.com/new)
3. Configure environment variables (if needed)
4. Deploy

For detailed deployment instructions, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests.

## Support

If you encounter any issues or have questions:

- Open an [issue](https://github.com/AdebimpeAbdulhamidEniola/note_share_frontend/issues) on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the [shadcn/ui documentation](https://ui.shadcn.com/)

## Maintainer

**Adebimpe Abdulhamid Eniola**
- GitHub: [@AdebimpeAbdulhamidEniola](https://github.com/AdebimpeAbdulhamidEniola)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Next.js](https://nextjs.org/) by Vercel
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Font optimization with [Geist](https://vercel.com/font)

---

**Note:** This is the frontend application. For the complete experience, ensure the backend API is running and properly configured.