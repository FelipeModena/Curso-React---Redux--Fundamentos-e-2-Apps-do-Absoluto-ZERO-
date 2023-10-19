import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const calcFactorial = (num) => {
  const n = parseInt(num);
  if (n > 170 || isNaN(n)) {
    return;
  }
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFactorial(n - 1) * n;
};
const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [status, setStatus] = useState(true);

  useEffect(
    function () {
      setFactorial(calcFactorial(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <div>
        <SectionTitle title="Ex. 1" />
        <div>
          <input
            className="input"
            type="number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <p>
            Fatorial:
            <span className="text">
              {factorial ? factorial : "Coloque valor valido ou menor que 170"}
            </span>
          </p>
        </div>
        <SectionTitle title="Ex. 2" />
        <div>
          <input
            className="input"
            type="text"
            onChange={(e) => setStatus(e.target.value)}
          />
          <p>
            Status:
            <span className="text">
              {isNaN(status) ? "Não é número" : status % 2 ? "Impar" : "Par"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
