import './App.css';
import React, { useState , useEffect } from 'react';

// data.results.title


const App = () => {
  
  //const apiKey = "7b8c4a6660c0ed6e66f01101cb400d55"


  useEffect(() => {getHeroes()}, []);

  const getHeroes = async () => {
    const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=hulk&apikey=1ccf7656fa1a7c5e72470bb94658a746e15edd8d`)
    const data = await response.json();
    console.log(data)
   


  }

  return (
    <div className="APP">
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className="search-button" type='submit'>
          Search
        </button>
      </form>
    </div>
  );
 
};
export default App
