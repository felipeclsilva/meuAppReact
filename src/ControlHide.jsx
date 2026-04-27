import { use, useState } from "react";

export default function ControlHide() {
  const [hide, setHide] = useState(false);

  return (
    <div>
      <h2>Seção 3</h2>
      <button
        style={{ display: "inline-block", marginRight: "8px" }}
        onClick={() => {
          setHide(!hide);
        }}
      >
        Alterne
      </button>
      {!hide && <p>Opção 1</p>}
      {hide && <p>Opção 2</p>}
      {hide ? <p>Opção 1</p> : <p>Opção 2</p>}
    </div>
  );
}
