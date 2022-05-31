import React, { useState } from "react";
import divisor from '../images/divisor.svg'
import random from '../images/random.svg'
import '../App.css';
import CajaTexto from "./cajatexto";

export default function Generador(){
    const [mensaje, setMensaje]=useState();

    const manejarMensajes = async (e) => {
    
        try{
          let url=`https://api.adviceslip.com/advice`;
        let datos= await fetch(url, {
            "method": 'GET'
        });
        let dato = await datos.json();
        setMensaje(dato);
        console.log(mensaje)
    }
    catch(err){}
}
        

    return(
      <div className='contenedor-consejos'>
        
         {mensaje ? (<CajaTexto
         id={mensaje.slip.id}
         texto={mensaje.slip.advice}
         />)
         :null
         }
          
        <img src={divisor} alt='divisor' />
        <div onClick={manejarMensajes} className='mensajeBoton'>
        <img src={random} alt='random' /></div>
      </div>
    );
}
