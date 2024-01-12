import React, { useEffect, useState } from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import './index.css'
import { useParams } from "react-router-dom";
import CarrerasData, { CarrerasDataBetter } from '../../helpers/ofertaAcademicaData.js'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import YouTube from 'react-youtube';


export const Carrera = (props) => {
  const {carreraId} = useParams()
  const [carreraSelected, setCarreraSelected] = useState(null)

  const [modalVideoInstitucionalShow, setModalVideoInstitucionalShow] = useState(false);
  const [modalVideoTestimonialShow, setModalVideoTestimonialShow] = useState(false);

  useEffect(() => { 
    setCarreraSelected(CarrerasData().find(item => item.name === carreraId))
  //   setCarreraSelected(CarrerasData().find(item => item.name === carreraId))
  // console.log('CARRERAID: ', CarrerasData().find(item => item.name === carreraId))
  console.log(carreraId)
  }, [carreraId])
  




  const VideoInstitucionalModal = (props2) => {
    return (
      <Modal
        {...props2}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Video Institucional
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <YouTube
            videoId={carreraSelected.videoInstitucional}
          /> */}
          <video width="700px" height="500px" controls="controls" autoPlay>
            <source src={carreraSelected.videoInstitucional} type="video/mp4" />
          </video>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props2.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const VideoTestimonialModal = (props3) => {
    return (
      <Modal
        {...props3}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Video Testimonial
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={carreraSelected.youtube}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props3.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }


  
  return (
    <PrincipalContainer>

      {carreraSelected === null ? <div> <a>LOADING....</a> </div>
      :
      <>
      <VideoInstitucionalModal
        show={modalVideoInstitucionalShow}
        onHide={() => setModalVideoInstitucionalShow(false)}
      />

      <VideoTestimonialModal
        show={modalVideoTestimonialShow}
        onHide={() => setModalVideoTestimonialShow(false)}
      />
      <img className='portadaCarrera' src={carreraSelected.portada}/>
      <Container>
        <Row>
          <Col onClick={()=> window.location.href = "https://admision.tsj.mx/"} className='buttonCarreraDocument' style={{backgroundColor:'#308fff'}} sm>
            <h1>Inscríbete</h1>
          </Col>
          <Col onClick={()=> setModalVideoTestimonialShow(true)} className='buttonCarreraDocument' style={{backgroundColor:'#54c98f'}} sm>
            <h1>Video Testimonial</h1>
          </Col>
          <Col onClick={()=> setModalVideoInstitucionalShow(true)} className='buttonCarreraDocument' style={{backgroundColor:'#ffae31'}} sm>
            <h1>Video Institucional</h1>
          </Col>
          <Col onClick={()=> window.location.href = carreraSelected.reticula} className='buttonCarreraDocument' style={{backgroundColor:'#33179c'}} sm>
            <h1>Retícula</h1>
          </Col>
          <Col onClick={()=> window.location.href = carreraSelected.planEstudios} className='buttonCarreraDocument' style={{backgroundColor:'#ff4d63'}} sm>
            <h1>Plan de estudios</h1>
          </Col>
          <Col onClick={()=> window.location.href = carreraSelected.folleto} className='buttonCarreraDocument' style={{backgroundColor:'#308fff'}} sm>
            <h1>Folleto</h1>
          </Col>
        </Row>
      </Container>

      <br/> 

      <Container>
        <Row>
          <Col sm>
            <h1 className='tituloSeccionH1'>OBJETIVO</h1>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <p className='objetivoP'>{carreraSelected.objetivo}</p>
          </Col>
        </Row>
      </Container>
      
      <br/>
      {carreraSelected.perfilIngreso?
        <Container>
          <Row>
            <Col sm>
              <h1 className='tituloSeccionH1'>PERFIL DE INGRESO</h1>
            </Col>
          </Row>
          <Row>
            <Col  className="perfilEgresoList" sm>
                {carreraSelected.perfilIngreso.map((it)=>(
                  <li> {it.perfil} </li>
                ))}
            </Col>
          </Row>
        </Container>
      :null
    
    }  


      <br/>

      <Container>
        <Row>
          <Col sm>
            <h1 className='tituloSeccionH1'>PERFIL DE EGRESO</h1>
          </Col>
        </Row>
        <Row>
          <Col  className="perfilEgresoList" sm>
              {carreraSelected.perfilEgreso.map((it)=>(
                <li> {it.perfil} </li>
              ))}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm>
            <h1 className='tituloSeccionH1'>OFERTADA EN: </h1>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <p className='objetivoP'>{carreraSelected.campus}</p>
          </Col>
        </Row>
      </Container>
      
      </>
      
      }

      
    
    </PrincipalContainer>
  )
}
