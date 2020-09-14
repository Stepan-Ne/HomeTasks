import React from "react";
import {HashRouter, NavLink} from "react-router-dom";
import s from "./pages/Header.module.css";
import Routes from "./Routes";

function Header() {
    return (
        <div className={s.navbar}>
            <input type="checkbox" id="check" className={s.check}/>
            <label htmlFor="check">
                <i className={"fas fa-bars"} id={s.btn}></i>
                <i className={"fas fa-times"} id={s.cancel}></i>
            </label>
            <div className={s.sidebar}>
                <header>React HomeWorks</header>
                <ul>
                    <li><NavLink activeClassName={s.active}
                        to={"/pre-junior"}><i className={"fas fa-link"}></i>PreJunior</NavLink></li>
                    <li><NavLink activeClassName={s.active}
                        to={"/junior"}><i className={"fas fa-link"}></i>Junior</NavLink></li>
                    <li><NavLink activeClassName={s.active}
                        to={"/junior-plus"}><i className={"fas fa-link"}></i>JuniorPlus</NavLink></li>
                    <li><NavLink activeClassName={s.active}
                        to={"/overview"}><i className={"fas fa-stream"}></i>Overview</NavLink></li>
                    <li><NavLink activeClassName={s.active}
                        to={"/contact"}><i className={"fas fa-envelope"}></i>Contact</NavLink></li>
                </ul>
            </div>
            <section>
                <Routes/>
            </section>
        </div>
    );
}

export default Header;
