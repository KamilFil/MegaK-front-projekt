import React, {FormEvent, useEffect, useState} from "react";
import { CategoryEntity } from 'types';
import "./AddForm.css"


export const AddForm = () => {
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState("")
    const [attName, setAttName] = useState('')
    const [category, setCategory] = useState<CategoryEntity[] | null>(null);
    const [form, setForm] = useState({
        nameAttraction: '',
        town: '',
        text: '',
        img: '',
        idCategory: 1,
    })

    useEffect(() => {
        (async () => {
            const res = await fetch("http://localhost:3001/attraction/")
            const data = await res.json()
            // console.log(data.allCategory)
            setCategory(data.allCategory)
        })();
        setLoading(false)
    }, [loading]);



    const updateForm = (key: string, value: string | number) => {

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
            setMsg("Formularz wysłany")
            setForm({
                nameAttraction: '',
                town: '',
                text: '',
                img: '',
                idCategory: 1,
            })
            setLoading(true)

        } catch (e){
            setMsg('Przepraszamy wystapił problem z wysłaniem formularza')
            setLoading(true)
        }

    }
    if(attName) {
        return <p>Formularz wysłany. Nazwa atrakcji: {attName}</p>
    }


    if(category === null) {
        return <p>Brak</p>
    }


    return (
    <section className="add-attraction">
        <img src="/public/img/swiat-atrakcji-banner.jpg" alt=""/>
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
            <p><i className="fa-solid fa-circle-info"> </i> Każda atrakcja przechodzi przez proces weryfikacji przez administratora. Twoja atrakcja pojawi się po pewnym czasie</p>
        </div>
            <div className="add-attraction_box">
                <h3>Formularz dodawania</h3>
                <form className="add-form" action="" onSubmit={adAtt}>
                    <input className="add-form-input" minLength={3} maxLength={100}type="text" name="nameAttraction" value={form.nameAttraction} required placeholder="Nazwa atrakcji max 100zn" onChange={e => updateForm('nameAttraction', e.target.value)}/>
                    <input className="add-form-input" minLength={1} maxLength={80} type="text" name="town" placeholder="Miasto" value={form.town} onChange={e => updateForm('town', e.target.value)}/>
                    <textarea className="add-form-textarea" minLength={150} maxLength={500} name="text" placeholder="Opisz atrakcje max 500zn" value={form.text} onChange={e => updateForm('text', e.target.value)}/>
                    <input className="add-form-input" type="url" pattern="https://.*" name="img" placeholder="https://urlzdjecia.pl" value={form.img} onChange={e => updateForm('img', e.target.value)}/>
                    <select onChange={e => updateForm('idCategory', Number(e.target.value))}>
                        {category.map((cat) =>(
                            <option key={cat.idCategory} value={cat.idCategory}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                    <input className="add-form-submit" type="submit" value="Wyślij"/>
                </form>
                <p>{msg}</p>
            </div>
        </div>

    </section>)
    };


