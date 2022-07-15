import {Nav} from "../components/Nav/Nav";
import {Footer} from "../components/Footer/Footer";
import {useEffect, useState} from "react";
import { AttractionEntity, CategoryEntity } from "types";
import {Link, useParams} from "react-router-dom";
import {Attraction} from "../components/Attraction/Attraction";
import {ErrPage} from "./Err-Page";

export const AttractionCatView = () => {
    const [loading, setLoading] = useState(false)
    const [attData, setAttData] = useState<AttractionEntity[] | null> (null)
    const [attCat, setAttCat] = useState<CategoryEntity | null> (null)
    let {id}  =  useParams();

    useEffect(() => {

        (async () => {
            const res = await fetch(`http://localhost:3001/attraction/${id}`)
            const data = await res.json()
            console.log(data)

            setAttData(data.attListRes)
            setAttCat(data.oneCategory)
        })();
        setLoading(false)
    }, [loading]);

    if(attCat === null) {
       return <ErrPage/>
    }

    const handleSubmit = async (e:any) => {
        setLoading(true)
        try {
            await fetch(`http://localhost:3001/attraction/like/${e.target.id}`,{
                method:'PATCH',
                headers:{
                    Accept: 'application/json'
                }
            })

        } catch (e){
            console.log(e)
        }

    }
    if (attData === null) {
        return <p>Ładowanie zasobów</p>
    }
    return (
        <>
            <Nav/>
            <>
                <section className="att">
                    <div className="att-container">
                        <h2>{attCat.name}</h2>
                        <div className="att-box">

                            {
                                attData.map((att) => (
                                    <div className="att-box_item" key={att.id}>
                                        {/*<p className="att-box_cat">{props.category}</p>*/}
                                        <img alt={att.nameAttraction} src={att.img}/>
                                        <p className="att-box_town">{att.town}</p>
                                        <p className="att-box_title">{att.nameAttraction}</p>

                                        <div className='att-box_like-box'>
                                            <button className="fa-solid fa-heart" id={att.id} onClick={handleSubmit}> </button>
                                            <p>{att.valueLike}</p>
                                        </div>

                                        <Link className="att-box_link" to={`/att/${att.id}`}>Zobacz</Link>
                                    </div>
                                ))
                            }

                        </div>

                        <Link className="att-container_link" to={`/`}>Strona Główna</Link>


                    </div>
                </section>
            </>
            <Footer/>
        </>
    );
}