function GastoItem({ gasto, onEliminar }) {
  return (
    <tr>
      <td>{gasto.descripcion}</td>
      <td>${gasto.monto}</td>
      <td>{gasto.categoria}</td>
      <td>{gasto.fecha}</td>

      <td>
        <button onClick={() => onEliminar(gasto.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default GastoItem;