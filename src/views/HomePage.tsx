import {Header} from "../components/Header/Header";
import {Attraction} from "../components/Attraction/Attraction";
import {Footer} from "../components/Footer/Footer";


export const HomePage = () => {
    return (
        <>
            <Header title={"Strona głowna"}/>
            <Attraction/>
            <Attraction/>
            <Footer/>
        </>
    );
}