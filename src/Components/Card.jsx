import React from "react"

function Card(){
  return (
    <>
      <div className="card">
        {/* <p className="card-status">Sold out</p> */}
        <img className = "card-image"src="/src/assets/katie-zaferes.png"></img>
          <div className="card-stats">
              <img className="card-star" src="./src/assets/star.png" />
              <span>5.0</span>
              <span className = "grey">(6) • </span>
              <span className = "grey">USA</span>
          </div>
          <p>Life Lessons with katie Zaferes</p>
          <p><strong>from $136</strong>/Person </p>
      </div>
    </>
  )
}

export default Card