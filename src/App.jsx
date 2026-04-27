import { use, useState } from "react";
import Estilo from "./Estilo.jsx";
import Titulo from "./Titulo.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Counter from "./Counter.jsx";
import ControlHide from "./ControlHide.jsx"

export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: 1, label: "Fazer café" },
    { id: 2, label: "Fazer café" },
    { id: 3, label: "Lavar a louça" },
    { id: 4, label: "Limpar a casa" },
  ]);

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

      <h2>Seção 4</h2>
      <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => setList([...list, {id: (list.length + 1).toString(), label: value}])}>Adicionar</button>

      <ol>
        {list.map((listItem) => (
              <li key={listItem.id}>
                {listItem.label}
              </li>
            )
          )
        }
      </ol>
    </>
  );
}
