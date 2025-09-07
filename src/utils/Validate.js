export const checkValidData = (isSignInForm, email, password, name) => {
  // validate only if name is provided (not null, undefined, or empty string)
  let checkName = false;
  if (name !== null && name !== undefined && name.trim() !== "") {
    const isNameValid = /^[A-Za-z\s'-]+$/.test(name);
    // console.log(name);
    checkName = isNameValid;
  }

  if (!checkName && !isSignInForm && name === undefined)
    return "Please Enter a Valid Name.";

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not Valid.";
  if (!isPasswordValid) return "Password is Not Valid.";
};
