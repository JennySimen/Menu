import './App.css';
import { useEffect, useState } from 'react';

function App() {  

  const [food, setFood] = useState([]);

  // run food function when page loads
  useEffect(() => {
    foods()
  }, [])

  const foods = async () => {
    const response = await fetch('https://foodish-api.com/images/burger/burger9.jpg');
    const imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);

  // store the data
  setFood(imageObjectURL);

  }
  
  return (
  <div> 
    <h1 className='heading'>Menu</h1>
<div className='content'> <img className='pic' src={food} alt="burger" /> </div>
     </div>
  );
}



export default App;

