import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
const Login = () => {
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="hero py-10">
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-sm">
          <div className="card-body ">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>

            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Your Email"
                  required
                />

                {/* password */}
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Enter Your Password"
                  required
                />

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
              <p>
                New to our website ? please{" "}
                <Link
                  className="text-blue-500 hover:text-blue-800"
                  to="/register"
                >
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
