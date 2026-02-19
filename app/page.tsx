"use client";
import { useState } from "react";

export default function LoginPage() {
  const [emailn, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Connexion en cours...");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Connexion TekkiBot</h1>

      <input
        className="border p-3 m-2 w-80 rounded"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-3 m-2 w-80 rounded"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white p-3 rounded w-80 mt-4"
        onClick={handleLogin}
      >
        Se connecter
      </button>
    </div>
  );
}