import './App.css';
import React, { useState, useEffect } from 'react';


// data.results.title


const App = () => {
  
  const pubKey = "001ac6c73378bbfff488a36141458af2";
  //const privKey = "1ccf7656fa1a7c5e72470bb94658a746e15edd8d";
  const ts = "thesoer";
  const md5Hash = "72e5ed53d1398abb831c3ceec263f18b"


  useEffect(() => { getHeroes() }, []);
  
  const getHeroes = async () => {
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${pubKey}&hash=${md5Hash}`)
    const data = await response.json();
    console.log(data.data.results)
   


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
