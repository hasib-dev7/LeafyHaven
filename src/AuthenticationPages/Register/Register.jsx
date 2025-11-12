import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [toggle, setToggle] = useState(false);

  const { createUser, setUser, updateUserProfile, googleSignIn } =
    use(AuthContext);
  const navigate = useNavigate();
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
      // console.log(signUpUser);
      // form reset
      e.target.reset();
      toast.success(`Welcome, ${name}! Your account has been created.`);
      // path  navigate to home page
      navigate("/");
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
      // console.log("Registration error:", err.code);
    }
  };
  // google login
  const handleGoogle = () => {
    googleSignIn().then((res) => {
      setUser(res.user);
      const userName = res.user.displayName || "User"; // fallback
      toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path  navigate to home page
      navigate("/");
    });
  };
  // toggle password
  const hangleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
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
                <div className=" relative">
                  <input
                    type={toggle ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Enter Your Password"
                    required
                  />
                  <button
                    onClick={hangleToggle}
                    className=" absolute btn btn-xs top-2 right-5"
                  >
                    {toggle ? (
                      <Eye size={16} strokeWidth={1.25} />
                    ) : (
                      <EyeOff size={16} strokeWidth={1.25} />
                    )}
                  </button>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
                {/* Google */}
                <button
                  onClick={handleGoogle}
                  className="btn bg-white text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
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
