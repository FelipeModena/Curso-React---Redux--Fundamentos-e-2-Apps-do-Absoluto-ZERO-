import React from "react";

const ChildrenState = (props) => {
  const callback = props.callbackParent;
  return (
    <div>
      <button onClick={(_) => callback("super pai", 34)}>
        Aperte para alterar pai
      </button>
    </div>
  );
};

export default ChildrenState;
