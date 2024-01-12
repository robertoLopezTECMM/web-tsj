import React from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import { TopBanner } from '../../components/topBanner'
import './index.css'

export const Transparencia = () => {
  return (
    <PrincipalContainer>
        <TopBanner source={'https://tecmm.edu.mx/web-tsj-designs/topBanners/topBannerTransparencia.jpg'}/>
        
        <div className='linksTransparenciaContainer'>
            <a href='https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml?idEntidad=MTQ=&idSujetoObligado=MTM3OTE=#inicio' target='_blank'>
                <div style={{backgroundColor:'#54c98f'}} className='linkTransparencia'>
                    <p>Plataforma Nacional de Transparencia (SIPOT)</p>
                </div>
            </a>

            <a href='https://transparencia.info.jalisco.gob.mx/transparencia/organismo/312' target='_blank'>
                <div style={{backgroundColor:'#33179c'}} className='linkTransparencia'>
                    <p>Plataforma Estatal de Transparencia</p>
                </div>
            </a>

            <a href='https://transparencia.jalisco.gob.mx/informacion_fundamental/281' target='_blank'>
                <div style={{backgroundColor:'#ff4d63'}} className='linkTransparencia'>
                    <p>Sistema Integral de Transparencia</p>
                </div>
            </a>
        </div>
    </PrincipalContainer>
  )
}
