import React from "react";
import s from "./Header.module.css";

function Error404() {
    return (
        <div id={s.err404}>
            <div className={s.titleErr}>
                <h1>Error 404</h1>
            </div>
        </div>
    );
}

export default Error404;
