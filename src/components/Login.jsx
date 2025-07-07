import React from "react";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error || "Login failed");
            }

            setMessage("Login succseful!");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                placeholder="User"
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
            <p>{message}</p>
        </form>
    );
}

export default Login;