import React, { useState } from "react";
import '../App.css'
import divisor from '../images/divisor.svg'
import random from '../images/random.svg'
import '../App.css';
import CajaTexto from "./cajatexto";

export default function Generador(){


    const inicioPl = () =>{
      let ct=document.getElementById('contenedorT');
      ct.style='display: none';
      let pl=document.getElementById('preloader');
      pl.style='display:block';

    }
    const finPl = () =>{
      let ct=document.getElementById('contenedorT');
      ct.style='display: block';
      let pl=document.getElementById('preloader');
      pl.style='display: none';
    }
    const [mensaje, setMensaje]=useState({slip: { id: 1, advice: "Remember that spiders are more afraid of you, than you are of them."}});

    const manejarMensajes = async (e) => {
       
    
        try{

          inicioPl();
        
          
          let url=`https://api.adviceslip.com/advice`;
        let datos= await fetch(url, {
            "method": 'GET'
        });
        let dato = await datos.json();
        setMensaje(dato);

        finPl();
        
    }
    catch(err){}
   
}



        

    return(
      <>
      <div className='contenedor-consejos'>
        <div id='preloader'></div>
         {mensaje ? (<CajaTexto
         id={mensaje.slip.id}
         texto={mensaje.slip.advice}
         />)
         :null
         }
          
        <img src={divisor} alt='divisor' id="divisor"/>
        <button onClick={manejarMensajes} className='mensajeBoton'>
        <img src={random} alt='random' /></button>
      </div>
      </>
    );
}
