import { useEffect, useState } from 'react';
import './App.css'
import './bug'

var clicks = 0;

function App() {
  const [ladyBug, setLadyBug] = useState(false);

    useEffect(() => {
      function handleCliker() {
        clicks++;
        if (clicks == 3) {
          setLadyBug(true);
          setTimeout(() => {
            setLadyBug(false);
          }, 5000);
        }
      }

      document.body.addEventListener('click', handleCliker);
      return () => {
        document.body.addEventListener('click', handleCliker);
      }
    }, []);

  return (
    <>
      <div className='container'>
        <img className='yo' src="public/pic.jpg" alt="" />
        <h2>Hello, I'm Romulo</h2>
        
        <h3>Been working with software engineering for the past 8 years.</h3>
        
        <div className='links'>
          <a href="https://www.linkedin.com/in/romulo-simiquel-lobato/" target="_blank" rel="noopener noreferrer">Linkedin</a>        
        
          <a href="https://github.com/romulosimiquel" target="_blank" rel="noopener noreferrer">Github</a>

          <a href="public/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>        
        
          <a href="https://link.chess.com/friend/OzByfT" target="_blank" rel="noopener noreferrer">Let's play some chess</a>
        </div>
      </div>
      <div className='footer'>
        <span> 
            <img className={`ladybug${ladyBug ? ' visible' : ''}`} src="public/ladybug.gif" alt="" />
          I'm still working on this page, if you see any bugs around, please let me know!
          </span>
      </div>
    </>
  )
}

export default App
