import React from 'react'
import { PrimaryButton } from '../../components/buttons'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import { TopBanner } from '../../components/topBanner'
import './index.css'


const TypeDenunciaComponent = ({titulo, description, typeDenuncia}) =>{

    return(
        <div className='typeDenunciasComponentContainer'>
            <h1>{titulo}</h1>
            <p>{description}</p>
            <PrimaryButton text='Crear Denuncia' color='#54c98f'/>
        </div>
    )

}

export const PortalDenuncias = () => {
  return (
    <PrincipalContainer>
        <TopBanner source={'https://developer.tecmm.mx/web-tsj-designs/topBanners/topBannerDenuncias.jpg'}/>
        {/* <div className='topHeaderContainer'>
            <h1>Directorio</h1>
        </div> */}
        <div>
            <TypeDenunciaComponent titulo='Denuncia Ante el Comité de Ética' description={'Denuncias sobre hechos contrarios a los principios y valores que rigen el servicio público y que se encuentran previstos en el Código de Ética y Reglas de Integridad para los Servidores Públicos de la Administración Pública del Estado de Jalisco y/o Código de Conducta del Instituto Tecnológico José Mario Molina Pasquel y Henríquez'}/>
            {/* <br/>
            <TypeDenunciaComponent titulo='Denuncia Ante el Organo Interno de Control' description={'El Órgano de Control del Instituto es responsable de vigilar el manejo y la aplicación de los recursos públicos, así como evaluar tanto su desempeño general como el de sus funciones en particular.'}/> */}
            <br/>
            <TypeDenunciaComponent titulo='Denuncia por actos u omisiones cometidas por servidoras y servidores públicos' description={'Si has sufrido o presenciado actos que vayan en contra de dichas normas tales como: acoso laboral, abuso de poder, atropello de derechos humanos discriminación cultural, sexual, religiosa, étnica, o de cualquier índole, denuncia aquí'}/>
        </div>
    </PrincipalContainer>

  )
}
