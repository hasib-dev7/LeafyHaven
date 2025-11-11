import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = use(AuthContext);
  const handleRegister = async (e) => {
    e.preventDefault();
    // get form values
    const email = e.target.email.value;
    const name = e.target.name.value.trim(); // remove extra spaces
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // ---------- NAME VALIDATION ----------
    if (name.length < 5) {
      toast.error("Name must be at least 5 characters long.");
      return;
    }
    // .........password validation..........
    //  minimum 6 characters
    if (password.length < 6) {
      // form reset
      e.target.reset();
      toast.error("Password must be at least 6 characters lons.");
      return;
    }
    //  lowercase & uppercase
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      // form reset
      e.target.reset();
      toast.error(
        "Password must include at least one uppercase and one lowercase letter."
      );
      return;
    }
    //  number
    if (!/\d/.test(password)) {
      // form reset
      e.target.reset();
      toast.error("Password must include at least one number.");
      return;
    }
    // ---------- FIREBASE REGISTRATION ----------
    try {
      const res = await createUser(email, password);
      const signUpUser = res.user;
      updateUserProfile({ displayName: name, photoURL: photo });
      setUser({ ...signUpUser, displayName: name, photoURL: photo });
      console.log(signUpUser)
      // form reset
      e.target.reset();
      toast.success(`Welcome, ${name}! Your account has been created.`);
    } catch (err) {
      // form reset
      e.target.reset();
      // customize Firebase error messages
      if (err.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else if (err.code === "auth/weak-password") {
        toast.error("Password is too weak. Please follow the rules.");
      } else {
        toast.error("Registration failed. Please try again."); // generic fallback
      }
      console.log("Registration error:", err.code);
    }
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
