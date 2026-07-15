/*
=====================================================
Componente: Card
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Muestra una tarjeta de información reutilizable.
=====================================================
*/

function Card({ titulo, cantidad }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{cantidad}</p>
    </div>
  );
}

export default Card;