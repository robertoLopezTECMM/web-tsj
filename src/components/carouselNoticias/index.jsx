import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {isMobile} from 'react-device-detect';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./index.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import useGetNoticias from '../../hooks/useGetNoticias';
import { Link } from 'react-router-dom';




const ItemNoticia = ({noticia}) =>{
    return(
        <Link to={{pathname:"/Noticia/"+noticia.pathTitulo}}>
            <div className='itemNoticiaContainer'>
                <div className='itemNoticiaTitleContainer'>
                    <p>{noticia.titulo}</p>
                </div> 
                <img style={{width:'100%', objectFit:'cover'}} src={noticia.imagenPrincipal}/>

            </div>
        </Link>

    )
}

export const CarouselNoticias = () => {
    const {noticias} = useGetNoticias() 
    const [localNoticias, setLocalNoticias] = useState([])



    useEffect(() => {
        var localNoticias=noticias;
        var reverseNoticias = [].concat(localNoticias).reverse()
        setLocalNoticias(reverseNoticias)
    }, [noticias])
    

  return (
    <>
      <Swiper
        slidesPerView={ isMobile ? 2 : 5}
        spaceBetween={5}
        slidesPerGroup={1}
        loop={false}
        loopFillGroupWithBlank={true}

        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {noticias.length>0 ? localNoticias.map(noticia =>{
            return(
                <SwiperSlide>
                    <ItemNoticia noticia={noticia}/>
                </SwiperSlide>
            )

        }):null}
            {/* <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide>
            <SwiperSlide>
                <ItemNoticia/>
            </SwiperSlide> */}
      </Swiper>
    </>
  )
}
