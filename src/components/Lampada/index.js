import { useContext } from "react";
import {Context} from "../../context/Context";
import "./style.css"


export default function Lampada(){

const {state} = useContext(Context)

return(

<>
<div id="Lampada">

<div id="Area-Luz" className={state.acesso ? "luz-acesso" : "luz-apagado"}>

<div id="Luz" className={state.acesso ? "lampada-acesso" : "lampada-apagado"}></div>
<div className="Bocal"></div>

</div>

</div>
</>


)

}

