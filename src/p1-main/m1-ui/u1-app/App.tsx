import React from "react";
import s from "./App.module.css";
import HW1 from "../../../p2-homeworks/h1/HW1";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import Message from "../../../p2-homeworks/h1/Message";
import Menu from "../../../p2-homeworks/h1/Menu";
import HW4 from "../../../p2-homeworks/h4/HW4";


function App() {
    let users = {
        name: 'Jo',
        age: 34,
        isDone: false
    }
    return (
        <div className={s.App}>
            <div>react homeworks:</div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
           {/*<Message/>*/}
           {/* <Menu title="Menu"/>*/}
            <HW4/>
        </div>
    );
}

export default App;
