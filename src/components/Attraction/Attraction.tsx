import React, {useEffect, useState} from "react"
import {AttractionEntity} from 'types'
import  "./Attraction.css"
import {Link} from "react-router-dom";

interface Props {
    category: string,
}

export const Attraction = (props: Props) => {

    const [attData, setAttData] = useState<AttractionEntity[] | null> (null)

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/attraction/")
            const data = await res.json()
            setAttData(data)
        })();
    }, [attData]);

    // console.log(attData)
    if (attData === null) {
        return <p>Ładowanie zasobów</p>
    }

    if(attData.length <= 0) {
        return <p>Aktualnie brak atrkacji - wróć później</p>
    }

    return (
             <>
                 <section className="att">
                     <div className="att-container">
                         <h2>{props.category}</h2>
                         {/*<p>Góry są piękne zobacz, gdzie warto je zobaczyć w Polsce</p>*/}
                         <div className="att-box">

                             {
                                 attData.slice(0,4).map((att) => (
                                     <div className="att-box_item" key={att.id}>
                                         <p className="att-box_cat">{props.category}</p>
                                         <img alt={att.nameAttraction} src={att.img}/>
                                         <p className="att-box_town">{att.town}</p>
                                         <p className="att-box_title">{att.nameAttraction}</p>

                                         <div className='att-box_like-box'>
                                             <i className="fa-solid fa-heart"></i>
                                             <p>{att.valueLike}</p>
                                         </div>
                                         <Link className="att-box_link" to={`/${att.id}`}>Zobacz</Link>
                                     </div>
                                 ))
                             }

                         </div>
                         <Link className="att-container_link" to={`/`}>Zobacz wszystkie</Link>
                     </div>


                 </section>
            </>
            )}




