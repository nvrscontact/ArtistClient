'use client'
import React from 'react'
import {createContext, useContext, useEffect, useState} from 'react';

const ProductContext = createContext();

export function ProductProvider({children}) {
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('selectedProduct');
    if(saved) setSelectedProduct(JSON.parse(saved));
  }, [])

    useEffect(() => {
    if(selectedProduct) {
        localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct)); 
    }
  }, [selectedProduct]);


    return (
    <>
    <ProductContext.Provider value={{selectedProduct,setSelectedProduct}}>
        {children}
    </ProductContext.Provider>
    </>
  )
}

export function useProduct() {
    return useContext(ProductContext);
}


