import React, {useEffect, useState} from "react";
import {Nav} from "../Nav/Nav";
import './Header.css'
import {Link} from "react-router-dom";
import { AttractionEntity } from "types";

interface Props {
    title: string,
}

export const Header = (props: Props) => {

    const [favAtt, setFavAtt] = useState<AttractionEntity[] | null>(null)

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/attraction/")
            const data = await res.json()
            setFavAtt(data)
        })();
    }, []);

    if (favAtt === null) {
        return <p>Ładowanie zasobów</p>
    }

//@Todo Do sprawdzenia
        const reduce = favAtt.reduce<number>((curr, prev) => {
            return prev.valueLike + curr
        }, 0)

    console.log(reduce)

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
                        {/*<div className="header_wrap-favorite">*/}

                        {/*</div>*/}
                    </div>
            </header>
        </>
    )
}