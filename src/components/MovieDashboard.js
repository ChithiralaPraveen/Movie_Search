import React from 'react'
import { useEffect, useState} from 'react';
import axios from  'axios';
import {Link} from 'react-router-dom';

import {MovieCard }from './MovieCard/MovieCard';

 function MovieDashboard() {
  
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
    setSearchData(e.target.value);
  }

  function filterMovie(){
    try{      
    console.log(searchData);
    const movie = movies.filter((x) => x.name.toLowerCase().includes(searchData.toLowerCase()));
    setMovies(movie);
    }catch(err){
     console.log(err);
   }
 }
  return (
    <div className="App">
      <header className='header'>
      <h1  className='heading-1 '>Movie</h1>
      <div>
      <Link type="button" className="btn btn-warning" to='/Registrationform'>Registration</Link> 

      </div>
      <div>
      <Link type="button" className="btn btn-dark" to='/Login'>Login</Link> 

      </div>
      </header>
      <div>
        <center>
          <form>
            <input  type="text" onChange={textOnchange}/><br/><br/>
            <input className= "my-4"onClick={filterMovie} type="button" value='Search'/>
           
          </form>
        </center>
      </div>
      
      <main  className='main'>
      {
        movies && movies.length > 0 && movies.map(movie => <MovieCard  key ={movie.id}movie={movie} />)
      }
      </main>         
    </div>
  )
}
export default MovieDashboard;