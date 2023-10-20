
function Pedidos() {

    const pedidos = [
        { id: "65484653", cliente: "Venancio", descricao: "Camisa de Orixá Branca", preco: 50 }
    ];

    const rows = pedidos.map((pedido) => (
        <table key={pedido.id}>
            <td>{pedido.id} - {pedido.cliente}</td>
        </table>
    ));

    return (
        <div className="tabelaPedidos">
            <table>
                <thead>
                    <tr>
                        <th>Pedidos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rows}</td>
                        <td>Detalhes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Pedidos