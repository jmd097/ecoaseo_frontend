/*
=====================================================
Componente: ProductList
Proyecto: Sistema de Gestión de Inventario EcoAseo S.A.S.
Descripción:
Muestra la lista de productos registrados.
=====================================================
*/

import "../styles/ProductList.css";

function ProductList({ productos, eliminarProducto }) {

    return (

        <section className="product-list">

            <h2>Lista de Productos</h2>

            <table>

                <thead>

                    <tr>

                        <th>Producto</th>

                        <th>Cantidad</th>

                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {productos.map((producto, index) => (

                        <tr key={index}>

                            <td>{producto.nombre}</td>

                            <td>{producto.cantidad}</td>

                            <td>

                                <button onClick={() => eliminarProducto(index)}>

                                    Eliminar

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </section>

    );

}

export default ProductList;