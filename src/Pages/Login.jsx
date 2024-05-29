import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase.config.js"; // Import the function correctly
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../Components/Auth/GoogleLogin.jsx";
import GitHubLogin from "../Components/Auth/GitHubLogin.jsx";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const from = "/"; // Default value if location state is undefined

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password); // Correct usage
      // Redirect after successful login
      navigate(from, { replace: true });
    } catch (error) {
      // Handle login error
      console.error("Error signing in:", error.message);
    }
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, loading, navigate, from]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 w-full mx-auto">

        <div className="text-center lg:text-left p-6">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Sign in to create an account and access exclusive content.
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
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered w-full"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary w-full">Login</button>
              <p className="text-center mt-4">
                Don&apos;t have any account ?{" "}
                <Link to={"/register"} className="text-orange-500">Register</Link>
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
