import React from 'react'
import s from './style.module.css';

export default function Banner() {
  return (

    <section id={s.banner}>
        <div className={s.wrapper}>
            <div className={s.text}>
                <h2>Sale</h2>
                <h1>New season</h1>
                <a href='/all_sales' className={s.btn} >
                    <a>Sale</a>
                </a>
            </div>
            <div className={s.img}>
                <img className={s.img} src='/images/blumen3.png' alt='Flowers'/>
            </div>
        </div>
    </section>


  )
}
