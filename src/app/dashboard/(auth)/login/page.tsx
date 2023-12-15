"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

function Login(): React.ReactNode {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        // Signed in
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex flex-col items-center justify-between">
      <div className="sm:max-w-sm md:max-w-md max-w-xs rounded bg-[#212121] p-8 shadow-md">
        <h1 className="mb-8 text-center text-4xl font-semibold">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="mb-4 w-full rounded border border-gray-300 px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
            placeholder="Email"
            required
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            className="mb-4 w-full rounded border border-gray-300 px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
            placeholder="Password"
            required
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
          >
            {" "}
            Sign In
          </button>
          <p className="mb-4 text-[16px] text-red-600">{error && error}</p>
        </form>
        <div className="mt-4 text-center text-gray-500">- OR -</div>
        <Link
          className="mt-2 block text-center text-blue-500 hover:underline"
          href="/dashboard/register"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
