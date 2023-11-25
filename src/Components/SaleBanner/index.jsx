import React from 'react'
import { useSelector } from 'react-redux';
import SaleBannerItem from '../SaleBannerItem';
import s from './style.module.css';


export default function SaleBanner() {

    const {list} = useSelector((state) => state.products);

  return (
    <div className={s.catalog}>
        <div className={s.text}>
          <p>Sale</p>
          <div className={s.btn} >
            <a href='/all_sales/'>All sales</a>
          </div>
      </div>
      <div className={s.saleBanner}>
      { 
        list
          .filter(product => product.discont_price) 
          .slice(0, 3) 
          .map(product => <SaleBannerItem key={product.id} {...product} />) 
      }
    </div>
  </div>

  )
}

