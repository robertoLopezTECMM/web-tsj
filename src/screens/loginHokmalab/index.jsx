import React from 'react'
import { PrincipalContainer } from '../../components/containers/principalContainer'
import './index.css'

export const LoginHokmalab = () => {
  return (
    <PrincipalContainer>
      <img className='loginLogoImg' src='https://tecmm.edu.mx/web-tsj-designs/logoFondoClaro.png'/>
      <form className='loginFormContainer' action="https://hokmalab.com/aula/login/index.php" method="post">
        <p>inicio de sesion para el diplomado habilidades y destrezas virtuales para docentes</p>
        <input placeholder='Usuario' type="text" id="username" name="username"/>
        <br/>
        <input placeholder='Contraseña' type="password" id="password" name="password"/>
        <br/>
        <button type="submit">INGRESAR</button>
      </form>
    </PrincipalContainer>
  )
}
