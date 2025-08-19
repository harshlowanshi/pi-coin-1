import { createContext, useReducer } from "react";
import PiReducer from "./PiReducer";

const PiContext= createContext()

export const PiProvider=({children})=>{

    const initialState={
        password:[
            "1234"
        ]
    }

    const [state, dispatch]=useReducer(PiReducer,initialState)

    return(
        <PiContext.Provider 
        value={{...state,dispatch}} >
            {children}
        </PiContext.Provider>
    )
}

export default PiContext