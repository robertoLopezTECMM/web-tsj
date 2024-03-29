import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CarouselLanding } from '../../components/carousel';
import { CarouselNoticias } from '../../components/carouselNoticias';
import { ColorSeparator } from '../../components/colorSeparator';

import { PrincipalContainer } from '../../components/containers/principalContainer';
import { FooterLinks } from '../../components/footerLinks';
import { ModalAnuncio } from '../../components/modal';
import { NavBar } from '../../components/navBar';

import './index.css'
import { ModalGaceta } from '../../components/modal/modalGaceta';

const Landing = () => {
  const [modalGacetaShow, setModalGacetaShow] = React.useState(false);

  return (
    <PrincipalContainer showSquares>
      <ModalGaceta
        show={modalGacetaShow}
        onHide={() => setModalGacetaShow(false)}
      />
      <CarouselLanding/>
      <ColorSeparator titleSeparator={'EDUCACIÓN SUPERIOR TECNOLÓGICA'} color={'#54c98f'}/>
      <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/transitionBanner.jpg"/>
      <ColorSeparator titleSeparator={'NOTICIAS #TECSUPERIORJALISCO'} color={'#ff4d63'}/>
      <CarouselNoticias/>
      <ColorSeparator titleSeparator={'DESCUBRE EL #TECSUPERIORJALISCO'} color={'#308fff'}/>
      <div style={{display:'flex', width:'100%'}}>
        <img onClick={()=>window.open('/transparencia')} className='middleButton' style={{width:'25%'}} src='https://tecmm.edu.mx/web-tsj-designs/transparenciaButton.jpg'/>
        <img onClick={()=>window.open('https://sites.google.com/tecmm.edu.mx/convocatorias/inicio', '_blank')} className='middleButton' style={{width:'25%'}} src='https://tecmm.edu.mx/web-tsj-designs/convocatoriasButton.jpg'/>
        <img onClick={()=>setModalGacetaShow(true)} className='middleButton' style={{width:'25%'}} src='https://tecmm.edu.mx/web-tsj-designs/gacetasButton.jpg'/>
        <img onClick={()=>window.open('https://sites.google.com/tecmm.edu.mx/adquisiciones/licitaciones-2022', '_blank')} className='middleButton' style={{width:'25%'}} src='https://tecmm.edu.mx/web-tsj-designs/licitacionesButton.jpg'/>
      </div>
      <FooterLinks/>
    </PrincipalContainer>
  )
}
export default Landing