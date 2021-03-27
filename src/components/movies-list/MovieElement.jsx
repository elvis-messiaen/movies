 import React, { Component } from 'react'
 
class MovieElement extends Component {
     render() {
         return (
              <div className="w-25 p-2">
                <div className="card ">
                    <img alt="film" src="http://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">GLADIATOR</h5>
                        <p className="card-text">Le général romain Maximus est le plus fidèle soutien de l'empereur</p>
                    </div>
                </div>
              </div>
             
         )
     }
 }
 
 export default MovieElement
 