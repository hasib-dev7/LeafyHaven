import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
const Login = () => {
  const [toggle, setToggle] = useState(false);
  const emailRef = useRef();
  const loaction = useLocation();
  const navigate = useNavigate();
  // console.log(loaction);

  const { signInUser, setUser, googleSignIn,resetPassword } = use(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    // get form values
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await signInUser(email, password);
      const loginUser = res.user;
      setUser(loginUser);
      const userName = res.user.displayName || "User"; // fallback
      toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path location to navigate
      navigate(loaction.state || "/");
    } catch (err) {
      // console.log("Login error:", err);
      // Customize error messages if needed
      if (err.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address.");
      } else {
        toast.error("Login failed. Please try again.");
      }
    }
  };
  // google login
  const handleGoogle = () => {
    googleSignIn().then((res) => {
      setUser(res.user);
      const userName = res.user.displayName || "User"; // fallback
       toast.success(`Welcome back, ${userName}! 🎉`, {});
      // path location to navigate
      navigate(loaction.state || "/");
    });
  };
  // toggle password
  const hangleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  // reset password
const handleReset = async (e) => {
  e.preventDefault();
  const email = emailRef.current.value;

  if (!email) {
    toast.error("Please enter your email address first.");
    return;
  }

  try {
    await resetPassword(email);
    toast.success("Password reset link has been sent! Check your inbox or spam folder.");

    // If it's a Gmail address, open Gmail automatically
    if (email.toLowerCase().endsWith("@gmail.com")) {
      window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
    }
  } catch (err) {
    // console.log(err.code);
    if (err.code === "auth/user-not-found") {
      toast.error("No account found with this email address.");
    } else if (err.code === "auth/invalid-email") {
      toast.error("Please enter a valid email address.");
    } else {
      toast.error("Something went wrong while sending the reset link. Please try again later.");
    }
  }
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
                  ref={emailRef}
                  required
                />

                {/* password */}
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
                {/* forgot password */}
                <div>
                  <a onClick={handleReset} className="link link-hover">
                    Forgot password?
                  </a>
                </div>

                <button className="btn btn-neutral mt-4">Login</button>
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
