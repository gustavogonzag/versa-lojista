import SideBar from "../../components/sideBar/SideBar"
import TelaInicial from "../TelaInicial/TelaInicial"
import "../TelaInicial/TelaInicial.css"


function Dashboard() {
  return (
    <>
      <div className="conteudoGeral">
        <SideBar />
        <TelaInicial />
      </div>
    </>
  )
}

export default Dashboard