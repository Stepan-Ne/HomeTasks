import React, {FormEvent} from "react";

type PropsType = {
    countValue: number
    incrementValue: () => void
    resetValue: () => void
    flag: boolean
}
const count = {
    borderRadius: "5px",
    backgroundColor: "#f2f2f2",
    padding: "20px",
    maxWidth: "200px",
};
const value = {
    fontSize: "2rem",
    border: "1px solid black",
    padding: "5px",
};
const buttons = {
    border: "1px solid black",
    marginTop: "2px",
    padding: "10px"
};
const button = {
    border: "1px solid black",
    padding: "10px",
    borderRadius: "2px",
    display: "inline-block",
    marginLeft: "20px"
};
const flagStyle = {
    color: "orange",
    fontSize: "2.5rem",
    border: "1px solid black",
    padding: "5px",
};

const Count: React.FC<PropsType> = (props) => {

    const increment = () => {
        props.incrementValue();
    };
    const reset = () => {
        props.resetValue();
    };
    const onChangeValueHandler = (e: FormEvent<HTMLDivElement>) => {
        console.log(e.currentTarget);
    };

    return <div style={count}>

        <div style={props.flag ? flagStyle : value} onChange={onChangeValueHandler}>
            {props.countValue}
        </div>
        <div style={buttons}>
            <div style={button}>
                <button disabled={props.flag} onClick={increment}>inc</button>
            </div>
            <div style={button}>
                <button disabled={!props.flag} onClick={reset}>reset</button>
            </div>
        </div>
    </div>
};

export default Count;