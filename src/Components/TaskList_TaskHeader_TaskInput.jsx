import { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskList_TaskHeader_TaskInput.css';

const TaskList_TaskHeader_TaskInput = ({ style }) => {
    const [tasks, setTasks] = useState([
      { id: 1, text: 'Buy groceries', completed: false, starred: false },
      { id: 2, text: 'Finish project report', completed: false, starred: true },
      { id: 3, text: 'Call the bank', completed: false, starred: false },
      { id: 4, text: 'Schedule dentist appointment', completed: false, starred: false },
      { id: 5, text: 'Plan weekend trip', completed: false, starred: false },
      { id: 6, text: 'Read a book', completed: true, starred: false },
      { id: 7, text: 'Clean the house', completed: true, starred: false },
      { id: 8, text: 'Prepare presentation', completed: true, starred: false },
      { id: 9, text: 'Update blog', completed: true, starred: false }
    ]);
  
    const [newTask, setNewTask] = useState('');
  
    const handleAddTask = () => {
      if (newTask.trim()) {
        setTasks([...tasks, {
          id: tasks.length + 1,
          text: newTask,
          completed: false,
          starred: false
        }]);
        setNewTask('');
      }
    };
  
    const toggleComplete = (taskId) => {
      setTasks(tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
    };
  
    const toggleStar = (taskId) => {
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, starred: !task.starred } : task
      ));
    };
  
    return (
      <div className="task-list-container" style={style}>
        <div className="task-header">
          <div className="header-label">
            <span>To Do</span>
            <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI5" alt="caret" />
          </div>
        </div>
  
        <div className="task-input-section">
          <div className="input-container">
            <h2>Add A Task</h2>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task"
              className="task-input"
            />
            <div className="input-controls">
              <div className="icon-group">
                <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI6" alt="notification" />
                <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI7" alt="repeat" />
                <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI8" alt="calendar" />
              </div>
              <button className="add-task-btn" onClick={handleAddTask}>ADD TASK</button>
            </div>
          </div>
        </div>
  
        <div className="tasks-section">
          <h3 className="section-header">To Do</h3>
          {tasks.filter(task => !task.completed).map(task => (
            <div key={task.id} className="task-item">
              <div className="task-content">
                <div className="checkbox" onClick={() => toggleComplete(task.id)}>
                  <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI9" alt="checkbox" />
                </div>
                <span>{task.text}</span>
              </div>
              <img 
                src={task.starred ? "https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI_" : "https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOI-"}
                alt="star"
                className="star-icon"
                onClick={() => toggleStar(task.id)}
              />
            </div>
          ))}
  
          <h3 className="section-header">Completed</h3>
          {tasks.filter(task => task.completed).map(task => (
            <div key={task.id} className="task-item completed">
              <div className="task-content">
                <div className="checkbox" onClick={() => toggleComplete(task.id)}>
                  <img src="https://dashboard.codeparrot.ai/api/assets/Z4fyaBgaGNOSvOJA" alt="checked" />
                </div>
                <span>{task.text}</span>
              </div>
              <img 
                src={task.starred ? "https://dashboard.codeparrot.ai/api/assets/Z4f1RxgaGNOSvOJB" : "https://dashboard.codeparrot.ai/api/assets/Z4f1RxgaGNOSvOJC"}
                alt="star"
                className="star-icon"
                onClick={() => toggleStar(task.id)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

TaskList_TaskHeader_TaskInput.propTypes = {
    style: PropTypes.object, // Define the prop type as an object
};

TaskList_TaskHeader_TaskInput.defaultProps = {
  style: {}
};

export default TaskList_TaskHeader_TaskInput;
