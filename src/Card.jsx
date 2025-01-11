import React from 'react';
import {Link} from "react-router";

const Card = (props) => {
  const  {item} = props
  return (
      <div className="card" style={{
        width: '320px',
      }}>
        <img src={item.images[0]} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> {item.title} </h5>
          <p className="card-text">{
            item.description.length > 260 ?
            item.description.slice(0, 260) + "[...]" : item.description
          }</p>
          <Link to={`/product/${item.id}`} className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
  );
};

export default Card;