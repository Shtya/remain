import React, { useState } from "react";
import {Fade } from 'react-awesome-reveal'

const Card = ({ data}) => {
  return (
      data.length ?
      data.map((e,index)=> (
        <Fade damping={0.5} cascade>
        <div className="card" key={index}>
      <img src={e.images[0]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{e.title}</h5>
        <p className="card-text"> {e.description} </p>
        <span className="btn btn-primary badge ms-3">{e.discountPercentage} بدلا من {e.price}</span>
        <a  className="btn btn-success badge"> Stock {e.stock}</a>

      </div>
    </div>
    </Fade>
      )) 
      
      : <h3>not found</h3>

  );
};

export default Card;
