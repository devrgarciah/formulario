function Input({ label, tipo, valor, setValor }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}:</label>
      <input
        className="bg-white text-black"
        id={label}
        type={tipo}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
    </div>
  );
}

export default Input;
