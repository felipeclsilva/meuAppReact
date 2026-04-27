import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter renderizou");

  return (
    <>
      <h2>Seção 2</h2>
      <button onClick={() => setCount(count + 1)}>Contador: {count}</button>
    </>
  )
}