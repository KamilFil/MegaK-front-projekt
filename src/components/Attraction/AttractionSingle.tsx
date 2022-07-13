import React, {useEffect, useState} from 'react'
import {AttractionEntity} from 'types'
import {useParams} from "react-router-dom";
import "./AttractionSingle.css"
import {ErrPage} from "../../views/Err-Page";
export const AttractionSingle = () => {

    const [att, setAtt] = useState<AttractionEntity | null>(null)
    let {id} = useParams()
    useEffect(()=> {

        (async () => {
            const res = await fetch(`http://localhost:3001/attraction/${id}`)
            const data = await res.json()
            setAtt(data)
        })()
    },[att])

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

    if(att === null) {
        return <p>Ładowanie zasobów..</p>
    }

    return (
        <section className="one-attraction">
            <div className="one-attraction_container">
                <div className='one-attraction_box'>
                    <div className='one-attraction_box-info'>
                    <h1>{att.nameAttraction}</h1>
                    <p>{att.town}</p>
                        <div className='att-box_like-box'>
                            <button className="fa-solid fa-heart" id={att.id} onClick={handleSubmit}></button>
                            <p>{att.valueLike}</p>
                        </div>
                        <h2>{att.nameAttraction} - Opis</h2>
                        <p>{att.text}</p>
                    </div>
                    <div className='one-attraction_box-img'>
                        <img src={att.img} alt={att.nameAttraction}/>
                    </div>
                </div>
            </div>

        </section>
        )





}