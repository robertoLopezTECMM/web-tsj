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
                        
                    ):(
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