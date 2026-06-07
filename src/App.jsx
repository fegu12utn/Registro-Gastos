import { useState, useEffect } from "react";
import "./App.css"
import GastoForm from "./components/GastoForm";
import GastoList from "./components/GastoList";
import Resumen from "./components/Resumen";
import {
  obtenerGastos,
  obtenerCategorias,
  agregarGasto,
  eliminarGasto
} from "./services/gastos";

function App() 
{
  const [gastos, setGastos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const totalGastado = gastos.reduce(
  (acumulador, gasto) => acumulador + gasto.monto,
  0
  );
  const gastoMayor =
  gastos.length > 0
    ? gastos.reduce((mayor, gasto) =>
          Number(gasto.monto) > Number(mayor.monto)
          ? gasto 
          : mayor,
       gastos[0]
      )
    : null;

    const gastosFiltrados = filtroCategoria
  ? gastos.filter(
      (gasto) => gasto.categoria === filtroCategoria
    )
  : gastos;
  
  useEffect(() => {
    const cargarDatos= async() => {
      try{
           const datosGastos = await obtenerGastos();
           const datosCategorias = await obtenerCategorias();
           
           setGastos(datosGastos);
           setCategorias(datosCategorias);

           console.log("Gastos:", datosGastos);
           console.log("Categorías:", datosCategorias);

         }catch (error) {

           console.log("Error cargando datos", error);
         }
     
    };
    cargarDatos();

  }, []);
  
 const manejarAgregarGasto = async (nuevoGasto) => {
  
  await agregarGasto(nuevoGasto);

  const gastosActualizados = await obtenerGastos();

  setGastos(gastosActualizados);
};

const manejarEliminarGasto = async (id) => {
  await eliminarGasto(id);

  const gastosActualizados = await obtenerGastos();

  setGastos(gastosActualizados);
};

return (

    <div>
          <h1>Registro de Gastos</h1>
         
          <select
            value={filtroCategoria}
            onChange={(e) => setFiltroCategoria(e.target.value)}
          >
            <option value="">Todas las categorías</option>

            {categorias.map((categoria) => (
              <option
                key={categoria.id}
                value={categoria.nombre}
              >
                {categoria.nombre}
              </option>
             ))}
          </select>

          <GastoForm
            categorias={categorias}
            onAgregar={manejarAgregarGasto}
         />

          <GastoList
            gastos={gastosFiltrados}
            onEliminar={manejarEliminarGasto}
         />

         <Resumen
           totalGastado={totalGastado}
           gastoMayor={gastoMayor}
         />
         
      </div>
  );
}

export default App
