import React , {useState} from "react";

const Inputs = (props) => {
    const [valor,setValor] = useState("");
function ChangeInputValue(value) {
    setValor(value);
}

  return <div>
    <input value={valor} onChange={e=>ChangeInputValue(e.target.value)}/>
  </div>;
};

export default Inputs;
