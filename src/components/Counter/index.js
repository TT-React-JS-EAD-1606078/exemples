import React, { useState } from "react";

export const Counter = () => {
  // [state, setState]
  const [count, setCount] = useState(1)

  const handleAdd = () => {
    console.log('Adicionar');
    setCount(count + 1)
  }

  console.log(count)

  return (
    <>
      <button onClick={handleAdd}>Add +</button>
      <h3>{count}</h3>
    </>
  )
}