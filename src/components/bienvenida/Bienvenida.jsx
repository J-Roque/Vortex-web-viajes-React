import React from 'react';
import './Bienvenida.css';
export default function Bienvenida() {
    return (
        <div className='servicio'>
            <h2>Bienvenido a <span>Vertex</span></h2>
            <p>En Vetex, nos enorgullece ofrecerte una experiencia de viaje excepcional desde el momento en que cruzas nuestras puertas digitales. Como tu socio confiable en el mundo de los viajes, estamos aquí para convertir tus sueños en realidad y hacer que cada viaje sea una experiencia inolvidable.</p>

            <div className='servicio__card'>
                <div className='servicio__card__item'>
                    <div className='servicio__card__item-i'>
                        <i class='bx bx-search'></i>
                    </div>
                    <p>BUSCAR TU DESTINO</p>
                </div>
                <div className='servicio__card__item'>
                    <div className='servicio__card__item-i'>
                        <i class='bx bx-building-house' ></i>
                    </div>
                    <p>SELECIONE SU DESEO</p>
                </div>
                <div className='servicio__card__item'>
                    <div className='servicio__card__item-i'>
                        <i class='bx bxs-credit-card' ></i>
                    </div>
                    <p>REALZIAR EL PAGO</p>
                </div>

            </div>

        </div>
    )
}
