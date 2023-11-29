import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../assets/Animation - 1700930831600 (1)";
import swal from "sweetalert";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosOpen from "../../Hook/useAxiosOpen";

const Login = () => {

  const axiosOpen = useAxiosOpen();
  const { SignInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);


  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: result.user?.displayName,
          email: result.user?.email
  
       
        }
        axiosOpen.post("/users", userInfo)
        .then((res) => {
          console.log(res.data);
          navigate(location?.state ? location.state : "/");
        })

        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    SignInUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);

      e.target.reset();

      swal("Signin", "You are successfully signed in", "success");
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      console.log(error);
      swal("Signin failed", "Invalid email or password", "error");
    });
  };

  return (
    <div className="">
      <div className=" my-10 md:my-20  ">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:w-1/2 w-full ">
            {/* <img src="https://i.ibb.co/0ZrYsWT/cartography-connection-earth-world-map-concept.jpg" /> */}

            <Lottie
              className=" h-full"
              animationData={animation}
              loop={true}
              mode="normal"
              speed={1}
            ></Lottie>
          </div>

          <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100 ">
            <div className="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-[#141E30] to-[#243B55] bg-clip-border text-white shadow-lg shadow-blue-500/40 btn-grad">
              <h3 className="block pt-5 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                Login
              </h3>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label ">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="absolute top-13 right-4 bottom-12"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash /> : <FaEye />}
                </span>

                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-[#243B55]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-950 hover:bg-blue-500 text-white">Login</button>
              </div>
            </form>
            <p className="text-center py-4 font-medium">
              Don't have an account? Please{" "}
              <Link
                className="text-[#141E30] font-bold underline hover:text-blue-500"
                to="/register"
              >
                Sign Up
              </Link>
            </p>

            <div className="mx-auto mb-4 ">
              <p>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  className="text-white bg-[#141E30]   hover:bg-[#4285F4]/90 focus:ring-4   focus:outline-none  focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
