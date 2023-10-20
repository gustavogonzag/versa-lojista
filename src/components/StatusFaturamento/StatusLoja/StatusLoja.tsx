import "../StatusFaturamento.css"
import "./StatusLoja.css"

function StatusLoja() {

  return (
    <div className="retangulo">
        <div className="status">
          <span className="statusText">Status</span>
          <span className="isOpen">LOJA ABERTA</span> 
        </div>
        <div>
          <button className="btnLoja">FECHAR</button>
        </div>   
    </div>
  )
}

export default StatusLoja