import { createContext, useState } from "react";

export const  SatyamContext = createContext()


export default ({children})=>{
    const [val, setVal] = useState()
    return (
        <SatyamContext.Provider value = {{val, setVal}}>{children}</SatyamContext.Provider>
    
    )
}




