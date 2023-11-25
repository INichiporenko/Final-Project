import React from 'react'
import Conteiner from '../../UI/Container';
import s from './style.module.css';

export default function EmptyCart() {
  return (
    <Conteiner>
    <div className={s.style}>
        <img className={s.img} src='/images/empty1.webp' alt='The cart is empty'/>
    </div>
    </Conteiner>
  )
}
