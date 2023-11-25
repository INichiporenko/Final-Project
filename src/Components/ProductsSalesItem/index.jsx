import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add } from '../../store/slice/cartSlice';
import Conteiner from '../../UI/Container';
import s from './style.module.css';

const URLIMAGE = "http://localhost:3333/";

export default function ProductsSalesItem({id, image, title, price, discont_price}) {

    const dispatch = useDispatch();
    const discount = parseFloat(((price - discont_price)/price)*100).toFixed(0) 

  return (
    <div className={s.productsItem}>
    <Conteiner className={s.conteiner}>

      <div className={s.head}>
        <Link to={`/product/${id}`}>
        <img src={`${URLIMAGE}${image}`} alt={title} />
        </Link>
        <button onClick={() => dispatch(add(id))} className={s.btn} >Add to cart</button>
      </div>

    <div className={s.footer}>
      <div className={s.dis_prs}>
          <p className={s.discont_price}>
          {discont_price}
            {
                discont_price !== null ? 
                <span style={{ fontSize: '20px' }}>$</span>
                : ''
            }
           </p>
            <div className={s.price}>
            <p className={discont_price ? s.mark : ''}>{price}$</p>
            </div>
          {
            discont_price ?
            <p className={s.dis_price}> -{discount}%</p>
            : ''
          }
      </div>
      <p className={s.title}>{title}</p>
    </div>
    </Conteiner>
  </div>
  )
}
