import imgLogo from '../../../assets/dcoding.png'
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="footer_card">
                <h2>Sobre Nosotros</h2>
                <img src={imgLogo} alt="" />
                <p>Especializada en la gestión eficiente de viajes aéreos.</p>
                <div className="footer_card_redes">
                    <div className='card_redes_item'>
                        <i class='bx bxl-twitter'></i>
                    </div>
                    <div className='card_redes_item'>
                        <i class='bx bxl-facebook' ></i>
                    </div>
                    <div className='card_redes_item'>
                        <i class='bx bxl-youtube' ></i>
                    </div>
                    <div className='card_redes_item'>
                        <i class='bx bxl-whatsapp' ></i>
                    </div>
                    <div className='card_redes_item'>
                        <i class='bx bx-wifi bx-rotate-90' ></i>
                    </div>
                </div>
            </div>
            <div className="footer_card">
                <h2>Categoria de viajes</h2>
                <ul>
                    <li><i class="bx bx-chevron-right-circle"></i> Aventura</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Viajes de luna de miel</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Gastronómico</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Turismo cultural</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Viajes de naturaleza</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Viajes de negocios</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Cruceros</li>
                </ul>
            </div>

            <div className="footer_card">
                <h2>Enlaces Rapidos</h2>
                <ul>
                    <li><i class="bx bx-chevron-right-circle"></i> Opciones de reserva</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Redes</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Aspecto legal</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Politica de privacidad</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Terminos de recerva</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Opciones de pago</li>
                    <li><i class="bx bx-chevron-right-circle"></i> Sala de prensa</li>
                </ul>
            </div>
            <div className="footer_card">
                <h2>Boletin de Noticias</h2>
            </div>
        </footer>
    )

}
export default Footer