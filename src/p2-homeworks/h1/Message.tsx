import React, {MouseEvent, useState} from "react";

const styless = {
    margin: "40px auto",
    width: "200px",
}
type PropsType = {
  //  on: boolean
}

const Message = (props: PropsType) => {

    let [on, setOn] = useState(false);
    const onChangeHadler = (e: MouseEvent<HTMLDivElement>) => {
        on = true;
    }

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "5px",
        display: "inline-block",
        background: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "5px",
        display: "inline-block",
        background: on ? "white" : "red"
    }
    const indicatorStyle = {
        height: "20px",
        width: "20px",
        borderRadius: "10px",
        marginLeft: "5px",
        background: on ? "green" : "red",
        border: "1px solid black",
        display: "inline-block"
    }
    return (
        <div>
            <div style={onStyle} onClick={() => setOn(true)}>On</div>
            <div style={offStyle} onClick={() => setOn(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
export type CourseType = {
    title: string
    price: number
}
const predicate = (p: number) => {
    return p <= 150;
}
const courses = [
    {title: "css", price: 100},
    {title: "JS", price: 150},
    {title: "React", price: 170}
]
export function chipCourses(value: Array<CourseType>) {
    return value.filter((v) => predicate(v.price) )
}

console.log(chipCourses(courses))

export default Message;












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

