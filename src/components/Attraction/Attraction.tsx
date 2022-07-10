import React, {useEffect, useState} from "react"
import {AttractionEntity} from 'types'
import  "./Attraction.css"
import {Link} from "react-router-dom";
export const Attraction = () => {

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
                         <h2>Atrakcje</h2>
                         <div className="att-box">

                             {
                                 attData.slice(0,4).map((att) => (
                                     <div className="att-box_item" key={att.id}>
                                         <p className="att-box_title">{att.nameAttraction}</p>
                                         <img alt={att.nameAttraction} src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcT7XCRLzD5dQS9yPu2qiZKkU9KElJUBbgE4Qy0uIvPDijibWYjX9SeOQ3RLlULN9CR_"/>
                                         <p className="att-box_town">{att.town}</p>
                                         <Link to={`/${att.id}`}>Zobacz</Link>
                                         <button>LIKE</button>
                                         <p>Ilość serduszek: 2</p>
                                     </div>
                                 ))
                             }
                         </div>
                     </div>

                 </section>
            </>
            )}




