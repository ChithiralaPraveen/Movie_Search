import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';  

const Review = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        alert("Thanks for submit the review ");
         navigate('/home'); 
        }
    const [reviewData, SetreviewData] = useState([]);
    function reviewOnchange(e) { SetreviewData(e.target.value); }
    

    const SubmitReview = (moviename) => {
        
        let isLoggedIn = false
        localStorage.getItem('isLoggedIn') === 'True' ? isLoggedIn=true : isLoggedIn=false ;
        if (isLoggedIn) {
            fetch('https://localhost:7161/Review/Create', {
                method: 'POST',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        Reviewdata: reviewData,
                        Moviename: moviename,
                        Reviewdate : new Date(),
                        Username :localStorage.getItem('Username')
                    })
            }).then(function (response) {
                console.log(response);
               
                routeChange();
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        else {
            alert("Please login");
            navigate('/login');
        }
    }


    const location = useLocation();
    const { name, imdb_rating, genre, duration, img_link } = location.state;
    return (
        <div>
            <center>
                <div className="card-container">
                    <div className="card-img-container">
                        <img className="card-img" src={img_link} alt="movie-card" />
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
                    <input autoFocus value={reviewData} onChange={reviewOnchange} type="Text" name="review"></input>
                    <div>
                        <button onClick={()=>SubmitReview(name)}>Submit</button>

                    </div>
                </label>


            </center>


        </div>
    )
}
export default Review;
