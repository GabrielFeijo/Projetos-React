import React from 'react'
import { Number, Number2,Number3,Number4 } from './style'

export const Button = ({text,handleClick,handleKeyDown}) => {

  return (
    <Number onClick={() => handleClick(text)}  onKeyDown={handleKeyDown}>{text}</Number>
  )
}

export const Delete = ({handleClick}) => {
  return (
    <Number2 onClick={handleClick}>DEL</Number2>
  )
}

export const Reset = ({handleClick}) => {
  return (
    <Number3 onClick={handleClick}>RESET</Number3>
  )
}

export const Result = ({handleClick}) => {
  return (
    <Number4 onClick={handleClick}>=</Number4>
  )
}

