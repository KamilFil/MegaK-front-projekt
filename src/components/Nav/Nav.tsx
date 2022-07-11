import React from "react";
import  "./Nav.css"
import {Link} from "react-router-dom";


export const Nav = () => {
    return (
        <>
            <nav className='nav-menu'>
                <div className="nav-menu_brand">
                    <img className="nav-menu_img" src="/img/swiat-atrakcji-logo.png" />

                </div>
                <ul className="nav-menu_list">
                    <li className="nav-menu_list-item">
                        <Link className="nav-menu_link" to={"/"}>Strona główna</Link>
                    </li>
                    <li className="nav-menu_list-item">
                        <Link className="nav-menu_link" to={"/add/"}>Dodaj atrakcje</Link>
                    </li>
                    <li className="nav-menu_list-item">
                        <Link className="nav-menu_link" to={"/zaloguj/"}>Zaloguj</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}