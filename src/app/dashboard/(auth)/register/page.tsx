"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/firebase';
import { User, UserCredential, AuthError, AuthErrorCodes } from '@firebase/auth'
import { useRouter } from 'next/navigation'

const Register = () => {
    const [authuser, setAuthUser] = useState<User | null>(null);
    const [error, setError] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const isValidEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setError("Email is invalid");
            return;
        }

        if (!password || password.length < 8) {
            setError("Password is invalid");
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.push('/dashboard');
                // ...
            })
            .catch((error: AuthError) => {
                const errorCode: string = error.code;
                const errorMessage: string = error.message;
                setError(errorMessage)
                // ..
            });
    };

    return (
        <div className="flex flex-col items-center justify-between">
            <div className="bg-[#212121] p-8 rounded shadow-md w-96">
                <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                        placeholder="Email"
                        // required
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
                        placeholder="Password"
                        // required
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        {" "}
                        Register
                    </button>
                    <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
                </form>
                <div className="text-center text-gray-500 mt-4">- OR -</div>
                <Link
                    className="block text-center text-blue-500 hover:underline mt-2"
                    href="/dashboard/login"
                >
                    Login with an existing account
                </Link>
            </div>
        </div>
    );
};

export default Register;