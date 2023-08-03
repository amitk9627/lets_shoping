import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUserAuth } from './context/UserAuthContext'


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();
    const { logIn } = useUserAuth();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }

    }

    return (
        <div style={{ display: "grid", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>

            <div style={{ background: "rgba(0,0,0,0.05)",border: "1px solid #000",borderRadius:"5px", display: "flex", flexFlow: "column", alignItems: "center", padding: "10px" }}>
                {error && <p style={{ background: "#ffeeed", color: "red" }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div style={{ margin: "20px 0" }}>
                        <label>Email :</label>
                        <br />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type='text'
                            style={{ minWidth: "300px", minHeight: "20px" }}
                        />
                    </div>
                    <div style={{ margin: "20px 0" }}>
                        <label>Password :</label>
                        <br />
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type='text'
                            style={{ minWidth: "300px", minHeight: "20px" }}
                        />
                    </div>
                    <div style={{ margin: "20px 0", textAlign: "center" }}>
                        <button
                            type="submit"
                            style={{ padding: "10px 0", border: "0", borderRadius: "3px", minWidth: "250px", minHeight: "30px", fontSize: "1.3rem", color: '#fff', background: "rgb(53, 98, 223)", }}
                        >
                            Login
                        </button>
                    </div>

                </form>

                <div style={{ textAlign: "center", padding: "10px 35px", border: "1px solid black" }}>New User ?<NavLink to="/signup"> Register Now</NavLink></div>


            </div>
        </div>
    )
}

export default LoginPage
