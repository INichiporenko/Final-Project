import React from 'react'
import { useSelector } from 'react-redux';
import CatalogItem from '../../Components/CatalogItem';
import Banner from '../../Components/Banner'
import s from './style.module.css'
import Banner2 from '../../Components/Banner2';
import SaleBanner from '../../Components/SaleBanner';



export default function MainPage({categories}) {

  const {list} = useSelector((state) => state.categories);
 

  return (
    <div>
      <Banner />
        <div className={s.catalog}>
          <div className={s.text}>
            <p>Catalog</p>
            <div className={s.btn} >
              <a href='/categories/all/'>All categories</a>
            </div>
          </div>
          <div className={s.categories}>
              { 
                list.slice(0, 4).map(categories => <CatalogItem key={categories.id} {...categories} />) 
              }
          </div>
        </div>
      <Banner2 />
      <SaleBanner/>
    </div>
  )
}

