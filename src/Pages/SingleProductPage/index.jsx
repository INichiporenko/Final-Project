import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../../store/slice/cartSlice';
import Conteiner from '../../UI/Container';
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const URLIMAGE = "http://localhost:3333/";

export default function SingleProductPage() {

    const dispatch = useDispatch();

    const {id} = useParams();

    const products = useSelector(({products}) => products.list);

    const productsTitle = products.find(products => products.id === +id);

    if (products.length === 0){
        return ''
    }
    const {image, title, discont_price, description, price} = products.find(item => item.id === +id);

    const discount = parseFloat(((price - discont_price)/price)*100).toFixed(0); 

  return (
    <Conteiner className={s.conteiner}>
    <div className={s.product}>
        <p className={s.total}>{productsTitle ? productsTitle.title : " "}</p>
        <Link to="javascript:history.go(-1)" className={s.link}>
            <p className={s.icon}><IoIosArrowBack /></p> 
            <p> Back </p>
        </Link>
        <div className={s.block}>
        <div className={s.head}>
            <img src={`${URLIMAGE}${image}`} alt={title} />
        </div>
        <div className={s.info}>
            <div className={s.dis_prs}>
                <p className={s.discont_price}>
                {discont_price}
                {
                    discont_price !== null ? 
                    <span style={{ fontSize: '35px' }}>$</span>
                    : ''
                } 
                </p>
                <div className={s.price}>
                    <p className={discont_price ? s.mark : ''}>{price}
                    {
                        discont_price !== null ?
                        <span style={{ fontSize: '25px' }}>$</span>
                        : <span style={{ fontSize: '35px', paddingRight: '450px'}}>$</span>
                    }
                    </p>
                </div>
                {
                discont_price ?
                <p className={s.dis_price}> -{discount}%</p>
                : ''
                }
            </div>
            <button onClick={() => dispatch(add(id))} className={s.btn}>To cart</button>  
            <p className={s.underline}></p>
            <p className={s.description}>Description</p>
            <p className={s.title}>{description}</p>
        </div>
        </div>
    </div>
    </Conteiner>
  )
}
