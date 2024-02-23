import {Nav} from "../components/Nav/Nav";
import {Footer} from "../components/Footer/Footer";
import {AttractionSingle} from "../components/Attraction/AttractionSingle";
import {AddForm} from "../components/common/AddForm";

export const AttractionSingleView = () => {
    return (
        <>
            <Nav/>
            <AttractionSingle/>

            <AddForm/>
            <Footer/>
        </>
    );
}