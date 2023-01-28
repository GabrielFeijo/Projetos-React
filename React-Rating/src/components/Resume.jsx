import React from 'react'
import './Resume.css'
import resume from '../assets/review.png';

const Resume = ({ rating }) => {
  return (
    <div className='wrap'>
      <img src={resume} alt="Rating" className='image' />
      <p className='number'>Você selecionou {rating} de 5</p>
      <h2>Obrigado!</h2>
      <p className='description'>
        Agradecemos por você ter realizado a avaliação. Se precisar de mais suporte, não hesite em entrar em contato!
      </p>
    </div>
  )
}

export default Resume