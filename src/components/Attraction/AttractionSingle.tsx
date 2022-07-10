import React, {useEffect, useState} from 'react'
import {AttractionEntity} from 'types'
import {useParams} from "react-router-dom";



export const AttractionSingle = () => {

    const [att, setAtt] = useState<AttractionEntity | null>(null)
    let {id} = useParams()
    useEffect(()=> {
        (async () => {
            const res = await fetch(`http://localhost:3001/attraction/${id}`)
            const data = await res.json()
            setAtt(data)
        })()
    },[])

    if(att === null) {
        return <p>Ładowanie zasobów..</p>
    }

    return <>
    <p>{att.nameAttraction}</p>
    </>

}