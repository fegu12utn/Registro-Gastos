function Resumen({ totalGastado, gastoMayor }) {
  return (
    <div>
      <h2>Resumen</h2>

      <p><strong>Total Gastado: </strong> ${totalGastado}</p>

      <p>
        <strong>Gasto más alto:</strong>{" "} 
        {gastoMayor
          ? ` ${gastoMayor.descripcion} ($${gastoMayor.monto})`
          : " No hay gastos"}
      </p>
    </div>
  );
}

export default Resumen;