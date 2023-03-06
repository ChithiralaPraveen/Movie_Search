import './App.css';
import { useEffect, useState} from 'react';
import axios from  'axios';
import {MovieCard }from './components/MovieCard/MovieCard';



function App() {
  const [movies,setMovies]=useState([]);
  const [searchData,setSearchData]=useState([]);

  
  
  const getMovies= async() =>{
    try{
       const {data}=await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
       setMovies(data);
     }catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
    getMovies();
  },[])
  function textOnchange(e){
    console.log(e);
    setSearchData(e.target.value);
  }

  function filterMovie(){
    try{     
      getMovies(); 

      const data1 = movies.filter(l => {
        return l.name.toLowerCase().match( searchData );
      });
      setMovies(data1);
    }catch(err){
     console.log(err);
   }
 }
  return (
    <div className="App">
      <header className='header'>
      <h1 className='heading-1'>Movie</h1>
      </header>
      <div>
        <center>
          <form>
            <input type="text" onChange={textOnchange}/><br/><br/>
            <input onClick={filterMovie} type="button" value="search"/>
           
          </form>
        </center>
      </div>
      
      <main  className='main'>
      {
        movies && movies.length > 0 && movies.map(movie => <MovieCard  key ={movie.id}movie={movie}/>)
      }
      </main>
         
      
    </div>
  );
}

export default App;
