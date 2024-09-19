"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    // Aquí iría tu lógica de autenticación
    const isAuthenticated = username === "admin" && password === "password"; // Ejemplo simple

    if (isAuthenticated) {
      router.push("/dashboard"); // Redirige al dashboard si está autenticado
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
}
