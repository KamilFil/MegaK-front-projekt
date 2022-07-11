import {Nav} from "../components/Nav/Nav";
import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";
import {AddForm} from "../components/common/AddForm";
import {Header} from "../components/Header/Header";
import "./HomePage.css";
import {useState} from "react";
import { AttractionEntity } from "../../../be/types/attraction/attraction-entity";

<script src="https://kit.fontawesome.com/b4c3c17937.js" crossOrigin="anonymous"></script>


export const HomePage = () => {



    return (
        <>
            {/*<Nav/>*/}
            <Header title="Świat Atrakcji"/>
            <Attraction category={"Miasto"}/>
            <Attraction category={"Góry"}/>
            <Attraction category={"Jeziora"}/>
            <Attraction category={"Natura"}/>
            <AddForm/>
            <Footer/>
        </>
    );
}