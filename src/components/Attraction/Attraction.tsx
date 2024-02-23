import React, { useEffect, useState} from "react"
import {AttractionEntity, CategoryEntity} from 'types'
import  "./Attraction.css"
import {Link, useParams} from "react-router-dom";


interface Props {
    category: string;
    idCat: number;
}



export const Attraction = (props: Props) => {

    const [loading, setLoading] = useState(false)
    const [attData, setAttData] = useState<AttractionEntity[] | null> (null)
    const [oneCategory, setOneCategory] = useState<CategoryEntity | null>(null)
    // console.log(categoryData)
    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/attraction/${props.idCat}`)
            const data = await res.json()
            setAttData(data.attListRes);
            setOneCategory(data.oneCategory);
        })();
        setLoading(false)
    }, [loading]);

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



    if(attData.length <= 0) {
        return null
    }


    return (
             <>
                 <section className="att">
                     <div className="att-container">
                         <h2>{props.category.toUpperCase()}</h2>
                         <div className="att-box">

                             {

                                 attData.slice(0,4).map((att) => (
                                     <div className="att-box_item" key={att.id}>
                                         <p className="att-box_cat">{props.category}</p>
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

                             <Link className="att-container_link" to={`/${props.idCat}/`}>Zobacz wszystkie</Link>


                     </div>
                 </section>
            </>
            )}




