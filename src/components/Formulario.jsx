import { useState } from "react";
import Input from "./InputComponente";

function Formulario() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function sendForm(e) {
    e.preventDefault();
    console.log(email, password);
    setEmail("");
    setPassword("");
  }
  return (
    <>
      <form
        onSubmit={sendForm}
        className="min-h-screen flex items-center justify-center bg-slate-900 "
      >
        <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl border border-gray-200">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
            Ingresar al sistema
          </h1>

          <div className="space-y-4">
            <Input
              label="Correo"
              tipo="text"
              valor={email}
              setValor={setEmail}
            />

            <Input
              label="Contraseña"
              tipo="password"
              valor={password}
              setValor={setPassword}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-amber-400 hover:bg-amber-500 transition-all duration-300 text-black font-semibold py-2 rounded-xl shadow-md hover:shadow-lg"
          >
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
export default Formulario;
