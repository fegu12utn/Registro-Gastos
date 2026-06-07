import { useState } from "react";

function GastoForm({ categorias, onAgregar }) {
  const [descripcion, setDescripcion] = useState("");
  const [monto, setMonto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = () => {
    const nuevoGasto = {
      descripcion,
      monto: Number(monto),
      categoria,
      fecha
    };

    onAgregar(nuevoGasto);

    // limpiar formulario después de agregar
    setDescripcion("");
    setMonto("");
    setCategoria("");
    setFecha("");
  };

  return (
    <div>
      <h2>Agregar Gasto</h2>

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <input
        type="number"
        placeholder="Monto"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
      />

      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="">Seleccione una categoría</option>

        {categorias.map((cat) => (
          <option key={cat.id} value={cat.nombre}>
            {cat.nombre}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Agregar
      </button>
    </div>
  );
}

export default GastoForm;