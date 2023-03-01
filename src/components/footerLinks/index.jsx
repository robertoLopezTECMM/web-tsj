import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './index.css'
import {isMobile} from 'react-device-detect';


export const FooterLinks = () => {
    if(isMobile){
        return(
            <div className='footerLinksContainerMobile'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/quienesSomos">IDENTIDAD</a>
                <a class="tag" target="_blank" href="https://sicyt.jalisco.gob.mx/" >OFERTA ACADÉMICA</a>
                <a class="tag" target="_blank" href="http://tecmm.edu.mx/calendarios/CALENDARIO ESCOLAR 22-23.pdf">CALENDARIO</a>
                <a class="tag" target="_blank" href="http://tecmm.edu.mx/normatividad">NORMATIVIDAD</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/transparencia">TRANSPARENCIA</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/unidadesAcademicas">UNIDADES ACADÉMICAS</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/modeloAcademico">MODELO ACADÉMICO</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/rectoria">ORGANIGRAMA</a>
                <a class="tag" target="_blank" href="https://developer.tecmm.mx:3318/files/Programa-Anual-Desarrollo-Archivistico-2023.pdf">{'PROGRAMA ANUAL DE DESARROLLO ARCHIVISTICO'}</a>
                <a class="tag" target="_blank" href="https://www.conacyt.mx">CONACYT</a>
                <a class="tag" target="_blank" href="http://187.174.80.181/compras/">LICITACIONES VENCIDAS</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/contraloriaSocial">CONTRALORÍA SOCIAL</a>
                <a class="tag" target="_blank" href="https://tecnm.occ.com.mx/Bolsa_Trabajo">BOLSA DE TRABAJO</a>
                <a class="tag" target="_blank" href="/">POSGRADOS</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/juntasGobierno">JUNTAS DE GOBIERNO</a>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/patentes">PATENTES</a>
            </div>
        )
    }
    return (
        <div className='footerLinksContainer'>
            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/quienesSomos">IDENTIDAD</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="https://sicyt.jalisco.gob.mx/" >OFERTA ACADÉMICA</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="http://tecmm.edu.mx/calendarios/CALENDARIO ESCOLAR 22-23.pdf">CALENDARIO</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="http://tecmm.edu.mx/normatividad">NORMATIVIDAD</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/transparencia">TRANSPARENCIA</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/unidadesAcademicas">UNIDADES ACADÉMICAS</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/modeloAcademico">MODELO ACADÉMICO</a>
                <br/>
                <br/>
                <br/>
                <a style={{fontSize:'1.1vh'}} class="tag" target="_blank" href="https://developer.tecmm.mx:3318/files/Programa-Anual-Desarrollo-Archivistico-2023.pdf">{'PROGRAMA ANUAL DE DESARROLLO ARCHIVISTICO'}</a>

            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/rectoria">ORGANIGRAMA</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="https://www.conacyt.mx">CONACYT</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="http://187.174.80.181/compras/">LICITACIONES VENCIDAS</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/contraloriaSocial">CONTRALORÍA SOCIAL</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://tecnm.occ.com.mx/Bolsa_Trabajo">BOLSA DE TRABAJO</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="/">POSGRADOS</a>
            </div>

            <div className='columnTestContainer'>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/juntasGobierno">JUNTAS DE GOBIERNO</a>
                <br/>
                <br/>
                <br/>
                <br/>
                <a class="tag" target="_blank" href="https://www.tsj.tecmm.edu.mx/patentes">PATENTES</a>
            </div>
        </div>
    )
}
