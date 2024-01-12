import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './index.css'

export const NavBar = () => {
  return (
    <div className='navBarContainer'>
        <img onClick={()=>window.location.replace('https://tecmm.edu.mx')} src="https://tecmm.edu.mx/web-tsj-designs/logosHeader.png" style={{ width: '100%'}}/>

        <Navbar bg="light" expand="lg">
        <Container>
            {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" id='bootstrapNav'>
                <NavDropdown title="SOMOS TECMM" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/QuienesSomos">¿Quiénes somos?</NavDropdown.Item>
                  <NavDropdown.Item href="/directorio">Directorio</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="https://www.tsj.tecmm.edu.mx/modeloAcademico" target='_blank'>Modelo Académico</NavDropdown.Item> */}
                </NavDropdown>
                {/* <Nav.Link href="">SOMOS TECMM</Nav.Link> */}
                <Nav.Link href="https://edcore.tecmm.mx/" target='_blank'>EDCORE</Nav.Link>
                <Nav.Link href="https://admision.tsj.mx/" target='_blank'>ADMISIÓN</Nav.Link>
                {/* <Nav.Link href="https://www.tsj.tecmm.edu.mx/vidaEstudiantil" target='_blank'>VIDA ESTUDIANTIL</Nav.Link> */}
                {/* <Nav.Link href="https://www.tsj.tecmm.edu.mx/contacto" target='_blank'>CONTACTO</Nav.Link> */}
                {/* <Nav.Link href="https://www.tsj.tecmm.edu.mx/igualdad" target='_blank'>SGIG</Nav.Link> */}
                <Nav.Link href="/portalDenuncias">QUEJAS Y DENUNCIAS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}
