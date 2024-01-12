import React, { useEffect, useState } from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";
import {CarrerasDataBetter} from '../../helpers/ofertaAcademicaData.js'
import './index.css'
import { Card } from 'react-bootstrap';


export const OfertaAcademicaByUnidad = () => {
  const {campusId} = useParams()
  const [carreras, setCarreras] = useState(CarrerasDataBetter)
  const [carrerasFiltered, setCarrerasFiltered] = useState([])

  useEffect(() => {
      console.log("CampusId: ", carreras[0])

      let newArray = carreras.filter(function (carrera) {
        return  carrera.campusNoAccent.includes(campusId)
    }
    );

    console.log('newArray: ', newArray)
    setCarrerasFiltered(newArray)
  }, [])

  const getColumnsForRow =()=>{
        let items = carrerasFiltered.map((item, index) => {
        return ( 
            <Col style={{marginBottom:'20px', borderRadius:'10px'}}>
                  <a href={`/OfertaAcademica/${item.name}`}>
                      <img style={{width:'100%', borderRadius:'10px'}} src={item.card}/>
                  </a>
            </Col>
        );

    });
    return items;
    };
  

return (
  <PrincipalContainer>
      <img style={{width:'100%'}} src={`https://tecmm.edu.mx/web-tsj-designs/portadasCarrerasCampus/${campusId}.jpg`}/>
      <br/>
      <br/>
      
        {/* <div className='wrapper'>

        {carrerasFiltered.map( item =>{
            return(         
              <div className='careerCard'>
                  <a href={`/OfertaAcademica/${item.name}`}>
                      <img style={{width:'100%'}} src={item.card}/>
                  </a>
              </div>
            )
        })}
        </div>   */}

        <Container>
            <Row xs={1} md={3}>
                {getColumnsForRow()}
            </Row>
        </Container>  
          {/* <Stack gap={3}>
              <Row>
                  <Col>
                      <a href={`/OfertaAcademica/${campusId}/Ingenieria-en-Gestion-Empresarial-en-Linea`}>
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
                      <a href='/OfertaAcademica/Ingenieria-en-Tecnologias-de-la-Informacion-y-Comunicaciones' >
                          <img style={{width:'100%'}} src="https://tecmm.edu.mx/web-tsj-designs/ofertaAcademica/Carreras-22.jpg"/>
                      </a>
                  </Col>

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
              </Row>
          </Stack> */}

  </PrincipalContainer>
)
}
