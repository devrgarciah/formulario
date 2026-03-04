function Input({ label, tipo, valor, name, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}:</label>
      <input
        className="w-full bg-white text-gray-800 px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all duration-300"
        id={label}
        name={name}
        type={tipo}
        value={valor}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Input;
