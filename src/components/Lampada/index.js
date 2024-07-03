import { Context } from "../../App";
import "./estyle.css";

export default function Lampada({acesso}){

return(
<Context.Consumer>
{({Luz, setLuz})=>(

<div id="Lampada">

<div id="Area-Luz" className={Luz === "acesso" ? "luz-acesso" : "luz-apagado"}>

<div id="Luz" className={Luz === "acesso" ? "lampada-acesso" : "lampada-apagado"}></div>
<div className="Bocal"></div>

</div>

</div>


)}
</Context.Consumer>
)

}

