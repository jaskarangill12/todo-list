import React, { useState } from 'react';
 
function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
 
  const handleAddTask = () => {
    addTask(taskText); // Pass the task to App
    setTaskText('');   // Clear the input field
  };
 
  return (
    <div className="form-container">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
 
export default ToDoForm;