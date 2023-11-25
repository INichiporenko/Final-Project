import React from 'react'
import { Link } from 'react-router-dom';
import Conteiner from '../../UI/Container';
import s from './style.module.css';

const URLIMAGE = "http://localhost:3333/";

export default function CategoriesImage({id, image, title}) {
  return (
    <div className={s.conteiner}> 
        <Conteiner>
        <Link to={`/categoryProducts/${id}`}>
        <img src={`${URLIMAGE}${image}`} alt={title} />
        </Link>
          <div className={s.title}>
            <p>{title}</p>
          </div>
        </Conteiner>
    </div>
  )
}
