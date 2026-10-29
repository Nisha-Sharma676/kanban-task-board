# Kanban Task Board

A simple and responsive task management web application built with React.js and Vite.

The application helps users organize tasks and track their progress through three stages: To Do, In Progress, and Done.

## Features

- **Add Tasks:** Create new tasks.
- **Edit Tasks:** Update existing task titles.
- **Delete Tasks:** Remove tasks when they are no longer needed.
- **Move Tasks:** Move tasks between the three Kanban columns.
- **Task Priorities:** Assign High, Medium, or Low priority.
- **Search Tasks:** Find tasks using the search field.
- **Local Storage:** Preserve tasks after refreshing the browser.
- **Responsive Interface:** Access the board on desktop and smaller screens.

## Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Hooks (`useState` and `useEffect`)
- Browser `localStorage`

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) on your computer.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Nisha-Sharma676/kanban-task-board.git
   ```

2. Open the project folder:

   ```bash
   cd kanban-task-board
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

## Project Structure

```text
kanban-task-board/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── Prompts.md
└── README.md
```

## Testing Checklist

- Add, edit, and delete tasks.
- Move tasks between columns.
- Check priority indicators.
- Search for tasks.
- Refresh the page and check saved tasks.
- Check the layout on a smaller screen.

## Live Demo: 
https://kanban-task-board-lake-alpha.vercel.app/

## Acknowledgement

AI tools were used as development assistance to understand React concepts, state management, and implementation approaches. The final project documentation should reflect the features actually implemented and tested.
