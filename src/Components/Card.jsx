import React from "react"

function Card(props){
  return (
    <>
      <div className="card">
        {/* <p className="card-status">Sold out</p> */}
        <img className = "card-image" src={props.img}></img>
          <div className="card-stats">
              <img className="card-star" src="assets/star.png" />
              <span>{props.rating}</span>
              <span className = "grey">({props.reviewCount}) • </span>
              <span className = "grey">{props.location}</span>
          </div>
          <p>{props.title}</p>
          <p className = "card-price"><strong cla>from ${props.price}</strong>/Person </p>
      </div>
    </>
  )
}

export default Card