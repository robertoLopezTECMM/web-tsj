import React, { useState } from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import { Col, Container, Row, Stack, Button,   Modal,  } from 'react-bootstrap'


export const Unidades = () => {

    const [modalVideo, setModalVideo] = useState(false)
    const [linkVideoToShow, setLinkVideoToShow] = useState('')

    const VideoInstitucionalModal = (props3) => {
        return (
            <Modal
            {...props3}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <YouTube
                videoId={carreraSelected.videoInstitucional}
                /> */}
                <video width="700px" height="500px" controls="controls" autoPlay>
                <source src={linkVideoToShow} type="video/mp4" />
                </video>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={()=>setModalVideo(false)}>Cerrar</Button>
            </Modal.Footer>
            </Modal>
        );
    }
  return (
    <PrincipalContainer>
        <VideoInstitucionalModal
            show={modalVideo}
            onHide={() => setModalVideo(false)}
        />
        <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/topBannerUnidades.jpg"/>

        <Container style={{paddingTop:'2vh', paddingBottom:'2vh'}}>
            <Stack gap={3}>
                  <Row>
                    <Col>
                        <a href='/Carreras/ARANDAS'>
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-arandas.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/CHAPALA'>
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-chapala.jpg"/> 
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/COCULA'>
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-cocula.jpg"/> 
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/Carreras/GRULLO'> 
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-grullo.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/HUERTA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-huerta.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/LAGOS' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-lagos.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/Carreras/MASCOTA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-mascota.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/TALA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-tala.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/TAMAZULA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-tamazula.jpg"/> 
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <a href='/Carreras/TEQUILA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-tequila.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/VALLARTA' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-vallarta.jpg"/>
                        </a>
                    </Col>

                    <Col>
                        <a href='/Carreras/ZAPOPAN' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-zapopan.jpg"/>
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    </Col>

                    <Col>
                        <a href='/Carreras/ZAPOTLANEJO' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/campus/campus-zapotlanejo.jpg"/>
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
