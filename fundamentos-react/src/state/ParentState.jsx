import React, { useState } from "react";
import ChildrenState from "./ChildrenState";
const ParentState = (_) => {
  const [name, setName] = useState("generico");
  const [age, setAge] = useState(34);
  function getCallBack(nameParam, ageParam) {
    setName(nameParam);
    setAge(ageParam);
  }

  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <div>
        <ChildrenState callbackParent={getCallBack} />
      </div>
    </div>
  );
};

export default ParentState;
