/*
=====================================================
Componente: SearchBar
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Permite buscar productos por nombre.
=====================================================
*/

import "../styles/SearchBar.css";

function SearchBar({ busqueda, setBusqueda }) {

  return (
    <section className="search-bar">

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

    </section>
  );

}

export default SearchBar;