
import React from "react";
export default function Form(props){    
    return(
            <input type={props.type} value={props.value} placeholder={props.placeholder} style={props.style} onChange={props.fun}></input>
    )
}