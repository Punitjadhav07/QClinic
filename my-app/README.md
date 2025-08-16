# QClinic Portfolio

A dark, futuristic portfolio website showcasing the QClinic healthcare queue management system. Built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Dark Futuristic Theme**: Professional healthcare-focused design with emerald accents
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Intersection Observer API for fade-in effects and smooth scrolling
- **Interactive Elements**: Tabbed features section and hover effects
- **Modern Tech Stack**: Next.js 14, React 18, Tailwind CSS v4

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Icons**: Lucide React
- **Fonts**: DM Sans (Google Fonts)
- **Animations**: CSS animations with Intersection Observer

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd qclinic-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Design System

### Color Palette
- **Primary**: Emerald (#10b981) - Healthcare trust and innovation
- **Background**: Dark blue-gray (#1f2937) - Professional foundation
- **Accent**: Various chart colors for visual hierarchy
- **Text**: High contrast white/gray for accessibility

### Typography
- **Headings**: DM Sans Bold (700)
- **Body**: DM Sans Regular (400) and Medium (500)
- **Responsive**: Scales from mobile to desktop

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with floating animations
2. **Team Members**: Professional cards with hover effects
3. **Problem Understanding**: Side-by-side patient vs clinic challenges
4. **Solution Overview**: Three-card layout explaining the approach
5. **Core Features**: Interactive tabs for Patient/Clinic/Admin panels
6. **Technology Stack**: Organized by category with visual indicators
7. **Implementation Timeline**: Visual timeline with 7 development phases
8. **Future Scope**: 6 expansion areas with modern icons
9. **Impact Section**: Three key benefit areas with checkmarks

## 🔧 Customization

### Updating Colors
Edit the design tokens in `app/globals.css`:
\`\`\`css
:root {
  --primary: oklch(0.65 0.15 160); /* Emerald */
  --background: oklch(0.145 0.02 240); /* Dark blue-gray */
  /* ... other tokens */
}
\`\`\`

### Adding New Sections
1. Add the section component to `app/page.tsx`
2. Update the navigation in the header
3. Add fade-in animations with `className="fade-in"`

### Modifying Content
Update the data arrays in `app/page.tsx`:
- `teamMembers`: Team information
- `patientChallenges` & `clinicChallenges`: Problem statements
- `techStack`: Technology categories
- `timeline`: Implementation phases
- `futureScope`: Future expansion plans

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
\`\`\`bash
npm run build
\`\`\`
Deploy the `.next` folder to your hosting provider.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Team

- **Punit Jadhav** - Full Stack Developer
- **Tejas Sonawane** - Frontend Developer  
- **Shreya Jadhao** - AI
- **Purvesh Tawade** - Backend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**QClinic** - "Less waiting, more healing. Where patient time matters most."
