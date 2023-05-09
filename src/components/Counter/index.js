import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(1)
  // [state, setState]

  const handleAdd = () => {
    console.log('Adicionar');
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleAdd}>Add +</button>
      <h3>{count}</h3>
    </>
  )
}