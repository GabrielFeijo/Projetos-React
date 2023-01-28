import React, { useState } from 'react'

import './UserForm.css'
import { AiFillStar } from 'react-icons/ai'
import Ball from './Ball'
import Button from './Button'

const UserForm = ({handleClick}) => {
  const [number, setNumber] = useState(0)

  return (
    <div className='box'>

      <Ball text={<AiFillStar />} />


      <h2>Como foi sua experiência ?</h2>
      <p>Sua opinião é muito importante para nós, pois estamos buscando melhorar nossos serviços, para que assim possamos atender o nosso bem mais precioso, VOCÊ nosso cliente.</p>

      <div className="flex">
        <div>
          <input type="radio" name="rating" value={1} className="radio-rating" onChange={(e) => setNumber(e.target.value)} />
          <p className='ball'>1</p>
        </div>
        <div>
          <input type="radio" name="rating" value={2} className="radio-rating" onChange={(e) => setNumber(e.target.value)} />
          <p className='ball'>2</p>
        </div>
        <div>
          <input type="radio" name="rating" value={3} className="radio-rating" onChange={(e) => setNumber(e.target.value)} />
          <p className='ball'>3</p>
        </div>
        <div>
          <input type="radio" name="rating" value={4} className="radio-rating" onChange={(e) => setNumber(e.target.value)} />
          <p className='ball'>4</p>
        </div>
        <div>
          <input type="radio" name="rating" value={5} className="radio-rating" onChange={(e) => setNumber(e.target.value)} />
          <p className='ball'>5</p>
        </div>

      </div>


      <Button text={'Enviar avaliação'} handleClick={() => handleClick(number)} />
    </div>
  )
}

export default UserForm