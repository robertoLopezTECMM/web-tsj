import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalAnuncio = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <img style={{width:'70%', margin:'auto', display:'block'}} src='https://tecmm.edu.mx/web-tsj-designs/esquelaJuanCarlosArias.png'/>
      </Modal.Body>

    </Modal>
  );
}
