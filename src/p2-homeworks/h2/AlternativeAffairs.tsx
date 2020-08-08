import React from "react";
import s from './Affairs.module.css'
import {AffairPriorityType} from "./HW2";

type AffairsPropsType = {
    data: AffairPriorityType
    deleteAffairs: Function
}



function AlternativeAffairs(props: AffairsPropsType) {

    return (
        <div>
            <ul className={s.alternativeAff}>

            </ul>
        </div>
    );
}

export default AlternativeAffairs;
