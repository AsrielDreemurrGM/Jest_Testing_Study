import { useState } from 'react';

import './styles/index.css'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefaTemp, setTarefaTemp] = useState();

  function adicionarTarefa() {
    setTarefas([tarefaTemp, ...tarefas]);
    setTarefaTemp('');
  }

  return (
    <div className='container'>
      <div className='formWrapper'>
        <input
          className='input'
          type='text'
          placeholder='Digite uma tarefa aqui'
          value={tarefaTemp}
          onChange={evento => setTarefaTemp(evento.target.value)}
        />
        <button className='addButton' onClick={adicionarTarefa} type='button' >Adicionar</button>
      </div>
      <ul className='taskList'>
        {tarefas.map(tarefa => (
          <li className='taskList__Item' >{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
