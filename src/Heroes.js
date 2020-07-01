import React from 'react';

const Heroes = ({name , description, image}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p><span>Description:</span> <br />{description}</p>
      <img src= {image+"/portrait_xlarge.jpg"}/>
      <p>{}</p>
    </div>
  );
}

export default Heroes