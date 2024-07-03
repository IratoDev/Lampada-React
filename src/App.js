
import { useState, createContext, useContext } from "react";
import Lampada from "./components/Lampada";
import AreaLuz from "./components/Lampada";
import Buttons from "./components/Buttons";
import "./globalEstyle.css";

export const Context = createContext();

const ProviderContext =({children})=>{

  const [Luz, setLuz] = useState("apagado");

  return(

<Context.Provider value={{Luz,setLuz}}>

{children}

</Context.Provider>

  )

};

function App() {


  return (
  
<ProviderContext>

<div id="conteiner">

<AreaLuz>
    <Lampada/>
</AreaLuz>

<div id="controle-button">

<Buttons estado={"acender"}/>

<Buttons estado={"apagar"}/>

</div>

</div>
</ProviderContext>
  );
}

export default App;
