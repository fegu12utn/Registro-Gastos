import GastoItem from "./GastoItem";

function GastoList({ gastos, onEliminar }) {
  return (
    <div>
      <h2>Lista de Gastos</h2>

      <table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Categoría</th>
            <th>Fecha</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {gastos.map(gasto => (
            <GastoItem
              key={gasto.id}
              gasto={gasto}
              onEliminar={onEliminar}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GastoList;