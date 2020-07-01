import React from 'react';

const LatestIssues = ({name , description, image}) => {
  return (
    <div>
      <h1>{name}</h1>
      
      <img src= {image+"/portrait_xlarge.jpg"} alt="portraits"/>
      <p>{}</p>
    </div>
  );
}

export default LatestIssues