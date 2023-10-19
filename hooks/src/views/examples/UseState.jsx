import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
const UseState = (props) => {
  const [counter, setCounter] = useState(0);

  function raiseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }
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
        <button onClick={raiseCounter}>Aumentar contador</button>
        <button onClick={decreaseCounter}>Diminui contador</button>
      </div>
    </div>
  );
};

export default UseState;
