import React from "react";

import First from "./components/basic/First";
import FirstWithParam from "./components/basic/FirstWithParam";
import RandomNumber from "./components/basic/RandomNumber";
import Card from "./components/generic/Card";
import Family from "./components/nest/Family";
import Member from "./components/nest/Member";
import ListStudents from "./components/listing/ListStudents";
import ListProducts from "./components/listing/ListProducts";
import ParentState from "./state/ParentState";
import Inputs from "./components/formsState/Inputs";
import Counter from "./components/counter/Counter";

export default function App() {
  return (
    <div>
      <h1>Fundamentos React curso </h1>

      <Card title="Projeto Contador" color="pink">
        <Counter numeroInicial={1}/>
      </Card>
      <Card title="Componente controlado">
        <Inputs/>
      </Card>
      <Card title="Estados de valores de filho para pai" color="orange">
        <ParentState />
      </Card>
      <Card title="Desafio: Lista de produtos" color="purple">
        <ListProducts />
      </Card>{" "}
      <Card title="Listagem de alunos" color="purple">
        <ListStudents />
      </Card>
      <Card title="Componente com filhos" color="gray">
        <Family lastName="Silva">
          <Member name="João" />
          <Member name="leticia" />
          <Member name="Claudia" />
        </Family>
      </Card>
      <Card title="Componente Random Number">
        <RandomNumber min={23} max={100} />
      </Card>
      <Card title="Componente primeiro com parametro" color="blue">
        <FirstWithParam name="felipe" tanto="sadsa" />
      </Card>
      <Card title="Componente primeiro" color="green">
        <First />
      </Card>
    </div>
  );
}
