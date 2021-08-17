
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import './newfilm.css'
import {Link} from 'react-router-dom'
import { FcStart } from "react-icons/fc";

function NewUpload() {

    const [film,setNewfilm] = useState([])
    const [load,setLoad] = useState(true)

    useEffect(() => {

   axios.get('https://api-lk21.herokuapp.com/newupload')

            .then(response => {
               return response.data
       
            })
            .then(data => {
                setNewfilm(data.result);
                setLoad(false);
                
            } )
         
            .catch(err => {
                console.error(err + ' Errorrrrrrr');
            })

    } )

    if(load) {
        return (
            <div>
                <h3>Loading ....</h3>
            </div>
        )
    }
    return (

        <>
            { film.map((rows,idx) => 

                <div className="card" key={idx}>

                      <img src={rows.thumbnail} alt="thumbnailimg" height="130" />
                      <p className="title"> {rows.title} </p>
                      <Link to={rows.trailer} className="icon"> <FcStart/> Watch Trailer</Link>
                </div>
                
            ) }

        </>

    )
}

export default NewUpload
