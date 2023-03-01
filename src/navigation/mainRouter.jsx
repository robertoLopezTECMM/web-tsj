import React from 'react'
import {  Routes, Route, useNavigate, redirect } from "react-router-dom";
import { Admision } from '../screens/admision';
import { Careers } from '../screens/careers';
import Directorio from '../screens/directorio/directorio';
import Landing from '../screens/landing';
import { PortalDenuncias } from '../screens/portalDenuncias';

export const MainRouter = () => {
  return (
    <Routes>
    
        <Route path="/" element={<Landing />}/>
        <Route path="/OfertaAcademica" element={<Careers/>}/>
        <Route path='/admision' element={<Admision/>}/>
        <Route path='/directorio' element={<Directorio/>}/>
        <Route path='/portalDenuncias' element={<PortalDenuncias/>}/>
    </Routes>
  )
}
