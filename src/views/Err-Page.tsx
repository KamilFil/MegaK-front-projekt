
import {Footer} from "../components/Footer/Footer";
import {Nav} from "../components/Nav/Nav";
import {Link} from "react-router-dom";

export const ErrPage = () => {

    return (
        <>
            <Nav/>
            <img src={"/"} alt={""}/>
                <h1>Błąd 404 - Nie ma takiej strony</h1>
            <Link to={"/"}>Wróć na stronę główną</Link>
            <Footer/>
        </>
    );
}