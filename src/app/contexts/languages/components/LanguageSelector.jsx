"use client";

import React, {useContext, useState} from 'react';
import {LanguageContext} from '../context/LanguageContext';
/* importo un hook para usar el contexto y el contexto que creé */

function LanguageSelector() {

  const usaFlag = '/usaFlag.svg'
  const franceFlag = '/franceFlag.svg'
  const germanyFlag = '/germanyFlag.svg'
  const spainFlag = '/spainFlag.svg'

  const {textos,idioma,setIdioma} = useContext(LanguageContext);
/* creo las variables que pretendía consumir anteriormente con el contexto */

   const idiomasDisponibles = [
        {codigo: 'es', nombre:'Español',bandera:spainFlag},
        {codigo: 'de', nombre:'Deutsch',bandera:germanyFlag},
        {codigo: 'fr', nombre:'Français',bandera:franceFlag},
        {codigo: 'en', nombre:'English',bandera:usaFlag},
    ]
/* creo un label con el texto y bandera segun el lenguaje que hay en el codigo  */

    let idiomaActual = null;

    /* idioma actual aun no definido */

    for(let i = 0; i < idiomasDisponibles.length; i++){
        if(idiomasDisponibles[i].codigo === idioma){
            idiomaActual = idiomasDisponibles[i]}}
/* buscar el objeto del idioma recorriendo el array del Label */
/* empezamos a recorrer en 0 hasta menos del máximo de objetos,
   pero si el codigo del objeto de IdiomasDisponible es igual a idioma entonces
   el i */

  const [menuAbierto,setMenuAbierto] = useState(false);

   function alternarMenu(){
        setMenuAbierto(!menuAbierto);
    }

    function seleccionarIdioma(codigoIdioma){
        setIdioma(codigoIdioma);
        setMenuAbierto(false);
    }
/* recibe el argumento "codigoIdioma" que el usuario seleccionara en el menú "es/en",
   se recibe desde la llamada onClick, se recibe el codigo "en" y luego se actualiza la función
   setIdioma al nuevo código que se presionó y solo luego se cierra el MenuAbierto.
*/



  return (
    <div>
        
     <button onClick={alternarMenu} className='flex items-center gap-3'>
      {/* usuario hace click: onclick llama alternarmenu, invierte el valor de menuAbierto 
      (que en primera instancia estaba cerrado(false)),
      ahora menuAbierto es true y la condición menuAbierto && ... se cumple y muestra el div. */}
        <span className='text-[12px] lg:text-sm inter-200 text-white/70'>{idiomaActual.nombre}</span> 
        <img src={idiomaActual.bandera} alt='' className='h-4 lg:h-5' />
    </button>


    {menuAbierto && (

    <div className='absolute right-0 top-12 z-2 bg-black/60 backdrop-blur-xl w-full inter-200 pr-2'> {idiomasDisponibles.map((idioma) => (  
        /* abajo se crea una sección del idioma que tiene incrustada el idioma.codigo
        por lo que al clickar en ella tambien clicamos en el codigo del idioma.  */
        <section key={idioma.codigo} onClick={() => seleccionarIdioma(idioma.codigo)} className='flex flex-col justify-end '>
            <ul className='flex gap-2 items-center text-white/60  py-4 pr-2 w-full justify-end border-b border-white/10'>
                <span className='text-[14px] lg:text-md '>{idioma.nombre} </span>
                <img src={idioma.bandera} alt="" className='h-4' />
            </ul>
        </section> 
    ))}
    </div>)}   

    </div>
  )
}

export default LanguageSelector