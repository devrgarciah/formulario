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
    <form
      onSubmit={sendForm}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: "10px",
        fontSize: "30px",
      }}
    >
      <Input label="Correo" tipo="text" valor={email} setValor={setEmail} />
      <Input
        label="Contraseña"
        tipo="password"
        valor={password}
        setValor={setPassword}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
export default Formulario;
