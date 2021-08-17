import React from 'react'
import Actionfilm from '../../components/data/Actionfilm'
import NewUpload from '../../components/data/NewUpload'
import './home.css'


function HomePages() {
    return (
        <>

        <div className="container">
                <p className="newfilm">New Film</p>
                <div className="wrapper">

                         <NewUpload/>
                    
                </div>
           
        </div>
            <br/>
            <br/>
            <div className="container-action">
            <p className="log">Action Film</p>
                <div className="row">
                <Actionfilm/>
                </div>

            </div>

        </>
    )
}

export default HomePages
