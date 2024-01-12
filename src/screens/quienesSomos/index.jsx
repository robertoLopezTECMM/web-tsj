
import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Tada from 'react-reveal/Tada';

import './index.css';
import { PrincipalContainer } from '../../components/containers/principalContainer';



class SectionLeft extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div id="morado" className="div-seccionQuienesSomos">
        <Fade right>
          <img className="img-seccionQuienesSomos" src={this.props.imagen}/>
        </Fade>

        <Fade left>
          <div className="div-textoSeccionQuienesSomos">
            <h1>{this.props.titulo}</h1>
            <p>{this.props.texto1}</p>
            <p>{this.props.texto2}</p>
            <p>{this.props.texto3}</p>
            <p>{this.props.texto4}</p>
            <p>{this.props.texto5}</p>
            <p>{this.props.texto6}</p>
          </div>
        </Fade>
      </div>
    );
  }
}

class SectionRight extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){
    return(
      <div id="verde" className="div-seccionQuienesSomos">
        <Fade right>
          <div className="div-textoSeccionQuienesSomos">
            <h1>{this.props.titulo}</h1>

              <p>{this.props.texto1}</p>
              <p>{this.props.texto2}</p>
              <p>{this.props.texto3}</p>
              <p>{this.props.texto4}</p>
              <p>{this.props.texto5}</p>
              <p>{this.props.texto6}</p>
              <p>{this.props.texto7}</p>

          </div>
        </Fade>

        <Fade left>
          <img className="img-seccionQuienesSomos" src={this.props.imagen}/>
        </Fade>
      </div>
    );
  }
}


class QuienesSomos extends Component {



  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {


    return (
        <PrincipalContainer >


        <SectionLeft titulo="¿Quiénes Somos?"
                      texto1="Fundado el 23 de agosto del 2016, por decreto de creación número 25535/LX/15, aprobado por el H. Congreso del Estado de Jalisco, crea el Instituto Tecnológico José Mario Molina Pasquel y Henríquez como organismo público descentralizado del Gobierno del Estado con personalidad jurídica y patrimonio propio, el cual tiene la finalidad de prestar servicio de educación superior tecnológica en el Estado de Jalisco, adscrito al Tecnológico Nacional de México y sectorizado a la Secretaría de Innovación Ciencia y Tecnología"
                      texto2="El Instituto Tecnológico José Mario Molina Pasquel y Henríquez reconocido por sus siglas TecMM. Nombre asignado en honor al Ingeniero Químico galardonado en el año 1995 con el Premio Nobel de Química por su investigación de los estudios relacionados con el impacto de la Capa de Ozono."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos1.jpg"/>

        <SectionRight titulo="INICIATIVA"
                      texto1="La iniciativa de crear el TecMM, fue unificar a los 13 Institutos Tecnológicos Superiores, en un solo Organismo Público Descentralizado, con una Dirección General y 13 Unidades Académicas en el Estado de Jalisco. Con el propósito de eficientar la estructura académica y administrativa, respondiendo a los objetivos del Plan Nacional de Desarrollo y del Plan Estatal de Desarrollo de Jalisco, que establece el compromiso de un “México con educación de calidad”."
                      texto2="Nuestra Institución es heredera de una brillante y firme historia de vida institucional con 20 años de creación en el Estado de Jalisco, adscrito al Tecnológico Nacional de México, siendo el más grande de Iberoamérica con 600,000 mil estudiantes, 254 institutos en todo el país, teniendo presencia en más de 600 localidades en los 32 estados del país."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos2.jpg"/>

        <SectionLeft titulo="RED TECMM"
                      texto1="En Jalisco somos una red de trece unidades académicas y tres extensiones, contamos con una cobertura de Educación Superior en once de las doce regiones del Estado de Jalisco con más de 15,000 estudiantes, que nos convierte en la segunda Institución en el Estado lo que representa el 9.74% de la matrícula de Educación Superior, con 16 ingenierías, 5 licenciaturas, y 2 posgrados."
                      texto2="Las 13 Unidades Académicas del Estado de Jalisco del Instituto Tecnológico José Mario Molina Pasquel y Henríquez son: Arandas, Chapala, Cocula, El Grullo, La Huerta, Lagos de Moreno, Mascota, Puerto Vallarta, Tala, Tamazula, Tequila, Zapopan y Zapotlanejo."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos4.jpg"/>

        <SectionRight titulo="MISIÓN"
                      texto1="“Ofrecer educación superior tecnológica de excelencia en el estado de Jalisco, bajo un modelo de operación en red, mediante modelos educativos innovadores, flexibles, que incluyan oferta educativa en ambientes virtuales y que sean acordes a las necesidades regionales, con apertura a esquemas de colaboración con otras instituciones”."
                      texto2=""
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos6.jpg"/> 

        <SectionLeft titulo="VISIÓN"
                      texto1="• Somos una institución reconocida por nuestra oferta educativa tecnológica innovadora, de excelencia y pertinente para el estado de Jalisco, con alta eficiencia terminal."
                      texto2="• Estamos altamente vinculados con los sectores productivos de las regiones en cada una de las unidades académicas de la red, teniendo altos niveles de inserción de nuestros egresados y atracción de ingresos propios mediante un amplio portafolio de servicios."   
                      texto3="• Contamos con capital humano comprometido, altamente competitivo, eficiente y actualizado. "
                      texto4="• Contamos con procesos efectivos y eficientes, soportados por un Sistema de Gestión Integral, apoyado en tecnologías digitales, con una normatividad dinámica y actualizada."
                      texto5="• Tenemos infraestructura física y tecnológica adecuada y espacios complementarios que permiten el desarrollo integral de la comunidad académica y la atención a nuestros usuarios externos."
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos7.jpg"/>

        <SectionRight titulo="VALORES"
                      texto1="ESPÍRITU DE SERVICIO:
                      Anteponer siempre el bien del TecMM al propio, dando a
                      nuestras labores un sentido de compromiso desinteresado
                      en beneficio de los demás."
                      texto2="ESPÍRITU DE COLABORACIÓN:
                      Tomar conciencia de las necesidades de nuestra comunidad
                      y mostrar la voluntad de ayudar para contribuir a cubrir esas
                      necesidades."
                      texto3="PROACTIVIDAD:
                      Para tener una actitud que acompañe a las personas para
                      hacerse responsables de ideas originales y tomar la iniciativa
                      en proyectos que conlleven un avance en algún aspecto
                      del TecMM."
                      texto4="INNOVACIÓN:
                      Un TecMM que cambia, evoluciona, hace cosas nuevas,
                      ofrece nuevos programas, que adopta o pone a punto,
                      nuevas formas de integrarse a su entorno."
                      texto5="CREATIVIDAD:
                      Una comunidad con ideas que aportan valor y crear algo
                      diferente en algún aspecto relevante."
                      texto6="RESILENCIA:
                      Afrontar la adversidad, cualquiera que sea esta, una comunidad tecnologica con mayor equilibrio emocional frente a las situaciones adversas."
                      texto7="FLEXIBILIDAD:
                      Es multiplicar resultados, estrechar nuestros vinculos al efectuar tareas complementarias y asi contribuir al desarrollo de nuestro TecMM"
                      imagen="http://tecmm.edu.mx/imagesReact/images/quienesSomos/quienesSomos5.jpg"/>


      </PrincipalContainer>
    );
  }
}

export default QuienesSomos
