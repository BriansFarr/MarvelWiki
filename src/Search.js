
import React, { useState, useEffect } from 'react';
import Heroes from './Heroes';
import md5 from 'md5';
import './App.css';




// data.results.title


const Search = () => {
  
  const pubKey = "7b8c4a6660c0ed6e66f01101cb400d55";
  const privKey = "1ccf7656fa1a7c5e72470bb94658a746e15edd8d";
  const ts = Number(new Date());
  const hash = md5(ts + privKey + pubKey);


  const [hero, setHero] = useState([]);
  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('captain America');
  //const hero = "hulk";

  useEffect(() => { getHeroes() }, [query] );

  const getHeroes = async () => {
  
    const response = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${pubKey}&hash=${hash}`)
    const res = await response.json();
    //console.log(res.data.results[0]);
    const results = res.data.results;
    setHero(results)
    console.log(results)
  
    

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    
  }

  return (
    <div className="APP">
  

      <p>Search Here</p>

      <form  onSubmit = {getSearch} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
      <button  className="search-button" type="submit">search</button>
      </form>
      {hero.map(heros => (
        <Heroes key={heros.id} name={heros.name} description={heros.description} image={heros.thumbnail.path} />
        
      ))}

    </div>
 
  )
}
export default Search
