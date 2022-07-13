import React, { useEffect, useState} from "react"
import {AttractionEntity} from 'types'
import  "./Attraction.css"
import {Link} from "react-router-dom";
import {Button} from "reactjs-popup/dist/stories/components";

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




    const handleSubmit = async (e:any) => {
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
        return <p>Ładowanie zasobu</p>
    }

    if(attData.length <= 0) {
        return <p>Aktualnie brak atrkacji - wróć później</p>
    }

    return (
             <>
                 <section className="att">
                     <div className="att-container">
                         <h2>{props.category}</h2>
                         <div className="att-box">

                             {
                                 attData.slice(0,4).map((att) => (
                                     <div className="att-box_item" key={att.id}>
                                         <p className="att-box_cat">{props.category}</p>
                                         <img alt={att.nameAttraction} src={att.img}/>
                                         <p className="att-box_town">{att.town}</p>
                                         <p className="att-box_title">{att.nameAttraction}</p>

                                         <div className='att-box_like-box'>
                                             <button className="fa-solid fa-heart" id={att.id} onClick={handleSubmit}></button>
                                             <p>{att.valueLike}</p>
                                         </div>

                                         <Link className="att-box_link" to={`/att/${att.id}`}>Zobacz</Link>
                                     </div>
                                 ))
                             }

                         </div>
                         <Link className="att-container_link" to={`/`}>Zobacz wszystkie</Link>
                     </div>
                 </section>
            </>
            )}




