import axios from 'axios'
import React, {useState} from 'react'
import swal from 'sweetalert'
import { PrimaryButton } from '../../components/buttons'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import { SeparatorText } from '../../components/separators'
import { TopBanner } from '../../components/topBanner'
import './index.css'


const TypeDenunciaComponent = ({titulo, description, onChangeTypeDenuncia}) =>{

    return(
        <div className='typeDenunciasComponentContainer'>
            <h1>{titulo}</h1>
            <p>{description}</p>
            <PrimaryButton onClick={onChangeTypeDenuncia} text='Crear Denuncia' color='#54c98f'/>
        </div>
    )

}

export const PortalDenuncias = () => {
    const [typeDenuncia, setTypeDenuncia] = useState('')
    const [datosDenunciaOic, setDatosDenunciaOic] = useState({
        tipoDenuncia:"denunciaOmision",

        nombreDemandante:'',
        puestoDemandante:'',
        telefonoDemandante:'',
        correoDemandante:'',
        domicilioDemandante:'',

        nombreDemandado:'',
        cargoDemandado:'',
        unidadDemandado:'',

        fechaHechos:'',
        horaHechos:'',
        lugarHechos:'',
        frecuenciaHechos:'',
        hechos:'',

        nombreTestigo:'',
        domicilioTestigo:'',
        telefonoTestigo:'',
        correoTestigo:'',
        entidadTestigo:'',
        cargoTestigo:''
    })

    const [datosDenunciaComiteEtica, setDatosDenunciaComiteEtica] = useState({
        tipoDenuncia:"denunciaAcoso",
        motivoDenuncia:'',

        nombreDenunciante:'',
        puestoDenunciante:'',
        telefonoDenunciante:'',
        eMailDenunciante:'',
        domicilioDenunciante:'',

        nombreDenunciado:'',
        puestoDenunciado:'',
        dependenciaDenunciado:'',

        fechaHechos:'',
        horaHechos:'',
        lugarHechos:'',
        frecuenciaHechos:'',
        descripcionHechos:'',

        nombreTestigo:'',
        domicilioTestigo:'',
        telefonoTestigo:'',
        eMailTestigo:'',
        dependenciaTestigo:'',
        cargoTestigo:''
    })

    const sendDenunciaOmision = () => {
        var datosDenuncia = JSON.stringify(datosDenunciaOic);

        axios.post('http://tecmm.edu.mx/receptorDenuncias.php', datosDenuncia)
        .then(function (response) {
            swal("Éxito!", "Tu denuncia se envió con éxito", "success").then(()=>{
                setTypeDenuncia('')
            })
        })
        .catch(function (error) {
          alert("Tu Denuncia No Fue Enviada");
        });
    }

    const sendDenunciasComiteEtica = () =>{
        var datosDenuncia = JSON.stringify(datosDenunciaComiteEtica);

        axios.post('http://tecmm.edu.mx/receptorDenuncias.php', datosDenuncia)
        .then(function (response) {
            swal("Éxito!", "Tu denuncia se envió con éxito", "success").then(()=>{
                setTypeDenuncia('')
            })
        })
        .catch(function (error) {
          alert("Tu Denuncia No Fue Enviada");
        });
    }

    if(typeDenuncia === 'denunciaOmision'){
        return(
            <PrincipalContainer>
                <div className='formDenunciaComiteEtica'>
                    <p className='problemDecription'> En caso de algún problema con el formulario, favor de descargar el formato de denuncia <a href="http://tecmm.edu.mx/documentos/formatos-denuncias/formato-denuncia-acoso.docx">aquí</a> y enviar directamente al correo: <a href="mailto:denuncia@tecmm.edu.mx">denuncia@tecmm.edu.mx</a> </p>
                    
                    <br/>
                    
                    <SeparatorText text='Datos de la persona que presenta la denuncia'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, nombreDemandante:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput'onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, puestoDemandante:e.target.value})} placeholder='Puesto o area donde labora'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, telefonoDemandante:e.target.value})} placeholder='Teléfono de contacto'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, correoDemandante:e.target.value})} placeholder='Correo electrónico'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, domicilioDemandante:e.target.value})} placeholder='Domicilio'/>
                    </div>

                    <br/>
                    <br/>

                    <SeparatorText text='Datos del servidor(a) público contra quien se presenta la denuncia'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, nombreDemandado:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, cargoDemandado:e.target.value})} placeholder='Cargo o puesto'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, unidadDemandado:e.target.value})} placeholder='Unidad academica en la que se desempeña'/>
                    </div>


                    <br/>
                    <br/>

                    <SeparatorText text='Declaración de los hechos'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, fechaHechos:e.target.value})} placeholder='Fecha en que ocurrieron los hechos'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, horaHechos:e.target.value})} placeholder='Hora'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, lugarHechos:e.target.value})} placeholder='Lugar'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, frecuenciaHechos:e.target.value})} placeholder='Frecuencia de los hechos'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <textarea rows={5} className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, hechos:e.target.value})} placeholder='Describa los hechos brevemente'/>
                    </div>

                    <br/>
                    <br/>

                    <SeparatorText text='Datos de una persona que haya sido testido de los hechos'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, nombreTestigo:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, domicilioTestigo:e.target.value})} placeholder='Domicilio'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, telefonoTestigo:e.target.value})} placeholder='Telefono'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaOic({...datosDenunciaOic, correoTestigo:e.target.value})} placeholder='Correo electrónico'/>
                    </div>


                    <br/>
                    <br/>

                    <PrimaryButton color='#54c98f' text='Enviar' onClick={()=>sendDenunciaOmision()}/>
                    &nbsp;
                    <PrimaryButton color='#ff4d63' text='Cancelar' onClick={()=>setTypeDenuncia('')}/>
                </div>

            </PrincipalContainer>
        )
    }

    if(typeDenuncia === 'comiteEtica'){
        return(
            <PrincipalContainer>
                <div className='formDenunciaComiteEtica'>
                    <p className='problemDecription'> En caso de algún problema con el formulario, favor de descargar el formato de denuncia <a download href="http://tecmm.edu.mx/formatoDenunciaComiteEtica.pdf">aquí</a> y enviar directamente al correo: <a href="mailto:quejascomite.etica@tecmm.edu.mx">quejascomite.etica@tecmm.edu.mx</a> </p>
                    
                    <br/>
                    
                    <SeparatorText text='Datos de la persona que presenta la denuncia'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, motivoDenuncia:e.target.value})} placeholder='Motivo de denuncia (acoso sexual, Hostigamiento, Bullying)'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, nombreDenunciante:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput'onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, puestoDenunciante:e.target.value})} placeholder='Puesto o area donde labora'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, telefonoDenunciante:e.target.value})} placeholder='Teléfono de contacto'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, eMailDenunciante:e.target.value})} placeholder='Correo electrónico'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, domicilioDenunciante:e.target.value})} placeholder='Domicilio'/>
                    </div>

                    
                    <p className='advertenciaAnonimato'>ADVERTENCIA: A LA PERSONA QUE DESEE CONSERVAR EL ANONIMATO, SÓLO PODRÁ ENTERARSE DEL CURSO DE LA DENUNCIA PRESENTADA A TRAVÉS DEL SEGUIMIENTO QUE ELLA MISMA DÉ A LAS SESIONES DEL COMITÉ.</p>

                    <br/>
                    <br/>

                    <SeparatorText text='Datos del servidor(a) público contra quien se presenta la denuncia'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, nombreDenunciado:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, puestoDenunciado:e.target.value})} placeholder='Cargo o puesto'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, dependenciaDenunciado:e.target.value})} placeholder='Unidad academica en la que se desempeña'/>
                    </div>


                    <br/>
                    <br/>

                    <SeparatorText text='Declaración de los hechos'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, fechaHechos:e.target.value})} placeholder='Fecha en que ocurrieron los hechos'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, horaHechos:e.target.value})} placeholder='Hora'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, lugarHechos:e.target.value})} placeholder='Lugar'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, frecuenciaHechos:e.target.value})} placeholder='Frecuencia de los hechos'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <textarea rows={5} className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, descripcionHechos:e.target.value})} placeholder='Describa los hechos brevemente'/>
                    </div>

                    <br/>
                    <br/>

                    <SeparatorText text='Datos de una persona que haya sido testido de los hechos'/>
                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, nombreTestigo:e.target.value})} placeholder='Nombre completo'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, domicilioTestigo:e.target.value})} placeholder='Domicilio'/>
                    </div>

                    <div className='twoInputsContainer'>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, telefonoTestigo:e.target.value})} placeholder='Telefono'/>
                        <input className='formDenuncaInput' onChange={(e)=>setDatosDenunciaComiteEtica({...datosDenunciaComiteEtica, eMailTestigo:e.target.value})} placeholder='Correo electrónico'/>
                    </div>


                    <br/>
                    <br/>

                    <PrimaryButton color='#54c98f' text='Enviar' onClick={()=>sendDenunciasComiteEtica()}/>
                    &nbsp;
                    <PrimaryButton color='#ff4d63' text='Cancelar' onClick={()=>setTypeDenuncia('')}/>
                </div>
            </PrincipalContainer>
        )
    }

    else{
        return (
            <PrincipalContainer>
                <TopBanner source={'https://tecmm.edu.mx/web-tsj-designs/topBanners/topBannerDenuncias.jpg'}/>
                {/* <div className='topHeaderContainer'>
                    <h1>Directorio</h1>
                </div> */}
                <div>
                    <TypeDenunciaComponent onChangeTypeDenuncia={()=>setTypeDenuncia('comiteEtica')} titulo='Denuncia Ante el Comité de Ética' description={'Denuncias sobre hechos contrarios a los principios y valores que rigen el servicio público y que se encuentran previstos en el Código de Ética y Reglas de Integridad para los Servidores Públicos de la Administración Pública del Estado de Jalisco y/o Código de Conducta del Instituto Tecnológico José Mario Molina Pasquel y Henríquez'}/>
                    {/* <br/>
                    <TypeDenunciaComponent titulo='Denuncia Ante el Organo Interno de Control' description={'El Órgano de Control del Instituto es responsable de vigilar el manejo y la aplicación de los recursos públicos, así como evaluar tanto su desempeño general como el de sus funciones en particular.'}/> */}
                    <br/>
                    <TypeDenunciaComponent onChangeTypeDenuncia={()=>setTypeDenuncia('denunciaOmision')} titulo='Denuncia por actos u omisiones cometidas por servidoras y servidores públicos' description={'Si has sufrido o presenciado actos que vayan en contra de dichas normas tales como: acoso laboral, abuso de poder, atropello de derechos humanos discriminación cultural, sexual, religiosa, étnica, o de cualquier índole, denuncia aquí'}/>
                </div>
            </PrincipalContainer>
        )  
    }

}
