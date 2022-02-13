import React from 'react'
import './style.css'

const Form = () => {
  return (
    <div className="form">
      <label className="form-label">
        Criador da Tarefa
        <input type="text" />
      </label>
      <label className="form-label">
        titulo da tarefa
        <input type="text" />
      </label>
      <label className="form-label">
        tarefa
        <input type="text" />
      </label>
      <button>Gerar Tarefa</button>
    </div>
  )
}

export default Form