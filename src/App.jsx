/*
=====================================================
Componente principal
Proyecto EcoAseo S.A.S.
=====================================================
*/

import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {

  // Estado donde se almacenarán todos los productos
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // Función para agregar un nuevo producto
  function agregarProducto(productoNuevo) {

    setProductos([...productos, productoNuevo]);

  }
  // Función para eliminar un producto
function eliminarProducto(indice) {

  const nuevaLista = productos.filter((_, i) => i !== indice);

  setProductos(nuevaLista);

}
const productosFiltrados = productos.filter((producto) =>
  producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
);

  return (
    <div className="app">

      <Header />

      <Navbar />

      <Dashboard productos={productos} />

      <SearchBar
  busqueda={busqueda}
  setBusqueda={setBusqueda}
/>

      <ProductForm agregarProducto={agregarProducto} />

      <ProductList
  productos={productosFiltrados}
  eliminarProducto={eliminarProducto}
/>
      <Footer />

    </div>
  );
}

export default App;