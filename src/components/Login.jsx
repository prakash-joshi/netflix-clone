import { useState, useRef } from "react";
import Header from "./Header";
import {
  validateUserName,
  validateUserEmail,
  validateUserPassword,
} from "../utils/validation";
import { LOGIN_BACKGROUND_IMAGE_URL, USER_AVATAR } from "../utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true),
    [userNamevalidationRes, setUserNamevalidationRes] = useState(""),
    [userEmailValidationRes, setUserEmailValidationRes] = useState(""),
    [userPasswordValidationRes, setUserPasswordValidationRes] = useState(""),
    [loginErrorMsg, setLoginErrorMsg] = useState("");

  const userName = useRef(null),
    userEmail = useRef(null),
    userPassword = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setUserNamevalidationRes("");
    setUserEmailValidationRes("");
    setUserPasswordValidationRes("");
    setLoginErrorMsg("");
  };

  const handleUserDataValidation = () => {
    if (isSignInForm) {
      const emailValidationRes = validateUserEmail(userEmail.current.value);
      const pwdValidationRes = validateUserPassword(userPassword.current.value);
      setUserEmailValidationRes(emailValidationRes);
      setUserPasswordValidationRes(pwdValidationRes);

      if (emailValidationRes || pwdValidationRes) return;

      signInWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user : ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      const nameValidationRes = validateUserName(userName.current.value);
      const emailValidationRes = validateUserEmail(userEmail.current.value);
      const pwdValidationRes = validateUserPassword(userPassword.current.value);
      setUserNamevalidationRes(nameValidationRes);
      setUserEmailValidationRes(emailValidationRes);
      setUserPasswordValidationRes(pwdValidationRes);

      if (nameValidationRes || emailValidationRes || pwdValidationRes) return;

      createUserWithEmailAndPassword(
        auth,
        userEmail.current.value,
        userPassword.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { displayName, email, phoneNumber, photoURL, uid } =
                auth.currentUser;
              dispatch(
                addUser({ displayName, email, phoneNumber, photoURL, uid })
              );
            })
            .catch((error) => {
              setLoginErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        className="absolute w-full h-full bg-cover bg-ima"
        style={{
          backgroundImage: `url(${LOGIN_BACKGROUND_IMAGE_URL})`,
        }}
      >
        <form
          className="absolute flex flex-col mt-[8%] ml-[35%] py-8 w-[30%] h-auto text-white bg-black bg-opacity-85"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="pt-4 my-4 mx-20 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col px-4 mx-4 ">
            {!isSignInForm && (
              <>
                <input
                  ref={userName}
                  className="p-4 my-4 mx-12 bg-black border border-slate-600"
                  type="text"
                  placeholder="Name"
                />
                <p className=" my-1 mx-12 text-red-700">
                  {userNamevalidationRes}
                </p>
              </>
            )}

            <input
              ref={userEmail}
              className="p-4 my-4 mx-12 bg-black border border-slate-600"
              type="text"
              placeholder="Email"
            />
            <p className=" my-1 mx-12 text-red-700">{userEmailValidationRes}</p>
            <input
              ref={userPassword}
              className="p-4 my-4 mx-12 bg-black border border-slate-600"
              type="password"
              placeholder="Password"
            />
            <p className=" my-1 mx-12 text-red-700">
              {userPasswordValidationRes}
            </p>
            <p className=" my-1 mx-12 text-red-700">{loginErrorMsg}</p>
            <button
              className="bg-red-600 p-2 mx-12 mt-4 mb-10 rounded-lg"
              onClick={handleUserDataValidation}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
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
