import React, {FormEvent, useState} from "react";
import "./AddForm.css"

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


    return (
    <section className="add-attraction">
        <img src="/img/swiat-atrakcji-banner.jpg"/>
        <h2>Dodaj swoją atrakcję.</h2>
        <div className="add-attraction_container">

        <div className="add-attraction_box">
          <h3>Instrukcja doawania:</h3>
            <ol>
                <li>Wpisz nazwę atrakcji</li>
                <li>Wpisz nazwię miasta</li>
                <li>Opisz atrakcję/miejsce, które zobaczyłeś(min. 500zn).</li>
                <li>Umieść adres URL zdjęcia miejsca</li>
                <li>Kliknij przycisk <strong>"Wyślij"</strong></li>
            </ol>
            <p><i className="fa-solid fa-circle-info"></i> Każda atrakcja przechodzi przez proces weryfikacji przez administratora. Twoja atrakcja pojawi się po pewnym czasie</p>
        </div>
            <div className="add-attraction_box">
                <h3>Formularz dodawania</h3>
                <form className="add-form" action="" onSubmit={adAtt}>
                    <input className="add-form-input" type="text" name="nameAttraction" value={form.nameAttraction} required placeholder="Nazwa atrakcji" onChange={e => updateForm('nameAttraction', e.target.value)}/>
                    <input className="add-form-input" type="" name="town" placeholder="Miasto" value={form.town} onChange={e => updateForm('town', e.target.value)}/>
                    <textarea className="add-form-textarea" minLength={5} name="text" placeholder="Opisz atrakcje min 500zn" value={form.text} onChange={e => updateForm('text', e.target.value)}/>
                    <input className="add-form-input" type="text" name="img" placeholder="URL zdjęcia" value={form.img} onChange={e => updateForm('img', e.target.value)}/>
                    <input className="add-form-submit" type="submit" value="Wyślij"/>
                </form>
            </div>
        </div>
    </section>)
    };


