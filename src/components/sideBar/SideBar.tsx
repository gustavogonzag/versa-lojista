import { NavLink } from "@mantine/core"
import { AiFillHome } from 'react-icons/Ai';
import { FaSitemap } from 'react-icons/Fa';
import { HiDocumentReport } from 'react-icons/Hi';
import { BiSolidExit } from 'react-icons/Bi';
import "./SideBar.css"

function SideBar() {
  return (
    <div className="container">
      <h1>VERSA</h1>
      <div className="items-sidebar">
          <NavLink label="Dashboard" leftSection={<AiFillHome size="1rem" stroke={1.5} />} />
          <hr/>
          <NavLink label="Produtos" leftSection={<FaSitemap size="1rem" stroke={1.5} />} />
          <hr/>
          <NavLink label="Relatórios" leftSection={<HiDocumentReport size="1rem" stroke={1.5} />} />
          <hr/>
          <NavLink label="Sair" leftSection={<BiSolidExit size="1rem" stroke={1.5} />} />
      </div>
    </div>
  )
}

export default SideBar