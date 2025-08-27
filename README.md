# 백재현 (Jae-Hyun Baek) - Portfolio Website

> **Mathematics & AI Research Portfolio** 

## 🌟 Project Overview

This is the official portfolio website for Jae-Hyun Baek, showcasing research achievements, academic contributions, and professional experience in Mathematics, AI, and Machine Learning. Built with modern web technologies and optimized for both desktop and mobile experiences.

### 🎯 Purpose
- **Academic Portfolio**: Comprehensive showcase of research papers, publications, and conference presentations
- **Professional Profile**: Highlighting expertise in AI/ML, Mathematics, and Software Development

## 🚀 Live Demo

🔗 **[Visit Portfolio Website](https://jhbaek.up.railway.app)** *(Will be available after deployment)*

## 📋 Features

### 🏠 **Home Page**
- Hero section with gradient background and animated elements
- Professional introduction with key highlights
- Quick links to major sections and social profiles

### 🏆 **Awards & Recognition**
- Academic achievements and honors
- Best paper awards and scholarships
- Professional certifications and recognitions

### 🔬 **Research & Publications**
- Journal papers and conference presentations
- Deep research achievements with detailed technical contributions
- VLM & Multimodal AI expertise showcase
- Research projects and collaborations

### 👨‍💼 **About**
- Professional background and education
- Technical skills and core competencies
- Project portfolio with live demos and GitHub links

### 📞 **Contact**
- Professional contact information
- Social media and professional network links
- Direct communication channels

## 💻 Tech Stack

### **Frontend Framework**
- **Next.js 15.1.0** - React framework with App Router
- **React 19** - Latest React features and optimizations
- **TypeScript** - Type-safe development

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library

### **Deployment & Hosting**
- **Railway** - Modern deployment platform
- **Vercel-compatible** - Alternative deployment options

## 🏗️ Project Structure

```
jhbaek/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── awards/          # Awards & Recognition page
│   │   │   ├── research/        # Research & Publications page
│   │   │   ├── about/           # About & Projects page
│   │   │   └── contact/         # Contact page
│   │   ├── globals.css          # Global styles
│   │   └── layout.tsx           # Root layout
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   └── navigation.tsx       # Header navigation
│   └── lib/
├── public/
│   ├── images/                  # Research images and photos
│   └── certificates/           # Award certificates
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/LeGenAI/jhbaek.git
   cd jhbaek
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📊 Performance Optimization

### **Core Web Vitals**
- ✅ **LCP**: < 2.5s (Large Contentful Paint)
- ✅ **FID**: < 100ms (First Input Delay)
- ✅ **CLS**: < 0.1 (Cumulative Layout Shift)

### **Optimization Features**
- **Next.js Image Optimization** - Automatic WebP conversion and lazy loading
- **Code Splitting** - Route-based and component-level splitting
- **Static Generation** - Pre-rendered pages for optimal performance
- **Responsive Design** - Mobile-first approach with adaptive layouts

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue gradients (`from-blue-600 to-purple-600`)
- **Secondary**: Amber accents (`amber-400`, `amber-300`)
- **Neutral**: Gray scale (`gray-50` to `gray-900`)

### **Typography**
- **Headings**: Inter font family with bold weights
- **Body**: System font stack with regular weights
- **Code**: Monospace font for technical content

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🔧 Configuration Files

### **Next.js Configuration**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  }
}

module.exports = nextConfig
```

## 📈 SEO & Analytics

### **SEO Features**
- Comprehensive meta tags and descriptions
- Open Graph social media optimization
- Structured data for search engines
- Automatic sitemap generation

## 👨‍💻 Author

**백재현 (Jae-Hyun Baek)**
- 🎓 Sogang University, Department of Mathematics
- 🚀 Team Leader at DeepFountain Inc.
- 🔬 AI/ML Researcher & Developer
- 📧 Email: [bjh3641@gmail.com](mailto:bjh3641@gmail.com)
- 💼 LinkedIn: [재현-백](https://www.linkedin.com/in/재현-백-516899227)
- 🐙 GitHub: [LeGenAI](https://github.com/LeGenAI)

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **shadcn** - For the beautiful UI component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Railway** - For the seamless deployment platform
- **EasyNext** - For the initial project template

---

<p align="center">
  <strong>Built with ❤️ for EXAONE Lab Internship Application</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.1.0-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" />
  <img src="https://img.shields.io/badge/Railway-Deployed-0B0D0E?style=for-the-badge&logo=railway" />
</p>
