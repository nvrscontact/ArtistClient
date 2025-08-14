import { LanguageProvider } from './languages/context/LanguageContext';


import { ImageProvider } from './albumImg/ImageContext.jsx'

export const GlobalContext = ({children}) => {
  return (
    <>
     <LanguageProvider>
        <ImageProvider>
            {children}
        </ImageProvider>
     </LanguageProvider>
     </>
  )
}