# Amman Earth Movers - Review Assistance System

A premium, mobile-first SaaS web application designed specifically for Amman Earth Movers to facilitate quick, highly-customized Google Reviews from their customers. Built with modern web technologies, the platform provides a frictionless, app-like experience optimized for construction sites and mobile devices.

---

## 🌟 Key Features

*   **Mobile-First Premium UX:** Engineered with touch-friendly targets, fluid animations, and a responsive layout that looks and feels like a native mobile app.
*   **Intelligent Review Generation Engine:** A completely frontend, AI-free "spin-syntax" engine that constructs over 100+ unique, natural-sounding review templates per vehicle.
*   **Interactive Selection Wizard:** Step-by-step guidance for customers:
    1.  **Vehicle Selection:** Choose from the actual equipment catalog with high-quality images and loading skeletons.
    2.  **Service Rating:** Select overall satisfaction (Excellent, Good, Average, Need Improvement).
    3.  **Experience Highlights:** Multi-select specific positive aspects (Timely completion, Professional work, etc.).
*   **One-Click Copy & Redirect:** Seamless copy-to-clipboard functionality with satisfying toast notifications, automatically unlocking the "Post on Google" button.
*   **Glassmorphism UI:** Features premium backdrop-blur elements, smooth drop shadows, and high-contrast typography optimized for outdoor visibility.
*   **Zero Backend Required:** Entirely frontend-driven using React Context for state management, making hosting incredibly cheap and fast.

## 🛠️ Technology Stack

*   **Framework:** React 18 with Vite
*   **Styling:** Tailwind CSS v4
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Routing:** React Router DOM
*   **State Management:** React Context API

## 📂 Project Structure

```
src/
├── assets/             # Static assets
├── components/
│   ├── common/         # Shared UI elements (Logo)
│   ├── layout/         # Structural components (Header, Footer, PageContainer)
│   ├── review/         # Review-specific UI (RatingSelector, ExperienceSelector)
│   ├── ui/             # Generic UI components (Buttons, Toast, ProgressBar)
│   └── vehicle/        # Vehicle-specific components (VehicleCard, Grid)
├── context/            # React Context (ReviewContext)
├── data/               # Mock data (Vehicle configurations)
├── pages/              # Application Routes (Home, VehicleSelection, ReviewSuggestions)
├── routes/             # Route configurations
├── utils/              # Helper functions (ReviewTemplateManager)
```

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Rethankumar-cv/AMMAN_REVIEW_SYSTEM.git
    cd AMMAN_REVIEW_SYSTEM
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 🎨 Design & Branding

The application strictly adheres to the Amman Earth Movers visual identity:
*   **Primary Color:** Industrial Orange (`#F58220`)
*   **Secondary Color:** Charcoal Grey (`#4F4F4F`)
*   **Typography:** 'Inter' for crisp, modern readability.

## 📱 Mobile Optimizations

*   `overscroll-behavior-y: none` prevents native browser pull-to-refresh bounce.
*   `-webkit-tap-highlight-color: transparent` eliminates default touch highlight blinking.
*   Hidden scrollbars while preserving native scroll functionality.
*   Safe-area padding implemented on the bottom action bar for modern edge-to-edge screens.

## 📄 License

This project is proprietary software created for Amman Earth Movers. All rights reserved.
