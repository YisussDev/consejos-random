import React, { useEffect, useState } from "react";
import '../App.css'
import divisor from '../images/divisor.svg'
import random from '../images/random.svg'
import '../App.css';
import CajaTexto from "./cajatexto";

export default function Generador(){
  useEffect(()=>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())  
    .then(res2 =>setMensaje(res2))
    .catch(err => console.log(err))
  },[])

    const [mostrarMensaje, setMostrarMensaje]=useState(false);
    const [mensaje, setMensaje]=useState(false);
    const [preloader, setPreloader]=useState(true);

    setTimeout(() => {
      setPreloader(false)
      setMostrarMensaje(true)
    }, 2000);

    
    const manejarMensajes = () => {
      fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())  
    .then(res2 =>{
      setMostrarMensaje(false);
      setPreloader(true);
      setMensaje(res2)})
    .catch(err => console.log(err))
    }
    return(
      <>
      <div className='contenedor-consejos'>
         {preloader ? (<div id="preloader"></div>)
         :(null)}
         {mostrarMensaje ? (<CajaTexto
         id={mensaje.slip.id}
         texto={mensaje.slip.advice}
          />)
         :(null)}
          
        <img src={divisor} alt='divisor' id="divisor"/>
        <button onClick={ manejarMensajes } className='mensajeBoton'>
        <img src={random} alt='random' /></button>
      </div>
      </>
    );
}


git config --global user.email "you@example.com"
  git config --global user.name "Your Name"