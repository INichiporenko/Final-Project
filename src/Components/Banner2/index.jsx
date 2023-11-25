import React, { useEffect, useState } from 'react'
import s from './style.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Banner2() {

    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneChange = (e) => {
    const inputText = e.target.value;

    const maxLength = 11;
    const numericText = inputText.replace(/\D/g, '').substring(0, maxLength); 
    setPhoneNumber(numericText);
  };


  const handleButtonClick = () => {
    // Формируем объект с данными для отправки
    const data = { phoneNumber };

    // Опции для fetch-запроса
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Устанавливаем заголовок для JSON-данных
      },
      body: JSON.stringify(data), // Преобразуем объект в JSON-строку
    };

    // Выполняем POST-запрос
    fetch('http://localhost:3333/sale/send', options)
      .then(response => response.json())
      .then(data => {
        // Обработка успешного ответа
        console.log('Успешно отправлено!', data);
        notify(); // Вызываем уведомление после успешной отправки
        setPhoneNumber(''); // Обнуляем поле ввода
      })
      .catch(error => {
        // Обработка ошибок
        console.error('Ошибка при отправке запроса:', error);
      });
    
  };

  const notify = () => toast.success("Thank you! Now you have a discount!");


  return (
    <section id={s.banner2}>
    <div className={s.ban}>
        <div className={s.gnom}>
            <img className={s.img1} src='/images/banner2_1.png' />
        </div>
        <div className={s.block}>
            <img className={s.img2} src='/images/banner2_2.png' />

            <div className={s.container}>
                <form className={s.search}>
                    <p>+49</p>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneChange} 
                    />
                </form>
                <button className={s.button} onClick={handleButtonClick}>
                    Get a discount</button>  
                <ToastContainer 
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                /> 
            </div>
        </div>
    </div>
    </section>
  )
}
