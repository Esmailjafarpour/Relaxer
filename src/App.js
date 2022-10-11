import './App.css';
import React, {useState,useEffect} from 'react';
 

function App() {

    const [breathing, setBreathing] = useState('Breathe In');
    const [scale, setScale] = useState('container-grow');
    const [color, setColor] = useState('');

    const totalTime = 7500;
    const breateTime = (totalTime/5)*2;
    const holdTime = totalTime/5;

    const updateBreathe = () => {
      
      setBreathing("Breathe In")
      setColor("circle-BreatheIn")
        setTimeout(() => {

          setBreathing("hold")
          setColor("circle-hold")

          setTimeout(() =>{ 

            setColor("")
            setBreathing("Breathe out")
            setScale("container-shrink")

            setTimeout(() => {

              setScale("container-grow")
              updateBreathe()
              
            }, breateTime);

          }, holdTime)

        }, breateTime);
        
      }
  
      useEffect(() => {

        updateBreathe()
  
      },[]);

  return (
    <div className="App">
      <h1>Relaxer</h1>
      <div className={`container ${scale}`} >
          <div className={`circle ${color}`}></div>
          <p className="text">{breathing}</p>
          <div className="pointer-container">
            <span className="pointer"></span>
          </div>
          <div className="gradient-circle"></div>
      </div>
    </div>
  )

}

export default App;
