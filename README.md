# Todo App with React, TypeScript, and Vite

This is a **Todo App** built with **React**, **TypeScript**, and **Vite**. It allows you to manage your tasks efficiently with features like adding, updating, deleting, and marking tasks as completed. It also displays the last update time for each task and provides filters to view all, completed, or incomplete tasks.

---

## Features

- **Add a Todo**: Easily add new tasks to your list.
- **Update a Todo**: Edit existing tasks to keep them up-to-date.
- **Delete a Todo**: Remove tasks you no longer need.
- **Mark as Completed**: Toggle the completion status of tasks.
- **Last Update Time**: See when each task was last updated.
- **Filters**:
  - **All**: View all tasks.
  - **Completed**: View only completed tasks.
  - **Incomplete**: View only incomplete tasks.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript for better developer experience.
- **Vite**: A fast build tool for modern web development.
- **ESLint**: For linting and maintaining code quality.
- **CSS Modules**: For scoped and modular styling.

---

## How to Use

1. **Add a Task**:
   - Type your task in the input field and press `Add` or hit `Enter`.

2. **Edit a Task**:
   - Click the `Edit` button next to the task you want to update.
   - Modify the text and save your changes.

3. **Delete a Task**:
   - Click the `Delete` button next to the task you want to remove.

4. **Mark as Completed**:
   - Toggle the checkbox next to a task to mark it as completed or incomplete.

5. **Filter Tasks**:
   - Use the filter buttons to view:
     - `All Tasks`
     - `Completed Tasks`
     - `Incomplete Tasks`

6. **Last Update Time**:
   - Each task displays the last time it was updated.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/atiqaz/todo-reactTypeScript.git
   cd todo-reactTypeScript
   
3. Install Package:
```bash
npm run dev
# or
yarn dev
```
  

3. Start the development server:
```bash
npm run dev
# or
yarn dev

```
## Project Structure
```bash

todo-reactTypeScript/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Static assets like images, fonts, etc.
│   ├── components/          # Reusable components (e.g., TodoItem, TodoForm)
│   ├── context/             # React context for state management
│   ├── hooks/               # Custom React hooks
│   ├── interfaces/          # TypeScript interfaces and types
│   ├── pages/               # Application pages (if any)
│   ├── utils/               # Utility functions
│   ├── App.css              # Main application styles
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite environment types
├── .gitignore               # Files and directories to ignore in Git
├── .eslint.config.js        # ESLint configuration
├── index.html               # Main HTML file
├── package-lock.json        # Lock file for npm
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
├── tsconfig.app.json        # TypeScript configuration for the app
├── tsconfig.json            # Base TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for Node
├── vite.config.ts           # Vite configuration
└── yarn.lock                # Lock file for yarn