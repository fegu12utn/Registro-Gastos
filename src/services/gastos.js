import axios from "axios";
const URL = "http://localhost:3001/gastos";
const URL_CATEGORIAS = "http://localhost:3001/categorias";
export const obtenerGastos = async () => 
{
    const respuesta = await axios.get(URL);
    return respuesta.data;

};
export const obtenerCategorias = async () =>
{
    const respuesta = await axios.get(URL_CATEGORIAS);
    return respuesta.data;
};

export const agregarGasto = async (nuevoGasto) => {
  const respuesta = await axios.post(URL, nuevoGasto);
  return respuesta.data;
};

export const eliminarGasto = async (id) => {
  await axios.delete(`${URL}/${id}`);
};