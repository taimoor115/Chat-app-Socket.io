import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [input, setInputs] = useState({
    fullname: "",
    username: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const { isLoading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...input, gender });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((input) => ({
      ...input,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    
    await signup(input);
  };

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              placeholder="Enter fullname"
              className="w-full h-10 input input-bordered"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="p-2 label ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              name="username"
              value={input.username}
              placeholder="Enter username"
              className="w-full h-10 input input-bordered"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              placeholder="Enter Password"
              className="w-full h-10 input input-bordered"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              value={input.confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full h-10 input input-bordered"
              onChange={handleChange}
            />
          </div>

          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={input.gender}
          />

          <Link
            to="/login"
            className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
          >
            Already have an account?
          </Link>

          <div>
            <button
              disabled={isLoading}
              className="mt-2 border btn btn-block btn-sm border-slate-700"
            >
              {isLoading ? "Loading..." : "Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
