import React from 'react'
import { NavLink } from 'react-router-dom'
import Conteiner from '../../UI/Container';
import s from './style.module.css'
import { PiHandbagThin } from "react-icons/pi";
import { useSelector } from 'react-redux';


export default function Nav() {

    const className = ({isActive}) => isActive ? s.active: '';

    const uniqueProductsCount = useSelector((state) => state.cart.list.length);

  return (
    <nav className={s.nav}>
      <Conteiner className={s.conteiner}>
        <NavLink to={'/main_page'} className={s.logo}>
          <img src="/images/logo.png" alt="logo"/>
          <NavLink to={'/categories/all'}> 
            <button className={s.btn}>Catalog</button>
           </NavLink>
        </NavLink>
        <div className={s.link}>
          <NavLink className={className} to={'/main_page'}>Main Page</NavLink>
          <NavLink className={className} to={'/products/all'}>All progucts</NavLink>
          <NavLink className={className} to={'/all_sales'}>All sales</NavLink>
        </div>
        <div className={s.icon}>
          <NavLink to={'/cart'}><PiHandbagThin className={s.iconColor}/></NavLink>
          {uniqueProductsCount > 0 && (
            <NavLink to={'/cart'}>
            <span className={s.cartCount}>{uniqueProductsCount}</span>
            </NavLink>
          )}
        </div>
      </Conteiner>
    </nav>
  )
}
