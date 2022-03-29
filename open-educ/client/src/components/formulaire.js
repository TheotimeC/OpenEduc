import { useEffect, useState } from "react";
import './styles/formulaire.css';
import axios from "axios";


export default function Formulaire(){

    const [test, setTest] = useState("")
    const [text, setText] = useState("")
    const [testListe, setTestListe] = useState([])
    
    useEffect (()=> {

        axios.get('http://localhost:3001/api/get').then((response)=> {

            setTestListe(response.data)

        })
    })

    const submitReview = () => {

        console.log("rrr")

        axios.post('http://localhost:3001/api/insert', {
            test: test, 
            text: text,
        })
        // .then(() => {
        //     alert("successful insert");
        // });
    
    };

    return (

        <div className="form">
            
            <label>Test</label>
            <input
            type="text"
            name="test"
            onChange={(e)=>{
                setTest(e.target.value)
            }}
            />

            <label>Text</label>
            <input
            type="text"
            name="text"
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />

            <button type="submit" onClick={submitReview}>Submit</button>
            
            {testListe.map((val)=>{

                return <h1> N° {val.test} | text : {val.text}</h1>
            
            })}
           
        



          

        </div>

    )

};