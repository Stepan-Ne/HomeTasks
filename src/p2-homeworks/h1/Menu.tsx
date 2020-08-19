import React, {MouseEvent, useState} from "react";

const styless = {
    margin: "40px auto",
    width: "200px",
    background: "skyBlue",
    padding: "10px",
}
type PropsType = {
    title: string
}

const Menu = (props: PropsType) => {

    const [collapsed, setCollapsed] = useState(false)
    const onCollapsedHandler = () => {
        collapsed ? setCollapsed(false) : setCollapsed(true);
    }

    return (
        <div style={styless} onClick={onCollapsedHandler}>
           <h2>{props.title}</h2>
            {!collapsed && <Accordion/>}
        </div>
    )
}
function Accordion() {
    return <div>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
    </div>

}

export default Menu;












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

