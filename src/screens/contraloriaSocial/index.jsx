import axios from 'axios'
import React, {useState} from 'react'
import swal from 'sweetalert'
import { PrimaryButton } from '../../components/buttons'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import { SeparatorText } from '../../components/separators'
import { TopBanner } from '../../components/topBanner'
import './index.css'


export const ContraloriaSocial = () => {
    
    return (
        <PrincipalContainer>
            <TopBanner source={'https://tecmm.edu.mx/web-tsj-designs/topBanners/topBannerContraloriaSocial.jpg'}/>

            <img style={{width:'500px'}} src='https://tecmm.edu.mx/imagesReact/images/contraloriaSocial/BotonContraloria.jpg'/>
            
            <div className='infoContainer'>
                <h1>¿Qué es la Contraloría Social?</h1>
                <p>La Contraloría Social es un grupo de beneficiarios, que, de manera organizada, verificaran el cumplimiento de las metas y la correcta aplicación de los recursos públicos asignados a Programas Presupuestales con recursos federales.</p>
            </div>

            <div className='infoContainer'>
                <h1>¿Qué vigila la contraloría Social?</h1>
                <p>-Que se difunda la información suficiente, veraz y oportuna sobre la operación del programa. </p>
                <p>-Que los otorgamientos de los apoyos sean con calidad, calidez, eficiente, eficaz, oportuno y de manera transparente. </p>
                <p>-Que las autoridades competentes brinden atención a las quejas o denuncias, relacionadas al programa.</p>
            </div>

            <div className='infoContainer'>
                <h1>¿Qué es un Comité de Contraloría Social?</h1>
                <p>Las formas de organización social constituidas por los beneficiarios referidas en el artículo 67 del Reglamento de la Ley General de Desarrollo Social, que llevan a cabo el seguimiento, supervisión y vigilancia de la ejecución, cumplimiento de las metas y acciones comprometidas, así como de la correcta aplicación de los recursos asignados a los mismos.</p>
            </div>

            <div className='infoContainer'>
                <h1>Objetivo de los Comités de Contraloría Social.</h1>
                <p>Colaborar en forma VOLUNTARIA, ACTIVA y de manera representativa con organismos oficiales, seguimiento, supervisión y vigilancia de la ejecución, cumplimiento de las metas y acciones comprometidas en el Programa, así como de la correcta aplicación de los recursos asignados.</p>
            </div>

            <div className='infoContainer'>
                <h1>¿Cuáles son las funciones que deberán de cumplir los Comités de Contraloría Social?</h1>
                <p>-Representar los intereses y actuar como grupo de enlace entre la comunidad, las autoridades locales y autoridades centrales.</p>
                <p>-Vigilar el adecuado manejo de los recursos financieros y que cumplan con el objetivo para el que fueron otorgados.</p>
                <p>-Capturar y canalizar las Quejas o Denuncias a las áreas correspondientes.</p>
                <p>-Reportar cualquier anomalía que se presente durante el proceso de la ejecución y culminación de los recursos Financieros.</p>

            </div>

            <div className='infoContainer'>
                <h1>Medidas para promover la equidad de género entre hombres y mujeres en la integración de los Comités.</h1>
                <p>Dentro del Programa de Servicios de Educación Superior y Posgrado “E-010”, mismo que se rige por los Lineamientos para la Operación de los Estudios de Posgrado en el Tecnológico Nacional de México “TecNM”, no establece el principio de Equidad de Género. Mismo que se pondrá en función con el que se indica en la Guía Operativa de Contraloría Social 2023 del E-010, que se ubica en el punto II, El procedimiento y formatos para la constitución y registro de los Comités, en el inciso g).- El programa federal se ejecute en un marco de igualdad entre mujeres y hombres.</p>
                <p>Por lo anterior, podemos mencionar que para la formación de los comités deberán de ser de manera equitativa y dar cabal cumplimiento al principio de Equidad de Género.</p>
            </div>

            <div className='infoContainer'>
                <h1>Documentos de interes</h1>
                <a target='_blank' href='https://tecmm.edu.mx/documentos/contraloriaSocial/2023/programaE010.pdf'>
                    <p>Programa E-010</p>
                </a>

                <a  target='_blank' href='https://tecmm.edu.mx/documentos/contraloriaSocial/2023/programaAnualProep.pdf'>
                    <p>Programa anual de trabajo PROEP 2023</p>
                </a>

                <a  target='_blank' href='https://tecmm.edu.mx/documentos/contraloriaSocial/2023/formatoQuejas.pdf'>
                    <p>Formato para quejas, denuncias o peticiones</p>
                </a>
            </div>
        </PrincipalContainer>
    )  
    

}
