import React, { useState } from "react";
import {SwitchOn} from "./SwitchOn";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Some Name",
    message: "some text",
    time: "22:00",
};

function HW1() {
    const [state, setState] = useState<boolean>(false)
    return (
        <div>
            <hr/>
            <h2>{state.toString()}</h2>
            <SwitchOn setState={setState}/>

            {/*should work (должно работать)*/}

            {/*<Message*/}
            {/*    avatar={messageData.avatar}*/}
            {/*    name={messageData.name}*/}
            {/*    message={messageData.message}*/}
            {/*    time={messageData.time}*/}
            {/*/>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}
export default HW1;
