import { useState } from "react";
import Input from "./InputComponente";

function Formulario() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const sendForm = (e) => {
    e.preventDefault();
    if (formData.email !== "" && formData.password !== "") {
      alert(`Correo: ${formData.email} Password: ${formData.password}`);
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <>
      <form
        onSubmit={sendForm}
        className="min-h-screen flex items-center justify-center bg-gray-200 "
      >
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Ingresar al sistema
          </h1>

          <div className="space-y-4">
            <Input
              label="Correo"
              name="email"
              tipo="text"
              valor={formData.email}
              formData={formData}
              setFormData={setFormData}
            />
            <Input
              label="Contraseña"
              name="password"
              tipo="password"
              valor={formData.password}
              formData={formData}
              setFormData={setFormData}
            />
          </div>

          <button
            type="submit"
            disabled={formData.email === "" || formData.password === ""}
            className={`w-full mt-6  transition-all duration-300 text-black font-semibold py-2 rounded-xl shadow-md ${formData.email === "" || formData.password === "" ? "bg-gray-300 hover:bg-gray-300" : "cursor-pointer bg-amber-400 hover:bg-amber-500 hover:shadow-lg"}`}
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
export default Formulario;
