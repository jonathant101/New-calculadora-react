import React from 'react';
import './Botao.css';
export default function Botao({ nome, call, resut }) {
  const resutado = resut ? resut : '';

  return (
    <button onClick={(e) => call(nome)} className={`buttonGrid${resutado}`}>
      {' '}
      <span className="numbers">{nome}</span>
    </button>
  );
}
