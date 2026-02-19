"use client";

import { useState } from "react";
import { loginUser } from "../../../services/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);

      // Sauvegarder le token
      localStorage.setItem("token", data.token);

      // Redirection vers dashboard
      router.push("/dashboard");

    } catch (error) {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Connexion TekkiBot
        </h1>

        <input
          className="border p-2 mb-3 w-full rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border p-2 mb-3 w-full rounded"
          placeholder="Mot de passe"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700"
          onClick={handleLogin}
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}