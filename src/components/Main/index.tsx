
import { Link } from 'react-router-dom';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';


interface IMain {
    title: string;
    bg: string;
    optionalClass: string;
}

export const Main = ({title, bg, optionalClass}: IMain) => {
    // const myRef = React.createRef();
    
    useEffect(() => {
        const elementCatalog = document.getElementById('catalog');
        const elementMain = document.getElementById('main');
        
        if (elementCatalog && window.location.href.includes('catalog')) {
            elementCatalog.scrollIntoView();
        } else {
            elementMain?.scrollIntoView();
        };
    });

    return (
        // <section ref={myRef} className={'main ' + optionalClass} style={{backgroundImage: `url(../../assets/images/bg/${bg})`}} id='main'>
        <section className={'main ' + optionalClass} style={{backgroundImage: `url(../../assets/images/bg/${bg})`}} id='main'>
          <div className="container">
              <div className="main_inner">
                    <h1>{title}</h1>

                    <button className='page_button hover_3'><NavLink to='/ceny#catalog/'>Цены</NavLink></button>

                    <div className="main_phones px40">
                        <Link className='main_phone hover_3' to="tel:+375296561046">A1 +375-29-656-10-46</Link>
                        <Link className='main_phone hover_3' to="tel:+375295561045">МТС +375-29-556-10-45</Link>
                    </div>
              </div>
          </div>
        </section>
    )
}