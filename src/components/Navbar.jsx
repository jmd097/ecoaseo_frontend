/*
=====================================================
Componente: Navbar
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Muestra el menú principal de navegación.
=====================================================
*/
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Entradas</li>
        <li>Salidas</li>
        <li>Reportes</li>
      </ul>
    </nav>
  );
}

export default Navbar;