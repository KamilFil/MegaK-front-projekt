import {Nav} from "../components/Nav/Nav";
import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";
import {AddForm} from "../components/common/AddForm";


export const AttractionAdd = () => {
    return (
        <>
            <Nav/>
            <AddForm/>
            <Attraction category={"Wszystkos"} />
            <Footer/>
        </>
    );
}