import { use, useState } from "react";
import Estilo from "./estilos/Estilo.jsx";
import Titulo from "./secoes/Titulo.jsx";
import Footer from "./secoes/Footer.jsx";
import Card from "./secoes/Card.jsx";
import Counter from "./secoes/Counter.jsx";
import ControlHide from "./secoes/ControlHide.jsx";

export function App() {
  const [value, setValue] = useState("");
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
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <button
        onClick={() =>
          setList([...list, { id: (list.length + 1).toString(), label: value }])
        }
      >
        Adicionar
      </button>

      <ol>
        {list.map((listItem) => (
          <li key={listItem.id}>{listItem.label}</li>
        ))}
      </ol>
    </>
  );
}
