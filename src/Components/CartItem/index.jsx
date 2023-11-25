import React from 'react'
import s from './style.module.css';
import {  RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux';
import { decr, incr, remove } from '../../store/slice/cartSlice';
import { Link } from "react-router-dom";

const URLIMAGE = "http://localhost:3333/";

export default function CartItem({id, title, image, price, discont_price, underline, count}) {

    const dispatch = useDispatch();

return (
     <div className={[s.card, underline ? s.underline: ''].join(' ')}>
        <div className={s.img}>
            <Link to={`/product/${id}`}>
                <img src={`${URLIMAGE}${image}`} alt={title} />
            </Link>
        </div>
        <div className={s.description}>
            <p>{title}</p>
            <div className={s.count}>
                <button onClick={() => dispatch(incr(id))}>+</button>
                <p>{count}</p>
                <button onClick={() => dispatch(decr(id))}>-</button>
            </div>
        </div>
        <div className={s.prise}>
            <p> 
                {
                parseFloat(discont_price) ?
                (parseFloat(discont_price) * count).toFixed(2) 
                : ''
                }
                {
                discont_price ?
                <span style={{ fontSize: '25px' }}>$</span> 
                : ''
                }
            </p> 

            <p className={discont_price !== null ? s.mark : ''}>
            {(parseFloat(price) * count).toFixed(2)}
            {
                discont_price !== null ?
                <span style={{ fontSize: '20px' }}>$</span>
                : <span style={{ fontSize: '25px' }}>$</span>
            }
            </p>  
        </div>
        <div className={s.remove}>
            <button onClick={() => dispatch(remove(id))} className={s.remove}><RxCross2 /></button>
        </div>
    </div>

  )
}
