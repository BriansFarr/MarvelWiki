import React from 'react';
import { Link } from 'react-router-dom';

const Heroes = ({name , description, image}) => {
  return (
    <div className="herosContainer">
      <h1>{name}</h1>
      <p><span>Description:</span> <br />{description}</p>
      <img src= {image+"/portrait_xlarge.jpg"} alt="portraits"/>
      
    </div>
  );
}

export default Heroes