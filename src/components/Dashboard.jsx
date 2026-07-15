/*
=====================================================
Componente: Dashboard
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Muestra un resumen del estado del inventario.
=====================================================
*/

import "../styles/Dashboard.css";
import Card from "./Card";

function Dashboard({ productos }) {

  const totalProductos = productos.length;

  const totalCantidad = productos.reduce(
    (total, producto) => total + Number(producto.cantidad),
    0
  );

  const stockBajo = productos.filter(
    (producto) => Number(producto.cantidad) < 10
  ).length;

  return (
    <main className="dashboard">

      <h2>Panel de Control</h2>

      <div className="cards">
        <Card titulo="Productos" cantidad={totalProductos} />
        <Card titulo="Unidades" cantidad={totalCantidad} />
        <Card titulo="Stock Bajo" cantidad={stockBajo} />
      </div>

    </main>
  );
}

export default Dashboard;