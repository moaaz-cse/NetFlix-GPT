import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const password = useRef(null);
  const email = useRef(null);

  // Button Click Handler
  const handleButtonClick = () => {
    // Get values
    const emailVal = email.current.value;
    const passwordVal = password.current.value;
    const nameVal = name?.current?.value?.trim(); // safe access with optional chaining
    // Validate form data
    let errorInputs = checkValidData(
      emailVal,
      passwordVal,
      nameVal && nameVal.length > 0 ? nameVal : undefined // pass only if not empty
    );
    setErrorMessage(errorInputs);

    // If no error, proceed...
  };

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-screen max-h-2/5"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 w-4/12 absolute bg-black/40 backdrop-blur-md my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="name"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="bg-red-700 p-2 my-4 rounded-lg w-full"
          type="submit"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
