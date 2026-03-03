function Input({ label, tipo, valor, setValor }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <label htmlFor={label}>{label}:</label>
      <input
        id={label}
        type={tipo}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}

export default Input;
