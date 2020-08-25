import React, {MouseEvent, useState} from "react";
type RaitingPropsType = {
    title: string
}
const Raiting: React.FC<RaitingPropsType> = (props) => {
    const [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)
    return <div>
        <h2>{props.title}</h2>
        <Star value={value >= 1} onClick={() => setValue(1)}/>
        <Star value={value >= 2} onClick={() => setValue(2)}/>
        <Star value={value >= 3} onClick={() => setValue(3)}/>
        <Star value={value >= 4} onClick={() => setValue(4)}/>
        <Star value={value >= 5} onClick={() => setValue(5)}/>
        <button onClick={() => setValue(0)}>Reset</button>
    </div>
}



export default Raiting;

type StarPropsType= {
    onClick: () => void
    value: boolean
}
function Star(props: StarPropsType) {
    return (
     <span onClick={() => props.onClick()}>{props.value ? <b>Star</b> : "Star"} </span>
    )
}





//--------------------------------
type PropsUserType = {
    users: {
        name: string
        age: number
        isDone: boolean
    }
    title: string
}

 const User: React.FC<PropsUserType> = ({title, ...props}) => {
    const {name, age, isDone} = props.users;
    return <div>
        {name}
        {age}
        {title}
    </div>
}

