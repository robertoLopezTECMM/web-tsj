import React from 'react'
import {  Routes, Route, useNavigate, redirect } from "react-router-dom";
import { Admision } from '../screens/admision';
import { Careers } from '../screens/careers';
import Directorio from '../screens/directorio/directorio';
import Landing from '../screens/landing';
import Noticia from '../screens/Noticia/index.jsx';

import { PortalDenuncias } from '../screens/portalDenuncias';
import { LoginHokmalab } from '../screens/loginHokmalab';
import { Carrera } from '../screens/ofertaAcademica/carrera';
import { Unidades } from '../screens/unidades';
import QuienesSomos from '../screens/quienesSomos';
import { ContraloriaSocial } from '../screens/contraloriaSocial';
import { OfertaAcademicaByUnidad } from '../screens/ofertaAcademica/ofertaAcademicaByUnidad';
import { Transparencia } from '../screens/transparencia';

export const MainRouter = () => {
  return (
    <Routes>
    
        <Route path="/" element={<Landing />}/>
        <Route path="/OfertaAcademica" element={<Careers/>}/>
        <Route path="/Carreras/:campusId" element={<OfertaAcademicaByUnidad/>}/>
        <Route path='/admision' element={<Admision/>}/>
        <Route path='/directorio' element={<Directorio/>}/>
        <Route path='/portalDenuncias' element={<PortalDenuncias/>}/>
        <Route path="/Noticia/:noticiaNombre" element={<Noticia/>}/>
        <Route path="/diplomadoDocente" element={<LoginHokmalab/>}/>
        <Route path="/OfertaAcademica/:carreraId" element={<Carrera/>}/>
        <Route path="/UnidadesAcademicas" element={<Unidades/>}/>
        <Route path="/QuienesSomos" element={<QuienesSomos/>}/>
        <Route path="/ContraloriaSocial" element={<ContraloriaSocial/>}/>
        <Route path="/transparencia" element={<Transparencia/>}/>


        
    </Routes>
  )
}
