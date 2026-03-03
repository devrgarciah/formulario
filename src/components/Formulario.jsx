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
        className="bg-slate-800 text-white"
        onSubmit={sendForm}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          gap: "10px",
        }}
      >
        <h1 className="text-2xl">Formulario</h1>
        <Input label="Correo" tipo="text" valor={email} setValor={setEmail} />
        <Input
          label="Contraseña"
          tipo="password"
          valor={password}
          setValor={setPassword}
        />
        <button
          className="bg-amber-400 text-black px-5 rounded-xl font-bold mt-3"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </>
  );
}
export default Formulario;
