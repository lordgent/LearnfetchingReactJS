
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './newfilm.css'

function Actionfilm() {

    const  [action,setAction] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

            const api = axios.get('http://api-lk21.herokuapp.com/genre?genre=action');

            api.then(response =>{
                return response.data
            } )
            .then(film => {
                setAction(film.result)
                setLoading(false)
            } )
            .catch(err => {
                console.log(err);
            })
    } ) 

    if(loading) {
        return <h1>.......</h1>
    }

    return (

        <>
            { action.map((film,idx) => 
                
                    
                <div className="cardaction" key={idx}>
                        <img src={film.thumbnail} alt="action_icon" />
                    
                          <p> {film.title} </p>
                        <br/>
                        <span>Duration : {film.duration}</span>

                            <button className="btn">
                          <a href={film.watch} className="watch">Watch</a>
                            </button>
                </div>
               
            ) }

        </>

    )
}

export default Actionfilm
