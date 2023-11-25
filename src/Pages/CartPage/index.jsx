import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from '../../Components/CartItem';
import useCart from '../../hooks/useCart';
import {  IoIosArrowForward } from 'react-icons/io'
import s from './style.module.css';
import ByCondition from '../../UI/ByCondition';
import EmptyCart from '../../Components/EmptyCart';
import CartCalculation from '../../Components/CartCalculation';
import Conteiner from '../../UI/Container';

export default function CartPage() {

    const list = useCart();

if (!list || list.length === 0) {
  return (
    <Conteiner>
    <div className={s.conteiner}>
        <div className={s.item}>

            <div className={s.head}>
                <p>Shopping cart</p>
                <Link to="javascript:history.go(-1)" className={s.link}>
                    <p> Back to the store </p>
                    <p className={s.icon}><IoIosArrowForward /></p> 
                </Link>
            </div>

            <div className={s.cart}>
                <ByCondition condition={list.length === 0 } >
                    <EmptyCart />
                </ByCondition>

                <div className={s.calculation}>
                    <CartCalculation />
                </div>
            </div>

        </div>
    </div>
    </Conteiner>
  )
}


return (
    <Conteiner>
    <div className={s.conteiner}>
        <div className={s.item}>
            
            <div className={s.head}>
                <p>Shopping cart</p>
                <Link to="javascript:history.go(-1)" className={s.link}>
                    <p> Back to the store </p>
                    <p className={s.icon}><IoIosArrowForward /></p> 
                </Link>
            </div>

            <div className={s.cart}>
                <div>
                    {
                        list.map((item, index) => <CartItem key={item.id} {...item} underline={index !== list.length  }/>)
                    }
                </div>
                <div className={s.calculation}>
                <CartCalculation />
                </div>
            </div>

        </div>
    </div>
    </Conteiner>
  )
}