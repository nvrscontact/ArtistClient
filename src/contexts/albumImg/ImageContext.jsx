"use client";


import {createContext, useContext, useState} from 'react';

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({children}) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return(
        <ImageContext.Provider value={{selectedImage, setSelectedImage}}>
            {children}
        </ImageContext.Provider>
    )
}