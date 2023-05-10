import { useState } from 'react'
import { Button } from '../Button'
import './styles.css'

export const ControlledInput = () => {
  const [num1, setNum1] = useState(2)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState()

  const handleInputNum1Change = (event) => {
    setNum1(event.target.value)
  }

  const handleInputNum2Change = (event) => {
    setNum2(event.target.value)
  }

  const handleReset = () => {
    setNum1(0)
    setNum2(0)
    setResult(0)
  }

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2))
  }

  const handleRemove = () => {
    setResult(Number(num1) - Number(num2))
  }

  const handleMultiply = () => {
    setResult(Number(num1) * Number(num2))
  }

  return (
    <div className='inputsContainer'>
      <div className='inputs'>
        <label htmlFor="num1">Num 1</label>
        <input name='num1' value={num1} onChange={handleInputNum1Change} type='number' />

        <label htmlFor="num2">Num 2</label>
        <input name='num2' value={num2} onChange={handleInputNum2Change} type='number' />
      </div>

      <div className='inputs'>
        <div className='inputs'>
          <div>
            <Button variant='secondary' text='Somar' onClick={handleAdd} />

            <Button variant='secondary' text='Subtrair' onClick={handleRemove} />

            <Button variant='secondary' text='Multiplicar' onClick={handleMultiply} />
          </div>

          <Button text='Reset' onClick={handleReset} />
        </div>

        <strong>Resultado: {result}</strong>
      </div>
    </div>
  )
}