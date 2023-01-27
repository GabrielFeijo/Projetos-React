import { useState } from 'react'
import './App.css'
import { Button, Delete, Reset, Result } from './components/Button/Button'
import { ColorSlider } from './style'

function App() {

  const [screen, setScreen] = useState(0)
  const [x1, setX1] = useState(0)
  const [value, setValue] = useState(1)
  const [operation, setOperation] = useState('')
  let resultado = ''

  const showNum = (number) => {
    if (screen == 0) {
      setScreen(number)
      return
    }
    if (screen.length != 16) {
      setScreen((prevNum) => prevNum + '' + number);

    }

  }

  const resetNumbers = () => {
    setScreen(0)
    setX1(0)
    setOperation('')

  }

  const deleteNumber = () => {
    if (screen.length > 1) {
      setScreen(screen.substring(0, screen.length - 1))

    } else {
      setScreen(0)
    }
  }

  const selectOperation = (operacao) => {
    if (operation == '') {
      setOperation(operacao)
      setX1(Number(screen))
      setScreen(0)
    }


  }


  const showResult = () => {
    switch (operation) {
      case '+':
        resultado = x1 + Number(screen)
        setScreen(resultado)
        setX1(resultado)
        break;
      case '-':
        resultado = x1 - Number(screen)

        setScreen(resultado)
        setX1(resultado)
        break;
      case '/':
        resultado = x1 / Number(screen)

        setScreen(resultado)
        setX1(resultado)
        break;
      case 'x':
        resultado = x1 * Number(screen)

        setScreen(resultado)
        setX1(resultado)
        break;
      case '*':
        resultado = x1 * Number(screen)

        setScreen(resultado)
        setX1(resultado)
        break;

    }
    setOperation('')

  }

  const keyboardEvent = (e) => {
    const key = e.key

    if (key === '+' || key === '*' || key === '/' || key === '-') {
      selectOperation(key)
    } else if (key === 'Delete') {
      deleteNumber()

    }
    if (!isNaN(Number(key)) || key === '.') {
      showNum(key)
    }


  }


  const divStyle = [
    {
      wrap: {
        backgroundColor: 'white'
      }
    },
    {
      wrap: {
        backgroundColor: '#3B4664'

      },
      box: {
        backgroundColor: '#181F32',
        color: "#fff"
      },
      theme: {
        color: "#fff"
      },
      number: {
        backgroundColor: "#252D44"
      }

    },
    {
      wrap: {
        backgroundColor: '#E7E7E7'

      },
      box: {
        backgroundColor: '#D1CDCA',
        color: '#373630'
      },
      theme: {
        color: "#373630"
      },
      number: {
        backgroundColor: "#D1CDCA"
      }
    },
    {
      wrap: {
        backgroundColor: '#7C9786'

      },
      box: {
        backgroundColor: '#515F60',
        color: '#E5E5E5'
      },
      theme: {
        color: "#E5E5E5"
      },
      number: {
        backgroundColor: "#515F60"
      }
    }

  ];




  return (
    <div className="wrap" style={divStyle[value].wrap} onKeyDown={keyboardEvent} tabIndex={-1}>
      <div className="app" >
        {/* HEADER */}
        <div className='flex' style={divStyle[value].theme}>
          <h3>calc</h3>
          <div className="flex-theme" >
            <p>TEMA</p>
            <section className='flex-wrap'>
              <div className='flex-slider'>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <ColorSlider
                onChange={(e) => {
                  setValue(e.target.value)
                }}
                min={1}
                value={value}
                max={3}
                type={'range'}
                style={divStyle[value].number}
              />
            </section>
          </div>
        </div>
        {/* END - HEADER */}
        {/* OUTPUT */}
        <section className='box-output flex' style={divStyle[value].box}>
          <p>{operation}</p>
          <p >{screen}</p>
        </section>
        {/* END - OUTPUT */}
        {/* NUMBERS */}
        <div className='numbers' style={divStyle[value].number} >
          <Button text={7} handleClick={showNum} />
          <Button text={8} handleClick={showNum} />
          <Button text={9} handleClick={showNum} />
          <Delete handleClick={deleteNumber} />
          <Button text={4} handleClick={showNum} />
          <Button text={5} handleClick={showNum} />
          <Button text={6} handleClick={showNum} />
          <Button text="+" handleClick={selectOperation} />
          <Button text={1} handleClick={showNum} />
          <Button text={2} handleClick={showNum} />
          <Button text={3} handleClick={showNum} />
          <Button text="-" handleClick={selectOperation} />
          <Button text="." handleClick={showNum} />
          <Button text={0} handleClick={showNum} />
          <Button text="/" handleClick={selectOperation} />
          <Button text="x" handleClick={selectOperation} />
          <Reset handleClick={resetNumbers} />
          <Result handleClick={showResult} />
        </div>
        {/* END - NUMBERS */}
      </div>
    </div>
  )
}

export default App
