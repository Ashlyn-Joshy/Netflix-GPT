export const signInValidation = (email, password) => {
  const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Email is not a valid email address";
  if (!isPassword) return "Password is not a valid";

  return null;
};

export const signUpValidation = (name, email, password) => {
  const isUserName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
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
