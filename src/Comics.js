
import React, { Component} from 'react';
import md5 from "md5"

 

class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: []
    }
  }
  
 
  componentDidMount() {
    
    const pubKey = "7b8c4a6660c0ed6e66f01101cb400d55";
    const privKey = "1ccf7656fa1a7c5e72470bb94658a746e15edd8d";
    const ts = Number(new Date());
    const hash = md5(ts + privKey + pubKey);

    const getComics = async () => {
  
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?dateDescriptor=thisMonth&orderBy=-issueNumber&ts=${ts}&apikey=${pubKey}&hash=${hash}`)
      const res = await response.json();
      const results = res.data.results;
      this.setState({ comics:results })
      console.log(results)
    
    }
    getComics()
  }

    

  
  
  render() {
    let { comics } = this.state
    console.log(comics)
    return (
      <>
    <h1>Latest Marvel Comics:</h1>
    <div className="comicContainer">
     {comics.map(comic => (
       <div className="comicList">
         <h1>{comic.title}</h1> <img src={comic.thumbnail.path + "/portrait_xlarge.jpg"} alt="Cover" />
         <p>{comic.creators.items[0].name}</p>
       
        </div>
      ))}
        </div>
        </>
  )}
}
 
export default Comics;