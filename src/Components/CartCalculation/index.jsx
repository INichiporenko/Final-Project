import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import useCart from '../../hooks/useCart';
import { clearCart } from '../../store/slice/cartSlice';
import Conteiner from '../../UI/Container';
import s from './style.module.css';
import { Link } from 'react-router-dom';



export default function CartCalculation() {

    const dispatch = useDispatch();

    const cart = useCart();
    const totalPrice = cart.reduce((acc, {price, count}) => acc + price * count, 0);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [orderSent, setOrderSent] = useState(false);

    const handlePhoneChange = (e) => {
    const inputText = e.target.value;

    const maxLength = 11;
    const numericText = inputText.replace(/\D/g, '').substring(0, maxLength);
    setPhoneNumber(numericText);
  };

  const handleOrderClick = () => {

    if (!phoneNumber) {
        setError('Please enter a valid phone number');
            return;
        }
        setError('');
    if (phoneNumber.length < 11) {
        setError('Please enter a valid 11-digit phone number');
            return;
        }
        setError('');
    if (cart.length === 0) {
        setError('Please add items to the cart first');
            return;
          }
        setError('');


    // Формируем объект с данными для отправки
    const orderData = {
      cart,
      totalPrice,
      phoneNumber,
    };

    // Опции для fetch-запроса
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Устанавливаем заголовок для JSON-данных
      },
      body: JSON.stringify(orderData), // Преобразуем объект в JSON-строку

    };

    fetch('http://localhost:3333/order/send', options)
      .then((response) => response.json())
      .then((data) => {
        // Обработка успешного ответа
        console.log('Order successfully sent:', data);
        setPhoneNumber(''); // Обнуляем поле ввода

        if (data.status === 'OK') {
            dispatch(clearCart());
            setOrderSent(true);
          }
      })
}

const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение отправки формы
    handleOrderClick();
  };


  return (
    <div className={s.conteiner}>
      <div className={s.block}>
        {orderSent ? (
          <div className={s.thankYouBlock}>
            <img className={s.youimg} src='/images/you.png' />
            <Link to={`/products/all`} className={s.link}>
                <p className={s.back}> Back to shopping</p>
            </Link>
          </div>
        ) : (
          <>
            <p className={s.order}>Order details</p>
            <div className={s.price}>
              <p>Total</p>
              <div className={s.total_price}>
                <p>
                  {totalPrice}
                  <span style={{ fontSize: '25px' }}>$</span>
                </p>
              </div>
            </div>
            <div className={s.footer}>
              <form className={s.search} onSubmit={handleSubmit}>
                <p>+49</p>
                <input type="text" value={phoneNumber} onChange={handlePhoneChange} />
              </form>
              <button className={s.btn} onClick={handleOrderClick}>
                Order
              </button>
              {error && <p className={s.error}>{error}</p>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}



//   return (
//     <Conteiner className={s.conteiner}>
//         <div className={s.block}>
//             <p className={s.order}>Order details</p>
//             <div className={s.price}>
//                 <p>Total</p>
//                 <div className={s.total_price}>
//                     <p>{totalPrice}<span style={{ fontSize: '25px' }}>$</span></p>
//                 </div>
//             </div>

//             <div className={s.footer}>
//                 <form className={s.search} onSubmit={handleSubmit}>
//                     <p>+49</p>
//                     <input
//                         type="text"
//                         value={phoneNumber}
//                         onChange={handlePhoneChange} 
//                     />
//                 </form>
//             <button className={s.btn} onClick={handleOrderClick}>
//               Order
//             </button>
//             {error && <p className={s.error}>{error}</p>}

//             </div>
//         </div>
//     </Conteiner>
//   )
// }







