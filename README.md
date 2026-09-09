# React.js Learning & UI Projects

A practical React.js learning repository containing a series of progressively structured exercises and UI projects built with **React.js, Vite, CSS, and Tailwind CSS**.

This repository documents my hands-on journey of learning React fundamentals, component-based development, props, reusable UI components, styling, Tailwind CSS, and practical interface development.

## 📚 Table of Contents

* [About](#about)
* [Technologies Used](#technologies-used)
* [Repository Structure](#repository-structure)
* [Projects and Learning Modules](#projects-and-learning-modules)
* [React Concepts Covered](#react-concepts-covered)
* [Installation and Setup](#installation-and-setup)
* [How to Use](#how-to-use)
* [Learning Progress](#learning-progress)
* [Future Improvements](#future-improvements)
* [Author](#author)
* [License](#license)

## About

This repository contains multiple independent React.js projects organized into numbered learning modules.

Each module focuses on a particular part of React development, starting with a basic React/Vite setup and progressing through components, props, reusable cards, CSS styling, Tailwind CSS, and UI-focused projects.

The repository currently contains **seven learning/project modules**, each maintained as an individual Vite application.

## Technologies Used

### Core Technologies

* **React.js 19**
* **React DOM**
* **JavaScript (JSX)**
* **Vite**
* **HTML5**
* **CSS3**

### Styling

* CSS
* Tailwind CSS 4

### Additional Libraries

* `lucide-react` — used for icons in the card/UI projects
* ESLint — used for code linting

The individual projects use React `19.2.8` and Vite `8.2.0`. Tailwind CSS is included in the Tailwind-based projects, while `lucide-react` is used in the card/UI projects.

## Repository Structure

```text
Reactjs/
│
├── 01-folder/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── eslint.config.js
│
├── 02-components/
│   ├── public/
│   ├── src/
│   │   └── components/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── 03-props/
│   ├── public/
│   ├── src/
│   │   └── components/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── 04-cards-project/
│   ├── public/
│   ├── src/
│   │   └── components/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── 05-css/
│   ├── public/
│   ├── src/
│   │   └── components/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── 06-tailwind/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
└── 07-ui-project/
    ├── public/
    ├── src/
    │   └── components/
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
```

Each numbered directory is an independent Vite + React application with its own `package.json` and dependencies.

## Projects and Learning Modules

| Module             | Focus          | Description                                                                        |
| ------------------ | -------------- | ---------------------------------------------------------------------------------- |
| `01-folder`        | React Basics   | Initial React + Vite project structure and application setup.                      |
| `02-components`    | Components     | Introduction to reusable React components such as cards and navigation components. |
| `03-props`         | Props          | Passing data into reusable components through props.                               |
| `04-cards-project` | Card UI        | A practical card-based UI using reusable components and JavaScript data.           |
| `05-css`           | CSS Styling    | Applying CSS to React components and organizing styled UI elements.                |
| `06-tailwind`      | Tailwind CSS   | Building React interfaces using Tailwind CSS utility classes.                      |
| `07-ui-project`    | UI Development | A larger UI-focused project using reusable sections/components and Tailwind CSS.   |

The repository structure confirms the progression from folders/components/props into card, CSS, Tailwind, and UI-focused work.

### `01-folder`

The first module provides the basic React + Vite application structure, including `App.jsx`, `main.jsx`, CSS, assets, and the standard Vite configuration.

### `02-components`

This module introduces reusable React components. The `components` directory currently contains components such as `Card.jsx` and `Nav.jsx`.

### `03-props`

This module focuses on **props** and reusable components. The `Card.jsx` component receives values such as image, user, and description through props.

### `04-cards-project`

This is a more practical card-based project. The application stores job information in a JavaScript array and uses `.map()` to generate reusable cards with data passed through props.

The project also uses `lucide-react` as an additional dependency.

### `05-css`

This module focuses on styling React applications with CSS and includes reusable components such as `button` and `header`.

### `06-tailwind`

This module introduces **Tailwind CSS 4** with React and Vite.

### `07-ui-project`

The final module currently focuses on UI development using reusable sections/components. The application passes a users array into `Section1`, demonstrating component composition and props.

## React Concepts Covered

Based on the current repository, the main concepts demonstrated include:

* React application setup
* JSX
* Functional components
* Component composition
* Reusable components
* Props
* Passing data between components
* JavaScript arrays in React
* `.map()` for rendering collections
* Dynamic rendering through component props
* CSS styling
* Tailwind CSS
* UI component organization
* Asset management
* Vite development workflow

For example, the `03-props` module demonstrates passing values into a reusable `Card` component, while `04-cards-project` demonstrates mapping over structured data and passing multiple properties to reusable cards.

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Shantanu1011/Reactjs.git
```

### 2. Open the Repository

```bash
cd Reactjs
```

### 3. Choose a Module

Each numbered folder is a separate React/Vite application.

For example:

```bash
cd 01-folder
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### 6. Explore Other Modules

Return to the repository root and choose another module:

```bash
cd ..
cd 02-components
npm install
npm run dev
```

The same approach can be used for the remaining modules.

## Available Commands

Each project provides the following standard Vite scripts:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

* `npm run dev` — Start the development server
* `npm run build` — Create a production build
* `npm run lint` — Run ESLint
* `npm run preview` — Preview the production build

These scripts are defined across the individual module `package.json` files.

## How to Use

1. Clone the repository.
2. Select one of the numbered learning modules.
3. Run `npm install`.
4. Start the module with `npm run dev`.
5. Open the local Vite URL in your browser.
6. Explore the source code inside the module's `src` directory.
7. Move through the modules sequentially to follow the learning progression.

For learning purposes, it is recommended to start with `01-folder` and continue through the modules in numerical order.

## Learning Progress

The repository represents a practical progression through React development:

```text
React + Vite
     ↓
Components
     ↓
Props
     ↓
Reusable Card UI
     ↓
CSS Styling
     ↓
Tailwind CSS
     ↓
UI Project
```

This structure makes the repository useful as both a learning record and a reference for revisiting React fundamentals.

## Future Improvements

Possible improvements as the repository grows:

* Add more React Hooks examples such as `useState` and `useEffect`
* Add form handling examples
* Add API integration projects
* Add React Router examples
* Add Context API examples
* Add more complete real-world projects
* Add screenshots or live demos for major UI projects
* Add individual README files for larger modules
* Add deployment links for completed projects

## Author

**Shantanu Londhe**

* GitHub: [Shantanu1011](https://github.com/Shantanu1011)

## License

No license file is currently present in the repository, so no specific open-source license is claimed.
