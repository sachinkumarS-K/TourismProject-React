import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tours from './Componets/Tours'
import data from './data.js';
function App() {
 
  const[tours , setTours] = useState(data);

  function removeTourHandler(id){
    const newTour = tours.filter(tour => tour.id !== id) ;
    setTours(newTour);
  }

  if(tours.length == 0) {
    return(
      <div className="refresh">
        <h1>No tours left</h1>
        <button className='btnWhite' onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <>
    
     <Tours tours = {tours} removeTour = {removeTourHandler}></Tours>
    </>
  )
}

export default App
