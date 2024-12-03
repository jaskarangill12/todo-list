import React from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
 
function App() {
  const [tasks, setTasks] = React.useState([]);
 
  // Add a new task
  const addTask = (taskText) => {
    if (!taskText.trim() || tasks.find((task) => task.text === taskText)) {
      alert('Task cannot be empty or duplicate!');
      return;
    }
    setTasks([...tasks, { text: taskText, completed: false }]);
  };
 
  // Clear all tasks
  const clearTasks = () => {
    setTasks([]);
  };
 
  // Toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
 
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <ToDoForm addTask={addTask} />
      <button className="clear-btn" onClick={clearTasks}>
        Clear All
      </button>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(index)}
              >
                {task.text}
              </td>
              <td>{task.completed ? 'Completed' : 'Pending'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
 
export default App;