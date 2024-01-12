import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PrincipalContainer } from '../../components/containers/principalContainer';
import { TopBanner } from '../../components/topBanner';
import './directorio.css'

function Directorio() {
    const [directores, setDirectores] = useState([     
        {   nombre: 'Paula Ortíz Rojas', 
            image:"https://www.tecmm.edu.mx/recursos/img/directores/paula_ortiz.jpg",
            cargo: 'Directora de Área Académica, Investigación e Innovación',
            telefono:"33-38-84-94-70",
            correo:'paula.ortiz@tecmm.edu.mx',
            mailTo:'mailto:director.academico@tecmm.edu.mx'
        },

        {   nombre: 'Antonio Anguiano Apodaca',
            image:"https://www.tecmm.edu.mx/recursos/img/directores/antonio_anguiano.jpg",
            cargo: 'Director de Extensión y Vinculación',
            telefono:"33-38-84-94-70",
            correo:'antonio.anguiano@tecmm.edu.mx',
            mailTo:'mailto:antonio.anguiano@tecmm.edu.mx'
        },

        {   nombre: 'Gerardo Reyes Chávez', 
            image:"https://www.tecmm.edu.mx/recursos/img/directores/gerardo_reyes_2.jpg", 
            cargo: 'Director de Administración y Finanzas', 
            telefono:"33-38-84-94-70", 
            correo:'gerardo.reyes@tecmm.edu.mx', 
            mailTo:'mailto:gerardo.reyes@tecmm.edu.mx'
        },

        {   nombre: 'Jorge Enrique López Campos',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/DG-ENRIQUE.jpg", 
            cargo: 'Director de Tecnologías de la Información y Comunicaciones', 
            telefono:"33-38-84-94-70", 
            correo:'enrique.lopez@tecmm.edu.mx', 
            mailTo:'mailto:enrique.lopez@tecmm.edu.mx'
        },

        {   nombre: 'Francisco Gasca Acevedo', 
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/DG-FRANCISCO.jpg", 
            cargo: 'Director de Planeación y Desarrollo', 
            telefono:"33-38-84-94-70", 
            correo:'francisco.gasca@tecmm.edu.mx', 
            mailTo:'mailto:francisco.gasca@tecmm.edu.mx'
        },

        {   nombre: 'Mónica Ofelia Villanueva Aceves', 
            image:"https://www.tecmm.edu.mx/recursos/img/directores/monica_villanueva.jpg", 
            cargo: 'Comisario Público', 
            telefono:"33-38-84-94-70", 
            correo:'monica.villanueva@tecmm.edu.mx', 
            mailTo:'mailto:monica.villanueva@tecmm.edu.mx'
        },

        {   nombre: 'Ernesto Alejandro Castellanos Silva', 
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/DG-ERNESTO.jpg", 
            cargo: 'Abogado General', 
            telefono:"33-38-84-94-70", 
            correo:'ernesto.castellanos@tecmm.edu.mx', 
            mailTo:'mailto:ernesto.castellanos@tecmm.edu.mx'
        },

        {   nombre: 'Juan Pablo Cerrillo Hernández', 
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/AR-JUAN-PABLO.jpg", 
            cargo: 'Unidad Académica Arandas', 
            telefono:"01-348-78-32010", 
            correo:'juan.cerrillo@tecmm.edu.mx', 
            mailTo:'mailto:juan.cerrillo@tecmm.edu.mx'
        },
        
        {   nombre: 'Javier Quezada', 
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/CH-JAVIER.jpg", 
            cargo: 'Unidad Académica Chapala', 
            telefono:"01-376-76-5-80-30", 
            correo:'', 
            mailTo:'mailto:luis.jimenez@tecmm.edu.mx'
        },

        {   nombre: 'Edith Gabriela Gómez Espinoza', 
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/CO-EDITH.jpg", 
            cargo: 'Unidad Académica Cocula', 
            telefono:"377-773-0030", 
            correo:'edith.gomez@cocula.tecmm.edu.mx', 
            mailTo:'mailto:edith.gomez@cocula.tecmm.edu.mx'
        },

        {   nombre: 'Roberto Durán Michel', 
            image:"https://www.tecmm.edu.mx/recursos/img/directores/roberto_duran.jpg", 
            cargo: 'Unidad Académica El Grullo', 
            telefono:"321-38-73435", 
            correo:'roberto.duran@tecmm.edu.mx', 
            mailTo:'mailto:roberto.duran@tecmm.edu.mx'
        },

        {   nombre: 'Jorge Santiago Rodríguez González',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/LH-JORGE-SANTIAGO.jpg", 
            cargo: 'Unidad Académica La Huerta', 
            telefono:"357-38-41884", 
            correo:'jorge.santiago@tecmm.edu.mx', 
            mailTo:'mailto:jorge.santiago@tecmm.edu.mx'
        },

        {   nombre: 'Ma. Eugenia Amador Murguía',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/LM-MARIA-EUGENIA.jpg",
            cargo: 'Unidad Académica Lagos de Moreno',
            telefono:"01-(474)-403-39-74",
            correo:'maria.amador@tecmm.edu.mx',
            mailTo:'mailto:maria.amador@tecmm.edu.mx'
        },

        {   nombre: 'Rigoberto González Rodríguez',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/MA-RIGOBERTO.jpg",
            cargo: 'Unidad Académica Mascota',
            telefono:"01-388-38-60518",
            correo:'rigoberto.gonzalez@tecmm.edu.mx',
            mailTo:'mailto:rigoberto.gonzalez@tecmm.edu.mx'
        },

        {   nombre: 'Eduardo Daniel Miramontes',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/TE-DANIEL.jpg",
            cargo: 'Unidad Académica Tequila',
            telefono:"37-47-42-72-88",
            correo:'daniel.miramontes@tecmm.edu.mx',
            mailTo:'mailto:daniel.miramontes@tecmm.edu.mx'
        },

        {   nombre: 'Gloria Luz Rodríguez Gil',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/TA-GLORIA.jpg",
            cargo: 'Unidad Académica Tala',
            telefono:"384-73-33000",
            correo:'gloria.rodriguez@tecmm.edu.mx',
            mailTo:'mailto:gloria.rodriguez@tecmm.edu.mx'
        },

        {   nombre: 'Brenda Yerania Ortega',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/TM-YERA.jpg",
            cargo: 'Unidad Académica Tamazula',
            telefono:"358-10-30060",
            correo:'',
            mailTo:''
        },

        {   nombre: 'Alejandra Medina Lozano',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/PV-ALEJANDRA.jpg",
            cargo: 'Unidad Académica Puerto Vallarta',
            telefono:"322-226-56 00",
            correo:'alejandra.medina@tecmm.edu.mx',
            mailTo:'mailto:alejandra.medina@tecmm.edu.mx'
        },

        {   nombre: 'José Rafael León Jacobo',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/ZA-RAFAEL-LEON.jpg",
            cargo: 'Unidad Académica Zapopan',
            telefono:"36-82-11-80",
            correo:'rafael.leon@tecmm.edu.mx',
            mailTo:'mailto:rafael.leon@tecmm.edu.mx'
        },

        {   nombre: 'Héctor Dávalos Tinajero',
            image:"https://tecmm.edu.mx/web-tsj-designs/directores/ZP-HECTOR.jpg",
            cargo: 'Unidad Académica Zapotlanejo',
            telefono:"373-73-56060",
            correo:'hector.davalos@tecmm.edu.mx',
            mailTo:'mailto:hector.davalos@tecmm.edu.mx'
        },
    ])

  return (
    <PrincipalContainer>
        {/* <TopBanner source={'https://tecmm.edu.mx/web-tsj-designs/topBanners/topBannerDirectorio.png'}/> */}
        <br/>
        {/* <div className='topHeaderContainer'>
            <h1>Directorio</h1>
        </div> */}
        <div>
        <Row xs={1} md={3} className="g-4" style={{marginLeft:'2vh', marginRight:'2vh'}}>
        {directores.map(director => (
            <Col>
                <Card style={{minHeight:'40vh', maxHeight:'55vh', height:'55vh'}}>
                    <Card.Img variant="top" src={director.image} />
                    <Card.Body>
                        <Card.Title id='directorioCardTitle'>{director.nombre}</Card.Title>
                        <Card.Subtitle id='directorioCardSubtitle' className="mb-2 text-muted">{director.cargo}</Card.Subtitle>
                        <Card.Text id='directorioCardTel'>{director.telefono} </Card.Text>
                        <Card.Text id='directorioCardEmail'>{director.correo}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row> 
        </div>


    </PrincipalContainer>

  );
}

export default Directorio;