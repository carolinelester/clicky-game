import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-12 col-sm-3">
      <div className="card mb-4" >
        <div className="text-center">
          <img src={'img/' + props.card.img} 
          className="card-img-top p-2" alt="" 
          style={{width:"150px", height: "150px"}} 
          onClick={() => props.onSelect(props.card.id)}/>
        </div>
      </div>
    </div>
  )
}

function Cards(props) {
  return (
  <div className="container" style={{width:"800px"}}>
    <div className="row">
      {
        props.imgCards.map(function(card){
          return (
            <Card key= {card.id} card={card} onSelect={props.onSelect}/>
          )
        })
      }
      
    </div>
  </div>
  )
}

function Wrapper(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid pt-0">
        <div className="container">
          <img src="img/dunder2.jpg" style={{height: '225px', margin: '15px'}}/>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
      <Cards imgCards={props.imgCards} onSelect={props.onSelect}/>
    </div>
  )
}

export default Wrapper;
