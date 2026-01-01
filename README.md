# Portfolio - macOS Edition 🎨

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Here-blue?style=for-the-badge)](https://kishanjograjiya.vercel.app/)

Welcome to my portfolio! This project is a creative and interactive personal portfolio designed to mimic the aesthetic and functionality of Apple's macOS desktop. It moves beyond traditional portfolio layouts to offer a unique, engaging user experience where my projects, skills, and contact information are presented as applications and files within a simulated operating system.

![macOS Portfolio Preview](public/macbook.png)

## ✨ Core Features

- **macOS-Inspired UI**: A familiar and intuitive desktop interface, complete with a menu bar, dock, and draggable/resizable windows.
- **Dynamic Window Management**: Open multiple "apps" (windows) at once, bring them to the front, minimize, or close them. The z-index and state of each window are managed globally.
- **Functional Dock**: A sleek, auto-hiding dock with a smooth magnification effect, providing quick access to the main sections of the portfolio.
- **Realistic "Apps"**:
  - **Finder**: Browse through my featured projects, each presented as a folder containing an overview, repository link, live demo, and tech stack info.
  - **Safari**: Read blog posts and articles I've written.
  - **Terminal**: A fun, interactive way to view my technical skills and proficiency.
  - **Photos**: A gallery of images.
  - **Contact**: An application to view my social links and get in touch.
  - **Resume**: An embedded PDF viewer to see my full resume.
- **Dark & Light Mode**: Switch between themes seamlessly.
- **Fully Responsive**: While designed for a desktop experience, the layout adapts to smaller screen sizes.

## 🛠 Tech Stack

This portfolio is built with a modern, powerful stack to ensure a smooth and performant experience:

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (for simple, scalable global state)
- **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) (for all timeline and UI animations)
- **PDF Viewing**: [React-PDF](https://github.com/wojtekmaj/react-pdf)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

The codebase is organized to be modular and easy to navigate:

```
c:/Users/admin/Desktop/Projects/portfolio_macos-style/
├── public/              # Static assets (icons, images, resume PDF)
├── src/
│   ├── components/      # Core, reusable UI components (Dock, Navbar, WindowControls)
│   ├── constants/       # Centralized data (project details, skills, social links)
│   ├── hoc/             # Higher-Order Components (e.g., WindowWrapper for draggable windows)
│   ├── store/           # Zustand state management stores (window state, locations)
│   ├── windows/         # Components representing each "application" window (Finder, Safari, etc.)
│   ├── App.jsx          # Main application component, orchestrates layout and windows
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point for the React application
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies and scripts
└── README.md            # You are here!
```

### Key Highlights of the Structure

- **`src/constants/index.js`**: This file is the heart of the portfolio's content. To add, remove, or edit projects, skills, blog posts, or social links, you only need to modify the data in this file. No component changes are necessary!
- **`src/store/`**: Zustand stores are used to manage global state in a simple way.
  - `window.js`: Tracks the state of each window (is it open? what is its z-index?).
  - `location.js`: Manages the files and folders available in different "locations" like the desktop or within Finder.
- **`src/hoc/WindowWrapper.jsx`**: This HOC provides the draggable, resizable, and focus-management logic for all windows, making it easy to create new window types.

## 🚀 Getting Started

To run this project on your local machine, follow these steps:

1.  **Clone the Repository**
    ```sh
    git clone https://github.com/kishanjograjiya/portfolio_macos-style.git
    cd portfolio_macos-style
    ```

2.  **Install Dependencies**
    ```sh
    npm install
    ```

3.  **Run the Development Server**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 💡 How to Customize

Customizing the portfolio with your own information is straightforward:

1.  **Update Personal Info**: Open `src/constants/index.js`.
2.  **Edit Projects**: Modify the `WORK_LOCATION` object. Each item in the `children` array is a project folder.
3.  **Edit Skills**: Update the `techStack` array.
4.  **Edit Blog Posts**: Change the `blogPosts` array to link to your articles.
5.  **Update Socials**: Modify the `socials` array with your own links.
6.  **Replace Resume**: Replace the `resume.pdf` file in the `public/files/` directory with your own.
7.  **Change Images**: Swap out images in the `public/images/` and `public/icons/` directories to match your personal brand.

---

Feel free to fork this project, give it a star ⭐, and customize it to make it your own!
