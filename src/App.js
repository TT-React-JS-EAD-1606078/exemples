import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { Separator } from './components/Separator';
import { Title } from './components/Title';

export function App() {

  const handleClick = (event) => {
    console.log('Clicou no botão')
    console.log(event)
  }

  const handleDoubleClick = () => {
    console.log('Clicou duas vezes no botão')
  }


  return (
    <>
      <Separator text='Componente de título' />
      <Title name='fernando' surname='oliveira' />

      <Separator text='Componente de Card' />
      <Card name='Eduardo' surname='Franzen' description='Aluno do módulo de React JS' />

      <Separator text='Eventos' />
      <button id='botaoDaAula' onClick={handleClick} onDoubleClick={handleDoubleClick}>Click-me</button>

      <Separator text='Hooks - useState' />
      <Counter />

      <Separator text='Componente de Button' />
      <div className='buttonContainer'>
        <Button text='Criar usuário' />

        <Button text='Criar produto' variant='secondary' />

        <Button text='Criar carrinho' />
      </div>
    </ >
  );
}
