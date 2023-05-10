import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Counter } from './components/Counter';
import { Separator } from './components/Separator';
import { Text } from './components/Text';
import { Title } from './components/Title';
import { ControlledInput } from './components/ControlledInput';

const courses = [
  { name: 'JS', instructor: 'Sabino', enable: true },
  { name: 'CSS', instructor: 'Cicero', enable: true },
  { name: 'JS/CSS Pro', instructor: 'Sabino', enable: true },
  { name: 'React JS', instructor: 'Luciel', enable: true },
  { name: 'MySQL', instructor: 'Cicero', enable: false }
]

export function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    console.log('Clicou no botão')
    console.log(event)
  }

  const handleDoubleClick = () => {
    console.log('Clicou duas vezes no botão')
  }

  const handleAddCount = () => setCount(count + 1)

  const handleResetCount = () => setCount(0)

  function handleRemoveCount() {
    setCount(count - 1)
  }

  useEffect(() => {
    console.log('Use Effect')
    // setCount(count + 1)
  }, [count])

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

      <Separator text='Atividade - Contador' />

      <h3>{count}</h3>

      <div className='buttonContainer'>
        <Button text='Somar' onClick={handleAddCount} />

        <Button text='Zerar' variant='secondary' onClick={handleResetCount} />

        <Button text='Subtrair' onClick={handleRemoveCount} />
      </div>

      <Separator text='JSX - Expressões - Condicionais' />

      <div>
        {true ? 'Verdadeiro' : false} <br />

        {true && 'Verdadeiro'} <br />

        {'Verdadeiro' || 'Falso'} <br />

        {true ? <Button text='Verdadeiro' /> : <Button text='Falso' variant='secondary' />} <br />

        {false ? <Button text='Verdadeiro' /> : null}
      </div>

      <Separator text='JSX - Map' />
      <div>
        <ul>
          {courses.map((course) => (
            <li key={course.name}>
              {course.enable ? (
                <strong>
                  {course.name} - {course.instructor}
                </strong>
              ) : (
                <del>{course.name} - {course.instructor}</del>
              )}
            </li>
          )
          )}
        </ul>
      </div>

      <Separator text='Children' />
      <Text>
        <strong>
          Conteúdo do componente
        </strong>
      </Text>

      <Separator text='Input controlado' />
      <ControlledInput />
    </>
  );
}
