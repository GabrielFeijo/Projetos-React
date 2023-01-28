import { useState } from 'react'
import './App.css'
import Resume from './components/Resume'
import UserForm from './components/UserForm'
import useForm from './hooks/useForm'

function App() {
  const [number, setNumber] = useState(0)
  const changeScreen = (number) => {
    setNumber(number)
    changeStep(currentStep+1)

  }

  const ratingComponents = [
    <UserForm handleClick={changeScreen}/>,
    <Resume rating={number}/>
  ]

  const { currentStep, currentComponent, changeStep } = useForm(ratingComponents)

  return (
    <div className="app">
      {currentComponent}
    </div>
  )
}

export default App
