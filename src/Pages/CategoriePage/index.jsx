import React from 'react'
import { useSelector } from 'react-redux';
import CategoriesImage from '../../Components/CategoriesItem'
import Conteiner from '../../UI/Container';
import s from './style.module.css';

export default function CategoriePage() {

  const categories = useSelector(({categories}) => categories);


  return (
  <div>
    <Conteiner className={s.cp}>
      <p className={s.text}>Categories</p>
      <div className={s.categorie}>
          {
              categories.list.map(item => < CategoriesImage key={item.id} {...item} />)
          }
      </div>
    </Conteiner>
  </div>
  )
}
