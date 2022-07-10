import {Header} from "../components/Header/Header";
import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";
import {AttractionSingle} from "../components/Attraction/AttractionSingle";


export const OneAttracitionView = () => {
    return (
        <>
            <Header title={"Strona głowna"}/>
            <AttractionSingle />
            <Footer/>
        </>
    );
}