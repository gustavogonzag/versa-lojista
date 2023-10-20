import Faturamento from "./Faturamento/Faturamento"
import StatusLoja from "./StatusLoja/StatusLoja"

function StatusFaturamento() {
  return (
    <div className="quadros">
        <StatusLoja />
        <Faturamento /> 
    </div>
  )
}

export default StatusFaturamento