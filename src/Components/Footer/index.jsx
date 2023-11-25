import React from 'react'
import Conteiner from '../../UI/Container';
import s from './style.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
        <Conteiner className={s.conteiner}>
            <div className={s.allcontact}>
            <div className={s.contact}>
                <h3>Contact</h3>
                <h2>+49 999 999 99 99</h2>
                <div className={s.messenger}>
                <a href='https://www.instagram.com/'>
                    <img src='/images/inst.png' alt='Instagram'/>
                </a>
                <a href='https://web.whatsapp.com/'>
                    <img src='/images/wht.png' alt='WhatsApp'/>
                </a>
                <p>Instagram</p>
                <p>WhatsApp</p>
                </div>
            </div>
            <div className={s.adress}>
                <h3>Address</h3>
                <a href='' className={s.adr}>Linkstraße 2, 8 OG, 10785, </a>
                <a href='' className={s.adr}>Berlin, Deutschland</a>
                <div className={s.time}>
                    <p>Working Hours:</p>
                    <h2>24 hours a day</h2>
                </div>
            </div>
            </div>
            <div>
                <iframe
                title='map'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4102804173667!2d13.372521311989829!3d52.50791373700811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1698244153856!5m2!1sru!2sde'
                width='100%'
                height='450'
                style={{ border: '0'}}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
        </Conteiner>
    </footer>
  )
}
