
//import { useContext } from "react";
import Provider from "./context/Context";
import Lampada from "./components/Lampada";
import AreaLuz from "./components/Lampada";
import "./globalEstyle.css";
import Buttons from "./components/Buttons";

function App() {
 // const { dispatch } = useContext(Context);

  return (
  
<Provider>

<div id="conteiner">

<AreaLuz>
    <Lampada/>
</AreaLuz>

<div id="controle-button">

<Buttons/>

</div>

</div>

</Provider>


  );
}

export default App;
