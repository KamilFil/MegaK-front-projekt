import {Nav} from "../components/Nav/Nav";
import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";
import {AttractionSingle} from "../components/Attraction/AttractionSingle";


export const OneAttracitionView = () => {
    return (
        <>
            <Nav/>
            <Attraction category={"Wszystkos"} />
            <Footer/>
        </>
    );
}