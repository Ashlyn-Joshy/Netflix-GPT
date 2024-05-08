export const checkValidation = (email, password, name) => {
  const isUserName = /^[A-Za-z\s]+$/.test(name);
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!isUserName) return "User name is not valid";
  if (!isEmail) return "Email is not a valid email address";
  if (!isPassword) return "Password is not a valid";

  return null;
};
