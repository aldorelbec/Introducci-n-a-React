
import { useReducer, useRef, useCallback, useState } from 'react';
import './App.css';


const estadoInicial = {
  productos: [],
  idSiguiente: 1,
};


function reducer(estado, accion) {
  switch (accion.type) {
    case 'AGREGAR_PRODUCTO':
      return {
        ...estado,
        productos: [...estado.productos, accion.payload],
        idSiguiente: estado.idSiguiente + 1,
      };
    case 'ELIMINAR_PRODUCTO':
      return {
        ...estado,
        productos: estado.productos.filter(
          (producto) => producto.id !== accion.payload
        ),
      };
    case 'ACTUALIZAR_CANTIDAD':
      return {
        ...estado,
        productos: estado.productos.map((producto) =>
          producto.id === accion.payload.id
            ? { ...producto, cantidad: accion.payload.cantidad }
            : producto
        ),
      };
    default:
      throw new Error();
  }
}

function App() {
  
  const [estado, dispatch] = useReducer(reducer, estadoInicial);
  const [nombreProducto, setNombreProducto] = useState('');

  
  const inputRef = useRef(null);

 
  const agregarProducto = useCallback(() => {
    if (nombreProducto.trim() === '') {
    
      inputRef.current.focus();
      return;
    }
    const nuevoProducto = {
      id: estado.idSiguiente,
      nombre: nombreProducto,
      cantidad: 1,
    };
   
    dispatch({ type: 'AGREGAR_PRODUCTO', payload: nuevoProducto });
    setNombreProducto('');
  }, [nombreProducto, estado.idSiguiente]); 

  return (
    <div className="contenedor-inventario">
      <h1>Gestor de Inventario</h1>
      
      <div className="formulario-agregar">
        <input
          ref={inputRef} 
          type="text"
          value={nombreProducto}
          onChange={(e) => setNombreProducto(e.target.value)}
          placeholder="Nombre del producto"
        />
        <button onClick={agregarProducto}>Agregar Producto</button>
      </div>

      <ul className="lista-productos">
        {estado.productos.map((producto) => (
          <li key={producto.id}>
            <span>{producto.nombre}</span>
            <div className="controles-cantidad">
              <button
                onClick={() =>
                  dispatch({
                    type: 'ACTUALIZAR_CANTIDAD',
                    payload: { id: producto.id, cantidad: producto.cantidad - 1 },
                  })
                }
              >
                -
              </button>
              <span>{producto.cantidad}</span>
              <button
                onClick={() =>
                  dispatch({
                    type: 'ACTUALIZAR_CANTIDAD',
                    payload: { id: producto.id, cantidad: producto.cantidad + 1 },
                  })
                }
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                dispatch({ type: 'ELIMINAR_PRODUCTO', payload: producto.id })
              }
              className="btn-eliminar"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;