import React, {useState} from "react";

import Count from "./Count";


function HW1() {

    const [value, setValue] = useState(0);
    const incrementValue = () => {
        if (value < 5) {
            setValue(value + 1);
        } else {
            setValue(0);
        }

    }
    return (
        <div>
            <Count countValue={value}
                   incrementValue={incrementValue}
            />
        </div>
    );
}

export default HW1;
