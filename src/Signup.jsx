import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useUserAuth } from './context/UserAuthContext'

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const { signUp,googleSignIn } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            
            navigate("/");
        } catch (err) {
            setError(err.message);
        }

    }
    const handleGoogle = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }

    }


    return (
        <div style={{ display: "grid", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh" }}>

            <div style={{ background: "rgba(0,0,0,0.05)", border: "1px solid black", padding: "10px", width: "400px", display: "flex", flexFlow: "column", alignItems: "center" }}>
                {error && <p style={{ background: "#ffeeed", color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <h1>Sign In</h1>


                    <div style={{ margin: "20px 0" }}>
                        <label>Email :</label>
                        <br />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
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
                        <button style={{ minWidth: "250px", minHeight: "40px" }}
                            type='submit'
                        >
                            Sign up
                        </button>

                    </div>

                    <div style={{ margin: "20px 0", textAlign: "center" }}>
                        <button 
                        onClick={handleGoogle}
                            style={{ minWidth: "250px", minHeight: "40px" }}
                        >
                            Sign up with Google
                        </button>
                    </div>

                </form>
                <div style={{ margin: "10px 0", textAlign: "center", border: "1px solid black", padding: "10px 35px" }}>Already Account <NavLink to="/"> login </NavLink></div>


            </div>
        </div>
    )
}

export default SignIn;