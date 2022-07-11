import {Nav} from "../components/Nav/Nav";
import {Footer} from "../components/Footer/Footer";
import {AttractionSingle} from "../components/Attraction/AttractionSingle";
import {Attraction} from "../components/Attraction/Attraction";

export const AttractionSingleView = () => {
    return (
        <>
            <Nav/>
            <AttractionSingle/>
            <Attraction category={"inne"}/>
            <Footer/>
        </>
    );
}