import "../StatusFaturamento.css"
import "../StatusLoja/StatusLoja.css"
import { TfiMoney } from "react-icons/tfi"

function Faturamento() {
  return (
    <div className="retangulo">
      <div className="total-dia">
        <div className="status">
          <span className="statusText">Total do dia</span>
          <span className="isOpen">R$75,00  </span>
        </div>
        <div className="status">
          <span className="statusText">Taxa de Entrega</span>
          <span className="isOpen">R$14,00  </span>
        </div>
        <TfiMoney size="3rem" />
      </div>

    </div>

  )
}

export default Faturamento