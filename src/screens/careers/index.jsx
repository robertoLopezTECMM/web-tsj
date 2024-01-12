import React, { useEffect, useState } from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

export const Careers = () => {
    const {campusId} = useParams()
    const [careers, setCareers] = useState([
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-01.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Gestion-Empresarial-en-Linea'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-02.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Maestria-en-Sistemas-Computacionales'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-03.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Maestria-en-Administracion'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-04.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Innovacion-Agricola-Sustentable'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-05.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Administracion'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-06.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Ambiental'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-07.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Animacion-Digital-y-Efectos-Visuales'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-08.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Arquitectura'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-09.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Civil'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-10.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Contador-Publico'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-11.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Electromecanica'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-12.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Electronica'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-13.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Gestion-Empresarial'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-14.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Gastronomia'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-15.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Energias-Renovables'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-16.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Industrial'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-17.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Industrias-Alimentarias'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-18.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Informatica'},

        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-19.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Sistemas-Automotrices'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-20.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Sistemas-Computacionales'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-21.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-Mecatronica'},
        
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-22.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Ingenieria-en-Tecnologias-de-la-Informacion-y-Comunicaciones'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-23.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Licenciatura-en-Turismo'},
        {imgUrl:'https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-24.jpg', linkCareer:'https://tecmm.edu.mx/Carrera/Licenciatura-en-Administracion'},
    ])

    useEffect(() => {
        console.log("CampusId: ", campusId)
    }, [])
    

  return (
    <PrincipalContainer>
        <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/headerOfertaAcademica.jpg"/>
        <Container style={{paddingTop:'2vh', paddingBottom:'2vh'}}>
            <Stack gap={3}>
                <Row>
                    <Col>
                        <a href={`/OfertaAcademica/Ingenieria-en-Gestion-Empresarial-en-Linea`}>
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-01.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Maestria-en-Sistemas-Computacionales' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-02.jpg"/> 
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Maestria-en-Administracion' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-03.jpg"/> 
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Innovacion-Agricola-Sustentable' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-04.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Administracion' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-05.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Ambiental' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-06.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Animacion-Digital-y-Efectos-Visuales' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-07.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Arquitectura' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-08.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Civil' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-09.jpg"/> 
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Contador-Publico' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-10.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Electromecanica' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-11.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Electronica' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-12.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Gestion-Empresarial' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-13.jpg"/>
                        </a>
                    </Col>
                    
                    <Col>
                        <a href='/OfertaAcademica/Gastronomia' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-14.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Energias-Renovables' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-15.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Industrial' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-16.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Industrias-Alimentarias' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-17.jpg"/>
                        </a>
                    </Col>

                    <Col> 
                        <a href='/OfertaAcademica/Ingenieria-Informatica' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-18.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Sistemas-Automotrices' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-19.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-en-Sistemas-Computacionales' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-20.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Ingenieria-Mecatronica' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-21.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/OfertaAcademica/Licenciatura-en-Turismo' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-23.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/OfertaAcademica/Licenciatura-en-Administracion' >
                            <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-24.jpg"/>
                        </a>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Stack>
        </Container>
    </PrincipalContainer>
  )
}
