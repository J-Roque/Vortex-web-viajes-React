import './Slider.css';
function Slider(){
return(
    <div className="slider">
        <span className='slider__preoferta'>Apartir de  300 $</span>
        <h1 className='slider__titulo'>TU DIA DE LUNA DE MIEL</h1>
        <span className='slider__subtitulo'>Trujillo  tierra de santos y sabios</span>
        <div className='slider-btn-next'>
            <a href="#"><i class='bx bx-chevron-left-circle' ></i></a>
            <a href="#"><i class='bx bx-chevron-right-circle'></i></a>

        </div>
        <form action="" className='slider__form'>
            <div className='form__items'>
                <div className='form__items__btn bg-fff1'>
                <i class='bx bx-building-house' ></i> Hoteles
                </div>
                <div className='bg-blue'>
                <div className='form__items__btn'>
                <i class='bx bxs-plane-alt' ></i> Vuelos
                </div>
                <div className='form__items__btn '>
                <i class='bx bx-party' ></i> Vacaciones
                </div>
                <div className='form__items__btn '>
                <i class='bx bxs-car' ></i> Autos
                </div>
                </div>
            </div>
            <div className='form__items bg-fff2'>
                <div className='form__items__groupinput'>
                    <label htmlFor="Donde quedarse?">Donde quedarse?</label>
                    <input list="browsers" id="browser" name="browser" />
                    <datalist id="browsers">
                        <option value="Valtrax" />
                        <option value="Finten" />
                        <option value="3estrellas" />
                        <option value="0day" />
                        <option value="one" />
                    </datalist>
                </div>
                <div className='form__items__groupinput'>
                    <label htmlFor="Desde">Desde</label>
                    <input type="date"  />
                </div>
                <div className='form__items__groupinput'>
                    <label htmlFor="Asta">Asta</label>
                    <input type="date"/>
                </div>
                <div className='form__items__groupinput'>
                    <label htmlFor="Adultos">Adultos</label>
                    <input type="number"/>
                </div>
                <div className='form__items__groupinput'>
                    <label htmlFor="Niños">Niños</label>
                    <input type="number"/>
                </div>
            </div>
        </form>
    </div>
)
}
export default Slider