import React from "react";
import './Button.css'

function Button(props){
    const title =props.title;
    return(
        <button>{title}</button>
    )
}
export default Button;