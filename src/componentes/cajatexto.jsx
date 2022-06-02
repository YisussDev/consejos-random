import React from "react";
import '../App.css'
export default function CajaTexto({texto, id}){


    return(
       <div>
          <h2> ADVICE #{id} </h2>
        <div className='contenedor-texto' id="contenedorT">
            "{texto}"
        </div> 
       </div>
        
    );
}