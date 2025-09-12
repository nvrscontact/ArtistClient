import { LanguageProvider } from './languages/context/LanguageContext';
import { ProductProvider } from './data/DataContext';
import { ImageProvider } from './albumImg/ImageContext.jsx'

export const GlobalContext = ({children}) => {
  return (
    <>
     <LanguageProvider>
        <ImageProvider>
          <ProductProvider>
            {children}
          </ProductProvider>
        </ImageProvider>
     </LanguageProvider>
     </>
  )
}