import React, {useState} from "react";

import Count from "./Count";


function HW1() {
    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState(0);
    const maxValue = 4;
    const incrementValue = () => {
       if (value <= maxValue) {
           setValue(value + 1);
       }
       if (value === maxValue) {
           setFlag(true);
           return;
       }
    };
    const resetValue = () => {
        setValue(0);
        setFlag(false);
    };
    return (
        <div>
            <Count countValue={value}
                   flag={flag}
                   resetValue={resetValue}
                   incrementValue={incrementValue}
            />
        </div>
    );
}

export default HW1;
