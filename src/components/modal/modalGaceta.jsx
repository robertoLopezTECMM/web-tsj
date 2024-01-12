import React from 'react'
import { Col, Container, Row, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './index.css'
export const ModalGaceta = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h1 className='modalHeaderGacetas'>Gacetas TSJ</h1>
      </Modal.Header>
      <Modal.Body>
      <Container style={{paddingTop:'2vh', paddingBottom:'2vh'}}>
            <Stack gap={3}>
                <Row>
                    <Col>
                        <a className='image' target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2017.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2017.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2017</h1>
                            </div>
                        </a>
                    </Col>

                    <Col>
                        <a className='image'  target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2018.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2018.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2018</h1>
                            </div>
                        </a>
                    </Col>

                    <Col>
                        <a className='image'  target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2019.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2019.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2019</h1>
                            </div>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a className='image' target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2020.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2020.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2020</h1>
                            </div>
                        </a>
                    </Col>

                    <Col>
                        <a className='image' target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2021.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2021.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2021</h1>
                            </div>
                        </a>
                    </Col>

                    <Col>
                        <a className='image' target='_blank' href='http://tecmm.edu.mx/documentos/gacetas/gaceta_2022.pdf' >
                            <img style={{width:'100%'}} src="http://tecmm.edu.mx/imagesReact/images/gacetasCovers/gaceta2022.png"/>
                            <div class="overlay">
                                <h1 className='titleGaceta'>2022</h1>
                            </div>
                        </a>
                    </Col>
                </Row>
            </Stack>
        </Container>
      </Modal.Body>

    </Modal>
  );
}