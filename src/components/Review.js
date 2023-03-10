import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';

 const Review = () => {

    let navigate = useNavigate();
    const SubmitReview = () => {        
        const isLoggined = false;

        if(isLoggined)
        {
            alert("Thanks review submitted");
            navigate('/MovieDashboard');
        }else
        {
            alert("Please login");
            navigate('/login');
        }
        
    }


  const location = useLocation();
  const {name, imdb_rating, genre, duration, img_link} = location.state;
  return (
    <div>
        <center>
      <div className="card-container">
            <div className="card-img-container">
                <img  className="card-img" src={img_link} alt="movie-card" />
            </div>
            <div className="card-details">
            <div>
                <span className="title">{name}</span>
            </div>
            <div>
                <span className="genre">Genre:{genre} </span>
            </div>
            <div className="ratings"> 
                <span>Rating: {imdb_rating}</span>
                <span>{duration} mins</span>
               
            </div>
            
        </div>
        </div>
        <label>
                <span>Put your comments here : </span>
                <input type="Text" name="review"></input>
                <div>
                <button onClick={SubmitReview}>Submit</button>
                </div>
            </label>

        
        </center>

        
    </div>
  )
}
export default Review;
