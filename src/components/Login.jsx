import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div
        className="absolute w-full h-full bg-cover bg-ima"
        style={{
          backgroundImage:
            "url(https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg)",
        }}
      >
        <form className="absolute flex flex-col mt-[10%] ml-[35%] py-8 w-[30%] h-auto text-white bg-black bg-opacity-85">
          <h1 className="pt-4 my-4 mx-20 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <body className="flex flex-col px-4 mx-4 ">
            {!isSignInForm && (
              <input
                className="p-4 my-4 mx-12 bg-black border border-slate-600"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="p-4 my-4 mx-12 bg-black border border-slate-600"
              type="text"
              placeholder="Email"
            />
            <input
              className="p-4 my-4 mx-12 bg-black border border-slate-600"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-600 p-2 mx-12 mt-4 mb-10 rounded-lg">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </body>
          <span className="mx-20 hover:underline" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already have an account Sign In."}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
