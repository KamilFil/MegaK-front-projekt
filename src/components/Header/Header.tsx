import React from "react";
import {Link} from "react-router-dom";

interface Props {
    title:string,
}

export const Header = (props: Props) => {
    return (
        <>
            <nav>
                <h1>{props.title}</h1>
                <ul>
                <Link to={"/add/"}>Dodaj atrakcje</Link>
                <Link to={"/kontakt/"}>Kontakt</Link>
                <Link to={"/zaloguj/"}>Zaloguj</Link>
                </ul>
            </nav>
        </>
    )
}