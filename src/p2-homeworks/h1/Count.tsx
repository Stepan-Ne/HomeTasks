import React, {MouseEvent, useState} from "react";

type PropsType = {
    countValue: number
    incrementValue: ()=> void
}
const count = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    maxWidth: "200px",
}
const value = {
    fontSize: "2rem",
    border: "1px solid black",
    padding: "5px",
}
const buttons = {
    border: "1px solid black",
    marginTop: "2px",
    padding: "10px"
}


const Count: React.FC<PropsType> = (props) => {

    const increment = () => {
        props.incrementValue();
    }

    return <div style={count}>

        <div style={value}>
            {props.countValue}
        </div>
        <div style={buttons}>
            <button onClick={increment}>inc</button>
            <button>reset</button>
        </div>
    </div>
}

export default Count;