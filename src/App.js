import './App.css';
import { useEffect, useState } from 'react';

function App() {  

  function refresh() {
      const response = fetch('https://foodish-api.com/api')
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setFood(json);
      });
  
  }

  const [food, setFood] = useState([]);

  // run food function when page loads
  useEffect(() => {
    foods()
  }, [])

  const foods = async () => {
    const response = await fetch('https://foodish-api.com/api');
    const picture = await response.json();
    console.log(picture);

  // store the data
  setFood(picture);



  }
  
  return (
  <div> 
    <h1 className='heading'>Menu</h1>
  <div className='content'> <img className='pic' src={food.image} alt="burger" /> </div>
 <div className='btn'><button onClick={refresh} className='button'>new dish</button> </div>
     </div>
  );
}



export default App;

