import React from 'react'
import img1hotel from '../../assets/1.webp'
import img2hotel from '../../assets/2.webp'
import img3hotel from '../../assets/3.webp'
import img4hotel from '../../assets/4.webp'



import './Ofertas.css'
export const Ofertas = () => {
    return (
        <div className='oferta'>
            <h2>Las mejores Ofertas</h2>
            <div className='ofertas__card'>
                <div className="ofertas__card__item">
                    <img src={img1hotel} alt="hotel" />
                    <div className='card__item-p'>
                        <p>Sheraton  Historic </p>
                        <span>s/329</span>
                    </div>
                    <div className='card__item-p'>
                        <p>Descuento</p>
                        <span className='span-desc'>s/30</span>
                    </div>
                    <div className='card__item-p bt-1'>
                        <p>Lima-peru</p>
                        <span>Ahorra 40%</span>
                    </div>

                </div>

                <div className="ofertas__card__item">
                    <img src={img2hotel} alt="hotel" />
                    <div className='card__item-p'>
                        <p>Nobility Grand HotelSe</p>
                        <span>s/329</span>
                    </div>
                    <div className='card__item-p'>
                        <p>Descuento</p>
                        <span className='span-desc'>s/30</span>
                    </div>
                    <div className='card__item-p bt-1'>
                        <p>Trujillo-peru</p>
                        <span>Ahorra 40%</span>
                    </div>

                </div>

                <div className="ofertas__card__item">
                    <img src={img3hotel} alt="hotel" />
                    <div className='card__item-p'>
                        <p>Sheraton  Historic </p>
                        <span>s/329</span>
                    </div>
                    <div className='card__item-p'>
                        <p>Descuento</p>
                        <span className='span-desc'>s/30</span>
                    </div>
                    <div className='card__item-p bt-1'>
                        <p>Lima-peru</p>
                        <span>Ahorra 40%</span>
                    </div>

                </div>

                <div className="ofertas__card__item">
                    <img src={img4hotel} alt="hotel" />
                    <div className='card__item-p'>
                        <p>Sheraton  Historic </p>
                        <span>s/329</span>
                    </div>
                    <div className='card__item-p'>
                        <p>Descuento</p>
                        <span className='span-desc'>s/30</span>
                    </div>
                    <div className='card__item-p bt-1'>
                        <p>Lima-peru</p>
                        <span>Ahorra 40%</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
