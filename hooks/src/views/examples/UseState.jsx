import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
const UseState = (props) => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Nome inicial...");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <div>
        <SectionTitle title="Ex. 1" />
        <div>
          <p>
            {" "}
            Valor do contador: <span className="text"> {counter}</span>
          </p>
        </div>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Aumentar contador
        </button>
        <button className="btn" onClick={() => setCounter(counter - 1)}>
          Diminui contador
        </button>
      </div>
      <div>
        <SectionTitle title="Ex. 2" />
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Nome: {name}</p>
      </div>
    </div>
  );
};

export default UseState;
