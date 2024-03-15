import React from 'react'
import imgArequipa from '../../assets/arequipa.jpeg'
import imgCusco from '../../assets/cusco.jpg'
import imgTrujillo from '../../assets/trujillo.jpg'
import imgIca from '../../assets/ica.jpg'


import './Destinos.css'
export const Destinos = () => {
  return (
    <div className='destinos'>
      <h2>Top Destinos  </h2>
      <div className='destinos-cards'>
        <div className='cards-card'>
          <img src={imgArequipa} alt="imgArequipa" />
          <div className='cards-card-p hr'>
            <p className='card-p-title'>Arequipa</p>
            <p>30 hoteles</p>
          </div>
          <div className='cards-card-p'>
            <p>Ciudad blanca</p>
            <i class="bx bx-chevron-right-circle"></i>
          </div>
        </div>
        <div className='cards-card'>
          <img src={imgCusco} alt="imgArequipa" />
          <div className='cards-card-p hr'>
            <p className='card-p-title'>Cusco </p>
            <p>50 hoteles</p>
          </div>
          <div className='cards-card-p'>
            <p>Ombligo del mundo</p>
            <i class="bx bx-chevron-right-circle"></i>
          </div>
        </div>
        <div className='cards-card'>
          <img src={imgTrujillo} alt="imgArequipa" />
          <div className='cards-card-p hr'>
            <p className='card-p-title'>Trujillo</p>
            <p>20 hoteles</p>
          </div>
          <div className='cards-card-p'>
            <p>Ciudad de la eterna primavera</p>
            <i class="bx bx-chevron-right-circle"></i>
          </div>
        </div>
        <div className='cards-card'>
          <img src={imgIca} alt="imgArequipa" />
          <div className='cards-card-p hr'>
            <p className='card-p-title'>Ica</p>
            <p>30 hoteles</p>
          </div>
          <div className='cards-card-p'>
            <p>Tierra del sol eterno</p>
            <i class="bx bx-chevron-right-circle"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
