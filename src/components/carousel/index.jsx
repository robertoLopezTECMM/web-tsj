import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css'
import { PrimaryButton } from '../buttons';

export const CarouselLanding = () => {
  return (
    <div className='carouselLandingContainer'>
      
      <Carousel
        width="100%"
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        emulateTouch
        className='carouselLandingComponent'
      >

        <a href='https://tecmm.edu.mx/documentos/2024/admitidosEne2024.pdf'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/admitidosEne2024.jpeg" />
          </div>
        </a>

        <a href='https://tecmm.edu.mx/diplomadoDocente'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/banner_diplomado.jpg" />
          </div>
        </a>

        <a href='https://enecb.tecnm.mx/'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/ENECB.jpg" />
          </div>
        </a>

        <a href='https://www.thincrs.com/artesanos-de-la-educacion'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/hub.jpg" />
          </div>
        </a>

        {/*<a href='https://tecmm.edu.mx/documentos/2023/lista-admitidos-agosto-23.pdf'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/aceptados-agosto-23.jpg" />
          </div>
        </a>*/}



        <a href='https://tecmm.edu.mx/Noticia/El-TecSuperiorJalisco-interconecta-con-el-Sistema-de-Descarga-de-T%C3%ADtulos-Electr%C3%B3nicos.' target='_blank'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/notaTitulos.jpg" />
          </div>
        </a>
        
        <a href='https://developer.tecmm.mx:3318/files/Convocatoria%20PEDD2023.pdf' target='_blank'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/estimuloDocente.jpg" />
          </div>
        </a>
        
        <a href='https://somosjalisco.mx/' target='_blank'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/200_anos_jalisco.jpg" />  
          </div>
        </a>

        <a href='http://mi.tecmm.mx:3010' target='_blank'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/inscripciones_2023.jpg" />
          </div>
        </a>

        <a href='https://www.jalisco.gob.mx/es/gobierno/comunicados/protocolo-cero-para-prevenir-atender-sancionar-y-erradicar-el-acoso-y' target='_blank'>
          <div>
            <img src="https://tecmm.edu.mx/img/carousel/manifiesto.jpg" />
          </div>
        </a>
      </Carousel>

      <div className='carouselButtonsContainer'>
        <PrimaryButton color='#33179c' text='Unidades Académicas de Jalisco' link='/UnidadesAcademicas' />
        &nbsp;
        &nbsp;
        <PrimaryButton color='#33179c' text='Oferta Académica' link='/OfertaAcademica'/>
      </div>
      
    
    </div>

  )
}
