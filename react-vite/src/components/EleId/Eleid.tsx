
import React, {ReactNode,createContext,useState} from "react";





interface EleIdProviderProps { 
    children: ReactNode;
}



interface EleIdContextType { 
    elementImageId: number,
    setElementImageId : (id: number | ((prevId: number)=> number)) => void
}

export const EleIdContext = createContext<EleIdContextType>({ 
     elementImageId: 0,
     setElementImageId: () => {} 
    });

export const EleIdProvider = ({children}: EleIdProviderProps) => { 

    const [elementImageId,setElementImageId] = useState<number>(0);
    console.log("what is going on in eleid ot figure out",{elementImageId,setElementImageId})

    
    
    
    return (
        <EleIdContext.Provider value = {{elementImageId,setElementImageId}}>
        {children}
        </EleIdContext.Provider>

    )
    


}



// import { createContext, useState } from "react";
// export const EleIdContext = createContext()

// export const EleIdProvider = ({children}) => { 

//     const [elementImageId,setElementImageId] = useState(0)


//     return (

//        < EleIdContext.Provider value={{elementImageId,setElementImageId}}>
//         {children}
//         </EleIdContext.Provider >
//     )
// }