import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsFilter from '../../Components/ProductsFilter';
import SingleCategoriesItem from '../../Components/SingleCategoriesItem';
import Conteiner from '../../UI/Container';

import s from './style.module.css'

export default function SingleCategoriesPage() {

    const {categoryId} = useParams();
    const products = useSelector(({products}) => products.list);
    const categories = useSelector(({ categories }) => categories.list);

    const selectedCategory = categories.find(category => category.id == categoryId);
    const filteredProducts = products.filter(products => products.categoryId == categoryId);
 

  return (
    <div className={s.block}>
    <Conteiner className={s.products} >
      <p className={s.text} >
      {selectedCategory ? selectedCategory.title : " "}
      </p>
      <div>
        <ProductsFilter showDiscountedCheckbox={true}/>
      </div>
      <div className={s.map}>
      {
            filteredProducts.map(product => <SingleCategoriesItem key={product.id} {...product}/>)
        }
      </div>
    </Conteiner>
  </div>
  )
}
