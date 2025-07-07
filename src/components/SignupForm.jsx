import React from "react";
import { useState } from "react";

function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:8080/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();

            if(!res.ok){
                throw new Error(data.error || "Singup failed");
            }

            setMessage("Signup succseful!");
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign up</h2>
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
            <button type="submit">Sign Up</button>
            <p>{message}</p>
        </form>
    );
}

export default SignupForm;