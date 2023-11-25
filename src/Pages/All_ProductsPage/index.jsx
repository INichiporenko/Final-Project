import React from 'react'
import { useSelector } from 'react-redux';
import ProductsFilter from '../../Components/ProductsFilter';
import ProductsItem from '../../Components/ProductsItem'
import Conteiner from '../../UI/Container';
import s from './style.module.css';

export default function All_ProductsPage() {

  const {list} = useSelector((state) => state.products);

  return (
    <div className={s.block}>
      <Conteiner className={s.products} >
        <p className={s.text} >All products</p>
      <div>
        <ProductsFilter showDiscountedCheckbox={true}/>
      </div>
        <div className={s.map}>
        { 
          list
          .filter(({show}) => Object.values(show).every(elem => elem))
          .map(products => <ProductsItem key={products.id} id={products.id} {...products} />) 
        }
        </div>
      </Conteiner>
    </div>
  )
}


