import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";
import {AddForm} from "../components/common/AddForm";
import {Header} from "../components/Header/Header";
import "./HomePage.css";
import React, {useEffect, useState} from "react";
import { AttractionEntity,CategoryEntity } from "types";

<script src="https://kit.fontawesome.com/b4c3c17937.js" crossOrigin="anonymous"></script>

export const HomePage = () => {
    const [loading, setLoading] = useState(false)
    const [attData, setAttData] = useState<AttractionEntity[] | null> (null)
    const [attCat, setAttCat] = useState<CategoryEntity[] | null> (null)

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/attraction/")
            const data = await res.json()
            setAttData(data.attListRes)
            setAttCat(data.allCategory)
        })();
        setLoading(false)
    }, [loading]);

    if(attCat === null) {
        return <p>Brak atrkacji </p>
    }


    return (
        <>
            <Header title="Świat Atrakcji"/>
            {
                attCat.map(cat => <Attraction key={cat.idCategory} category={cat.name} idCat={cat.idCategory}/>)
            }
            <AddForm/>
            <Footer/>
        </>
    );
}