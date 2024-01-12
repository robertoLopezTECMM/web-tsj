import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { PrincipalContainer } from '../../components/containers/principalContainer';
import parse from 'html-react-parser';
import './index.css'


const Noticia = () => {
    const [noticiaData, setNoticiaData] = useState({
        titulo:'',
        pathTitulo:'',
        contenido:[],
        imagenPrincipal:'',
        imagenesExtra:[],
        showInfo:'',
        noticias:'',
    })
    const {noticiaNombre} = useParams()

    console.log(noticiaNombre)

    useEffect(() => {

        const url = 'https://dashboard.tecmm.edu.mx/dashboardScript.php'
        axios.get(url, {params:{action:"getNoticias"}}).then(response => response.data)
        .then((data) => {
    
    
          for(var i=0; i<data.length; i++){
            if(data[i].pathTitulo == noticiaNombre){
              //console.log(JSON.parse(data[i].contenido))
              setNoticiaData({
                titulo:data[i].titulo,
                pathTitulo:data[i].pathTitulo,
                contenido:JSON.parse(data[i].contenido),
                imagenPrincipal:data[i].imagenPrincipal,
                imagenesExtra:JSON.parse(data[i].imagenesExtra),
                showInfo:"none",
                noticias:data,
              })
            }else{
    
            }
          }
    
        })

    }, [])


    // [
    //     {"id":0,"tipo":"parrafo","texto":"El pasado 30 de mayo de 2023 en las instalaciones que ocupa la DirecciÃ³n General de nuestra instituciÃ³n, se acordÃ³ la designaciÃ³n de tres nuevos directores para las Unidades AcadÃ©micas de Chapala, Tamazula y Tequila, misma que fue autorizada por unanimidad de los consejeros de la H. Junta de Gobierno, quienes revisaron las propuestas, para finalmente designar a estos nuevos directores:"},
    //     {"id":1,"tipo":"directorCard","texto":`<div style="text-align: center; background-color: pink; width:300px"> <img style="width:300px" src="https://cdn.dribbble.com/users/304574/screenshots/6222816/male-user-placeholder.png"> <h3 style="font-weight: bolder;">Eduardo Daniel Miramontes</h3> <h3 style="font-style:italic; font-weight: 300; margin: auto">Eduardo Daniel Miramontes</h3> </div>`},
    //     {"id":2,"tipo":"parrafo","texto":"Doctor en Ciencias en FÃ­sica, cuenta con mÃ¡s de 25 aÃ±os de trabajo en el Ã¡mbito de la educaciÃ³n superior como Director General en diversos campus de TecnolÃ³gico de Monterrey."},
    //     {"id":3,"tipo":"parrafo","texto":"Maestra en AdministraciÃ³n y GestiÃ³n Regional, tiene mÃ¡s de 10 aÃ±os de experiencia en el TecnolÃ³gico de Tamazula. Cuenta con una amplia experiencia laboral en el Ã¡mbito del emprendimiento y la innovaciÃ³n."},{"id":3,"tipo":"parrafo","texto":"Doctorante en DirecciÃ³n de Proyectos, colaborÃ³ desde el aÃ±o 2006 en el ITS de Tequila, tambiÃ©n se ha desempeÃ±ado en la DirecciÃ³n AcadÃ©mica de la UTZMG, y conoce ampliamente el Sistema TecnolÃ³gico de Jalisco."},
    //     {"id":4,"tipo":"parrafo","texto":"Sin duda, estos cambios atienden ante todo a la consolidaciÃ³n acadÃ©mica del TecnolÃ³gico Superior de Jalisco"}
    // ]
    
  return (
    <PrincipalContainer  showSquares={true}>
        <div className="noticiaContainer">

            <div className="noticiaData">
                <div className="titleContainer">
                    <h1 className="h1-tituloNoticia">{noticiaData.titulo}</h1>
                    <img className="img-imagenPrincipal" src={noticiaData.imagenPrincipal}/>
                </div>

                <div className="contenidoNoticia">
                    {noticiaData.contenido.map((it)=>(
                    it.tipo == "parrafo"?(
                        <p className="p-subtituloNoticia">{parse(it.texto)}</p>
                        
                    ):it.tipo === "directorCard"?(
                        
                        <div className='cardNewDirectorContainer'>
                            <img style={{width:"200px"}} src={it.imgDirector}/>
                            <h3>{it.nameDirector}</h3>
                            <h4>{it.puestoDirector}</h4>
                        </div>
                    )
                    :
                    (
                        <h2 className="h2-subtituloNoticia">{it.texto}</h2>
                    )
                    ))}
                </div>

            <div className="div-imagenesExtra">
                {noticiaData.imagenesExtra.map((it, key)=>(
                it == "Hubo un error al subir el archivo!"?(
                    <div>
                    </div>
                ):(
                    <img src={it}/>
                )
                ))}
            </div>
            </div>

            {/* <div className="noticiaTimeline">
            <h1>MAS NOTICIAS</h1>
            <div className="noticias">
                {this.state.noticias.map((it)=>(
                <div className="timelineItem">
                    <h1>{it.titulo}</h1>
                    <a>ver mas<i class="arrow right icon"></i></a>
                </div>
                ))}
            </div>
            </div> */}

</div>
    </PrincipalContainer>
    
  )
}

export default Noticia