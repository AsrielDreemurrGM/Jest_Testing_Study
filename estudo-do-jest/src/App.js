import { useState } from 'react';

import './styles/index.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [temporaryTask, setTemporaryTask] = useState();

  function addTask() {
    setTasks([temporaryTask, ...tasks]);
    setTemporaryTask('');
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='formWrapper'>
          <input
            data-testid="task-input"
            className='input'
            type='text'
            placeholder='Digite uma tarefa aqui'
            value={temporaryTask}
            onChange={evento => setTemporaryTask(evento.target.value)}
          />
          <button
            data-testid="add-task-button"
            className='addButton'
            onClick={addTask}
            type='button'
          >
            Adicionar
          </button>
        </div>
        <ul className='taskList'>
          {tasks.map(task => (
            <li key={task} className='taskList__Item' >{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
