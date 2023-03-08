
import MovieDashboard from './components/MovieDashboard';
import './App.css';
import Review from './components/Review';
import {  Routes, Route} from "react-router-dom";
import Registrationform from './components/Registrationform';
import Login from './components/Login';

function App() {
   return(
    <Routes>
      <Route  path="/Registrationform" element={<Registrationform />} />
      <Route  path="/Login" element={<Login />} />
      <Route  path="/Review" element={<Review />} />
      <Route path='*' element={<MovieDashboard />}></Route>
    </Routes>
    // <Registrationform />
   

  ) 
}

export default App;
