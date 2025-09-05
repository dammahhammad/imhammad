# M. Hammad - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and technical expertise. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live website: [imhammad.com](https://imhammad.com)

## ✨ Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Animated typewriter effect, hover animations, and smooth transitions
- **Contact Form**: Integrated Google Apps Script form with real-time validation
- **Project Showcase**: Detailed project portfolio with live links
- **Blog Integration**: Technical blog posts with hover effects
- **Experience Timeline**: Professional experience with expandable details
- **Tech Stack Display**: Interactive technology showcase with tooltips

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Component-based UI development
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Motion (Framer Motion)** - Advanced animations
- **Lucide React** - Icon library

### Form Handling & Validation
- **React Hook Form** - Optimized form handling
- **Zod** - Type-safe validation schema
- **Shadcn Form** - Accessible form components

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── blogs/             # Blog listing page
│   ├── projects/          # Projects showcase page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── forms/            # Contact form components
│   ├── experiences/      # Experience timeline
│   ├── projects/         # Project components
│   ├── ui/               # Shadcn UI components
│   └── data/             # Static data files
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configurations
│   ├── config/          # App configuration
│   └── validations/     # Zod validation schemas
└── assets/              # Images and static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/imhammad.git
cd imhammad
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Theme
The website supports both light and dark themes with automatic system preference detection.

### Content
Update the following files to customize content:
- `src/components/data/experience.ts` - Professional experience
- `src/components/data/projects.ts` - Project portfolio
- `src/components/data/blogs.ts` - Blog posts
- `src/components/data/tech-stack.ts` - Technology showcase

### Styling
The project uses Tailwind CSS for styling. Customize colors and themes in `tailwind.config.js`.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/imhammad/issues).

## 📞 Contact

M. Hammad - [@dammahhammad](https://linkedin.com/in/dammahhammad) - dammahhammad9@gmail.com

Project Link: [https://github.com/yourusername/imhammad](https://github.com/yourusername/imhammad)

---

⭐ Star this repository if you found it helpful!