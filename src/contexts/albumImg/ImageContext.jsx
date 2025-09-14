"use client";


import {createContext, useContext, useEffect, useState} from 'react';

const ImageContext = createContext();
export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("selectedImage");
      return saved ? JSON.parse(saved) : null;
    }
    return null;
  });

  useEffect(() => {
    if (selectedImage) {
      localStorage.setItem("selectedImage", JSON.stringify(selectedImage));
    } else {
      localStorage.removeItem("selectedImage");
    }
  }, [selectedImage]);


    return(
        <ImageContext.Provider value={{selectedImage, setSelectedImage}}>
            {children}
        </ImageContext.Provider>
    );
};