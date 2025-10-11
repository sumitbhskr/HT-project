import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card" style={{overflow:"hidden"}}>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg" alt="" width={333} 
        style={{border: "2px solid black"}}/>
    <h1>{props.title}</h1>
      <p>{props.description}</p>

    </div>
  )
}

export default Card
