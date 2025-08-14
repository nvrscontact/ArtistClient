"use client";

import React, {useState,createContext} from 'react';
import es from '../i18n/es'
import de from '../i18n/de'
import en from '../i18n/en'
import fr from '../i18n/fr'

    const idiomas = {en,es,fr,de}
/* importo usestate y createcontext,
   también importo los archivos de los idiomas,
   y creo una variable de los idiomas. */


    export const LanguageContext = createContext()
/* creo una variable que se convierta en un Contexto */


/* creo el proveedor con parametro children,
creo una variable con estado actual y funcion actualizadora,
el cual estos dos parametros los cederé al contexto para leerlos,
 */ 
    export const LanguageProvider = ({ children }) => {
    const [idioma,setIdioma] = useState('en');

    const textos = idiomas[idioma];
/* creo una variable textos que representara el idioma al cual se deberan
traductir los textos actualmente, asigno la variable al mapa de lenguages y
busco el que coincida con el parámetro que tenga idioma  */

    return (
        <LanguageContext.Provider value={{idioma,setIdioma,textos}} >
            {children}
        </LanguageContext.Provider>
    )
}