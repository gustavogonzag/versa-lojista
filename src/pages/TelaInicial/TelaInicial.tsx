import Pedidos from "../../components/Pedidos/Pedidos"
import StatusFaturamento from "../../components/StatusFaturamento/StatusFaturamento"
import "./TelaInicial.css"

function TelaInicial() {
  return (
    <>
      <div className="content">
        <StatusFaturamento /> 
        <Pedidos />
      </div>
           
    </>
  )
}

export default TelaInicial