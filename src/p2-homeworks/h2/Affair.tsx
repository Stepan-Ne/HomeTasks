import React from "react";
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: Function
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)};

    return (
        <div>
            {props.affair.name}

            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
