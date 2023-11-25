import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { priceFilter, sort } from '../../store/slice/productsSlice';
import Conteiner from '../../UI/Container'
import { RxCross2 } from "react-icons/rx";
import { nanoid } from 'nanoid';

import s from './style.module.css';

export default function ProductsFilter({showDiscountedCheckbox}) {

    // фильтрация по цене 
    const [price, setPrice] = useState({min: 0, max: Infinity});
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceFilter(price));
    }, [price, dispatch]);


    const priceHandler={
        min: value => +value,
        max: value => value === '' ? Infinity : +value
    };

    const changePrice = ({target}) => {
        const {name, value} = target;
        setPrice(state => ({...state, [name]: priceHandler[name](value)}))
    };

    // sorted

    const sortOptions = [
        {id: 1, label: 'price ->', value: 1},
        {id: 2, label: 'price <-', value: 2},
        {id: 3, label: 'by name ->', value: 3},
        {id: 4, label: 'by name <-', value: 4}
    ];

    const sortHandler = (event) => {
        dispatch(sort(+event.target.value));
     }

    // кнопка очищения фильтра с ценой
    const resetHandler = () => {
        setPrice({min: 0, max: Infinity});
    }

    //для checkBox
    const id = nanoid();


  return (
    <Conteiner className={s.container}>
        <div className={s.priceFilter}>
            <p>Price</p>
            <input 
                type="number" 
                name='min' 
                placeholder='from' 
                value={price.min === 0 ? '' : price.min}
                onChange={changePrice}>
            </input>
            <input 
                type="number" 
                name='max' 
                placeholder='to' 
                value={price.max === Infinity ? '' : price.max}
                onChange={changePrice}>
            </input>
            <button onClick={resetHandler}><RxCross2 /></button>
        </div>
        {showDiscountedCheckbox && (
        <div className={s.checkBox}>
            <p>Discounted items</p>
            <input className={s.checkbox} id={id} type='checkbox'
                onChange={(e) => dispatch(priceFilter({
                    min: price.min,
                    max: price.max,
                    showDiscounted: e.target.checked
                }))}
            />
            <label className={s.label} htmlFor={id}></label>
        </div>
        )}

        <div className={s.sorted}>
            <p>Sorted</p>
            <select className={s.select} onChange={sortHandler}>
            <option selected disabled className={s.placeholder}>by default</option>
                {
                    sortOptions.map(elem => (<option key={elem.id} value={elem.value}> {elem.label}</option>))
                }
            </select>
        </div>
    </Conteiner>
  )
}
