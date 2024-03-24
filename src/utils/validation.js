export const validateUserName = (userName) => {
  const regex = /^(?=.{3,50}$)[a-zA-Z]+(?: [a-zA-Z]+)?$/;
  if (!regex.test(userName)) {
    return "Invalid Name.";
  } else {
    return "";
  }
};
export const validateUserEmail = (userEmail) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(userEmail)) {
    return "Invalid Email.";
  } else {
    return "";
  }
};
export const validateUserPassword = (userPassword) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!regex.test(userPassword)) {
    return "Invalid Password.";
  } else {
    return "";
  }
};
