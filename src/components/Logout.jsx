import React from "react";
import { useState } from "react";

function Logout() {
    const handleLogout = async () => {
        try {
            const res = await fetch("http://localhost:8080/auth/logout", {
                method: "POST",
                credentials: "include",
            });

            const data = await res.json();

            if(!res.ok) {
                throw new Error(data.error || "Logout failed");
            }
            alert("Logged out succesfully");
        } catch (error) {
            alert(error.message);
        }
    };
    return <button onClick={handleLogout}> Logout </button>;
}

export default Logout;