
import axios from 'axios';
import { useEffect, useState } from 'react'
import { BsPauseFill, BsFillDice5Fill } from 'react-icons/bs'
import './App.css'

function App() {

  const [advice, setAdvice] = useState('');

  const newAdvice = () => {
    axios.get('https://api.adviceslip.com/advice').then((response) => {
      setAdvice(response.data.slip)
    })
  }

  useEffect(() => {
    newAdvice()
  }, []);

  return (
    <div className="app">

      <div className="box">
        {advice &&
          <>
            <p>Advice #{advice.id}</p>
            <h2 className='advice'>"{advice.advice}"</h2>
          </>
        }
        <div className='flex'>
          <div className='border'></div>
          <BsPauseFill />
          <div className='border'></div>
        </div>
        <button onClick={newAdvice}><BsFillDice5Fill /></button>
      </div>
    </div>
  )
}

export default App
