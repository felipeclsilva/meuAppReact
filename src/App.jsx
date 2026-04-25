import { use, useState } from 'react'

const Estilo = () => {
  return(
    <style>{`
      body {
        background-color: lightgray;
        font-family: Arial, sans-serif;
      }
    `}</style>
  )
}
 
const Titulo = () => {
  return(
    <div>
      <h1>Olá, Mundo</h1>
      <h2>Seção 1</h2>
    </div>
  )
}

const Footer = () => {
  return(
    <footer>footer</footer>
  )
}

const Card = ({ title }) => {
  return(
    <div style={{ border: '1px solid #00000038', padding: '16px', margin: '8px' }}>
      <span>{title}</span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis blanditiis totam, quae ipsa quasi odit ad quod quaerat possimus perferendis reprehenderit laboriosam vitae, dolore explicabo beatae fugit quis voluptatum?</p>
      <Footer />

    </div>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log('Counter renderizou');

  return (
    <>
      <h2>Seção 2</h2>
      <button onClick={() => setCount(count + 1)}>
        Contador: {count}
      </button>
    </>
  )
}

export function App() {
  const [hide, setHide] = useState(false);
  const [list, setList] = useState([
    { id: 1, label: 'Fazer café' },
    { id: 2, label: 'Fazer café' },
    { id: 3, label: 'Lavar a louça' },
    { id: 4, label: 'Limpar a casa' },
  ]);
  
  return (
    <>
      <Estilo />
      <Titulo />
      <Card title='Card 1'/>
      <Card title='Card 2'/>
      <Card title='Card 3'/>
      <Card title='Card 4'/>
      <Counter />

      <h2>Seção 3</h2>
      <button style={{ display: 'inline-block', marginRight: '8px'}} onClick={() => {setHide(!hide)}}>
        Alterne
      </button>
      {!hide && <p>Opção 1</p>}
      {hide && <p>Opção 2</p>}

      {hide
        ? <p>Opção 1</p>
        : <p>Opção 2</p>
      }

      <h2>Seção 4</h2>
      <input type="text" name="" id="" />
      <button>Adicionar</button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </>
  )
}
