import {createContext } from "react";
import { useReducer } from "react";

export const Context = createContext()

const Provider = ({children})=>{

const Reduce = (state, action) =>{

switch(action.type){

case 'acender':
return {acesso:true};

case 'apagar':// tipo da ação
return {acesso:false}; // estado

default:
return state;

}

}

const [state, dispatch] = useReducer(Reduce, {acesso:false})

return(

<Context.Provider value={{state,dispatch}}>

{children}

</Context.Provider>

)

}

export default Provider;