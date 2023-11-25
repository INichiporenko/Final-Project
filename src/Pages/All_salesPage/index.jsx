import React from 'react'
import { useSelector } from 'react-redux';
import ProductsFilter from '../../Components/ProductsFilter';
import ProductsSalesItem from '../../Components/ProductsSalesItem';
import Conteiner from '../../UI/Container';
import s from './style.module.css';



export default function All_salesPage() {

  const {list} = useSelector((state) => state.products);

  const filteredProducts = list.filter(product => product.discont_price !== null);

  return (
    <div className={s.block}>
      <Conteiner className={s.products} >
        <p className={s.text} >Products with sale</p>
        <ProductsFilter showDiscountedCheckbox={false}/>
        <div className={s.map}>
          {
            filteredProducts.map(product => (
            <ProductsSalesItem key={product.id} {...product} />))
          }
        </div>
      </Conteiner>
    </div>
  )
}
