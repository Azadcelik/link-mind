import { createContext, useState } from "react";




export const EleIdContext = createContext()




export const EleIdProvider = ({children}) => { 

    const [elementImageId,setElementImageId] = useState(null)


    return (

       < EleIdContext.Provider value={{elementImageId,setElementImageId}}>
        {children}
        </EleIdContext.Provider >
    )
}