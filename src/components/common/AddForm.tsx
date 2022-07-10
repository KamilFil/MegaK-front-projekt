import React, {FormEvent, useState} from "react";


export const AddForm = () => {
    const [msg, setMsg] = useState('')
    const [attName, setAttName] = useState('')
    const [form, setForm] = useState({
        nameAttraction: '',
        town: '',
        text: '',
        img: '',
    })


    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))};

    const adAtt = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:3001/attraction/add", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })
            const data = await res.json()
            setAttName(data.nameAttraction)
        } catch (e){

            setMsg('Przepraszamy wystapił problem z wysłaniem formularza')
        }
    }

    if(attName) {
        return <p>Formularz wysłany. Nazwa atrakcji: {attName}</p>
    }

    if(msg) {
        return <p>{msg}</p>
    }


    return <form  action="" onSubmit={adAtt}>
            <input type="text" name="nameAttraction" value={form.nameAttraction} required placeholder="Nazwa atrakcji" onChange={e => updateForm('nameAttraction', e.target.value)}/>
            <input type="" name="town" placeholder="Miasto" value={form.town} onChange={e => updateForm('town', e.target.value)}/>
            <textarea minLength={5} name="text" placeholder="Opisz atrakcje min 500zn" value={form.text} onChange={e => updateForm('text', e.target.value)}/>
            <input type="text" name="img" placeholder="URL zdjęcia" value={form.img} onChange={e => updateForm('img', e.target.value)}/>
            <button type="submit">Wyślij</button>
        </form>
    };


