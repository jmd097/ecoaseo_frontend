/*
=====================================================
Componente: ProductForm
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Formulario para registrar productos.
=====================================================
*/

import { useState } from "react";
import "../styles/ProductForm.css";

function ProductForm({ agregarProducto }) {

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");

  function guardarProducto(e) {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (nombre.trim() === "" || cantidad === "") {
      alert("Debe completar todos los campos.");
      return;
    }

    // Crear el nuevo producto
    const nuevoProducto = {
      nombre,
      cantidad,
    };

    // Enviar el producto al componente App
    agregarProducto(nuevoProducto);

    // Limpiar el formulario
    setNombre("");
    setCantidad("");
  }

  return (
    <section className="product-form">
      <h2>Registrar Producto</h2>

      <form onSubmit={guardarProducto}>

        <input
          type="text"
          placeholder="Nombre del producto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="submit">
          Agregar Producto
        </button>

      </form>
    </section>
  );
}

export default ProductForm;