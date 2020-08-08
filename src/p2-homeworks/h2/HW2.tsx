import React, {useState} from "react";
import Affairs from "./Affairs";


// types
export type AffairPriorityType = AffairType[]
export type AffairType = {
    _id: number
    name: string
    priority: string
};
export type FilterType = "all" | "high" | "middle" | "low";

// initial data
let defaultAffairs: AffairPriorityType = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];

// pure helper functions
export const filterAffairs = (affairs: AffairPriorityType, filter: FilterType): AffairPriorityType => {
    switch (filter) {
        case "high":
            return affairs.filter((a) => a.priority === "high");
            break;
        case "low":
            return affairs.filter((a) => a.priority === "low");
            break;
        case "middle":
            return affairs.filter((a) => a.priority === "middle");
            break;
        default:
            return affairs;

    }
}

export const deleteAffair = (affairs: AffairPriorityType, _id: number): AffairPriorityType => {
    let result = affairs.filter((a) => _id !== a._id);
    return result;
}

function HW2() {

    //hook for data
    const [affairs, setAffairs] = useState<AffairPriorityType>(defaultAffairs);
    //hook for filter
    const [filter, setFilter] = useState<FilterType>("all");
    //data after filtration
    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs*/}

            <hr/>
        </div>
    );
}

export default HW2;
