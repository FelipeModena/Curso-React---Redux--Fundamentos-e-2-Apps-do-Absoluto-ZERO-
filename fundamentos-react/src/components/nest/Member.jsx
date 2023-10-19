import React from "react";


export default function Member(props) {
    const name = props.name;
    const lastName = props.lastName;

    return (
        <div>
            <p>{name} <strong>{lastName}</strong></p>
        </div>
    )
}