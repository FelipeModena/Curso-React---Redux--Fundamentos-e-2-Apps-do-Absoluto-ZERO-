import React from "react";

export default function FirstWithParam(props) {

  return (
    <div>
      <p>
        {props.name} {props.lastName}
      </p>
    </div>
  );
}
