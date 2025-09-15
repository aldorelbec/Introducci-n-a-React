

import { useState } from 'react';
import './App.css'; 

function App() {
  
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');

  
  const agregarProducto = (e) => {
    e.preventDefault(); 
    if (nuevoProducto.trim() !== '') {
      
      const nuevoItem = {
        id: Date.now(), 
        nombre: nuevoProducto,
      };
      setProductos([...productos, nuevoItem]); 
      setNuevoProducto(''); 
    }
  };

  
  const eliminarProducto = (id) => {
    
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="lista-de-compras">
      <h1>Mi Lista de Compras</h1>

      <form onSubmit={agregarProducto}>
        <input
          type="text"
          value={nuevoProducto}
          onChange={(e) => setNuevoProducto(e.target.value)}
          placeholder="Agrega un producto"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {/* Aquí mapeamos el array 'productos' para renderizar la lista */}
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre}
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;