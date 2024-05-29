import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config.js";
import GoogleLogin from "../Components/Auth/GoogleLogin.jsx";
import GitHubLogin from "../Components/Auth/GitHubLogin.jsx";

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setSuccessMessage("Registration successful. Redirecting to login...");
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    setError("An account already exists with this email address.");
                    break;
                case "auth/invalid-email":
                    setError("Please provide a valid email address.");
                    break;
                default:
                    setError("Registration failed. Please try again later.");
            }
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">
                <div className="text-center lg:text-left p-6">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Sign up to create an account and access exclusive content.
                    </p>
                </div>

                <div className="card shadow-2xl bg-base-100 max-w-lg mx-auto lg:mx-0">
                    <form onSubmit={handleSubmit} className="card-body p-6">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {error && <p className="text-red-500 mb-4">{error}</p>}
                        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

                        <div className="form-control mt-2">
                            <button type="submit" className="btn btn-primary w-full">Register</button>
                            <p className="text-center mt-4">
                                Already have an account?{" "}
                                <Link to="/login" className="text-orange-500">Login</Link>
                            </p>
                        </div>
                    </form>

                    <div className="w-full">
                        <div className="flex flex-col gap-2 mx-7 mb-7">
                            <GoogleLogin />
                        </div>

                        <div className="flex flex-col gap-2 mx-7 mb-7">
                            <GitHubLogin />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
