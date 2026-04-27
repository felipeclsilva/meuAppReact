import { use, useState } from "react";
import Estilo from "./estilos/Estilo.jsx";
import Titulo from "./secoes/Titulo.jsx";
import Footer from "./secoes/Footer.jsx";
import Card from "./secoes/Card.jsx";
import Counter from "./secoes/Counter.jsx";
import ControlHide from "./secoes/ControlHide.jsx";
import InputAdd from "./secoes/InputAdd.jsx";

export function App() {
  const [list, setList] = useState([
    { id: 1, label: "Fazer café", complete:false },
    { id: 2, label: "Fazer café", complete:false },
    { id: 3, label: "Lavar a louça", complete:false },
    { id: 4, label: "Limpar a casa", complete:false },
  ])

  return (
    <>
      <Estilo />
      <Titulo />
      <Card title="Card 1" />
      <Card title="Card 2" />
      <Card title="Card 3" />
      <Card title="Card 4" />
      <Counter />
      <ControlHide />
      <InputAdd
        onAdd={(value) => {
          setList([
            ...list,
            { id: (list.length + 1).toString(), complete: false, label: value }
          ])
        }}
      />

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>
            {listItem.label}

            {listItem.complete ? '✅' : ''}

            <button style={{marginLeft: '10px'}} 
              onClick={() => {
                setList([
                  ...list.map(item => ({
                    ...item, 
                    complete: item.id === listItem.id ? true : item.complete
                  }))
                ])
              }}
            >
              Concluir
            </button>

            <button style={{marginLeft: '10px'}} onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>
              Romover
            </button>

          </li>
        ))}
      </ol>
    </>
  );
}
