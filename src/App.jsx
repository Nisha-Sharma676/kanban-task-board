import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('kanbanTasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [taskInput, setTaskInput] = useState('')
  const [priority, setPriority] = useState('Medium')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    localStorage.setItem('kanbanTasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = () => {
    if (!taskInput.trim()) return

    const newTask = {
      id: Date.now(),
      title: taskInput.trim(),
      status: 'To Do',
      priority: priority,
    }

    setTasks([...tasks, newTask])
    setTaskInput('')
    setPriority('Medium')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ))
  }

  const saveEdit = (id) => {
    if (!editText.trim()) return

    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, title: editText.trim() }
        : task
    ))
    setEditingId(null)
  }

  const columns = ['To Do', 'In Progress', 'Done']

  return (
    <div className="app">
      <h1>Kanban Task Board</h1>

      <div className="task-form">
        <input
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          placeholder="Enter a new task..."
        />

        <select
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>

        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
        />
      </div>
      <div className="board">
        {columns.map(column => (
          <div className="column" key={column}>
            <h2>{column}</h2>

            {tasks
              .filter(task =>
                task.status === column &&
                task.title.toLowerCase().includes(searchText.toLowerCase())
              )
              .map(task => (
                <div
                  className={`task-card ${task.priority.toLowerCase()}`}
                  key={task.id}
                >
                  {editingId === task.id ? (
                    <>
                      <input
                        value={editText}
                        onChange={e => setEditText(e.target.value)}
                      />
                      <button onClick={() => saveEdit(task.id)}>
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p>{task.title}</p>
                      <small>Priority: {task.priority}</small>
                      <br />
                      <button onClick={() => {
                        setEditingId(task.id)
                        setEditText(task.title)
                      }}>
                        Edit
                      </button>
                    </>
                  )}

                  {column !== 'To Do' && (
                    <button onClick={() =>
                      moveTask(task.id, columns[columns.indexOf(column) - 1])
                    }>
                      ← Back
                    </button>
                  )}

                  {column !== 'Done' && (
                    <button onClick={() =>
                      moveTask(task.id, columns[columns.indexOf(column) + 1])
                    }>
                      Move →
                    </button>
                  )}

                  <button onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
