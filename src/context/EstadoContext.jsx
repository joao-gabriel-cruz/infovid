import  {createContext, useState } from "react";


export const EstadoContext = createContext();

function EstadoProvider({ children }){

    const [darkMode, setDarkMode] = useState(false);
    const [estado, setEstado] = useState();

    function setMode(){
        setDarkMode(!darkMode);
    }
 
     function selectEstado(param){
        setEstado(param)
    }

    return(
        <EstadoContext.Provider value={{selectEstado,estado, setMode, darkMode}}>
            {children}
        </EstadoContext.Provider>
    );
}
export default EstadoProvider;