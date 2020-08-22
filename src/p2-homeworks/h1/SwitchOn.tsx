import React, {useState} from "react";


type StyleType = {
    border: string,
    padding: string,
    margin: string,
    background?: string
}
type PropsType = {
    setState: (value: boolean) => void
}
export function SwitchOn(props: PropsType) {
    const [value, setValue] = useState<boolean>(false);
    let switchStyle = {
        border: "1px solid black",
        padding: "2px",
        margin: "2px",
        background: value ? "white" : "red"
    }
    let onStyle = {
        border: "1px solid black",
        padding: "2px",
        margin: "2px",
        background: value ? "green" : "white"
    }
    let indiStyle = {
        border: "1px solid black",
        padding: "2px",
        margin: "2px",
        background: value ? "green" : "red"
    }

    function oN(value: boolean) {
        setValue(value)
        props.setState(value)
    }
    function switchOn(value: boolean) {
        setValue(value)
        props.setState(value)
    }

    return <div>
        <span style={onStyle} onClick={() => oN(true)}>On</span>
        <span style={switchStyle} onClick={() => switchOn(false)}>Switch</span>
        <span style={indiStyle}>indicator</span>
    </div>
}
