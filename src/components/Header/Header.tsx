import React from "react";
import {Nav} from "../Nav/Nav";
import './Header.css'
import {Link} from "react-router-dom";


interface Props {
    title: string,
}

export const Header = (props: Props) => {

    return (
        <>
            <Nav/>
            <header className="header">
                <img src="/img/swiat-atrakcji-banner.jpg" alt={"d"}/>
                    <div className="header_wrap">
                        <div className="header_wrap-main">
                            <h1>{props.title}</h1>
                            <p>Najpiękniejsze miejsca na Ziemii w jednym miejscu</p>
                            <Link className="header_wrap-link" to={"/add"}>Dodaj atrakcje</Link>
                        </div>
                    </div>
            </header>
        </>
    )
}