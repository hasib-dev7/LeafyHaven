import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // 
    createUser(email, password)
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
            <h1 className="text-3xl font-bold text-center">Register now!</h1>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter Your Name"
                />
                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Your Email"
                  required
                />
                {/* photo url */}
                <label className="label"> Photo-URL</label>
                <input
                  type="photo"
                  name="photo"
                  className="input"
                  placeholder="Enter Your  Photo-URL"
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
               
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              <p>
                Have youer already account ? please{" "}
                <Link className="text-blue-500 hover:text-blue-800" to="/login">
                  SignIn
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
