const refs = {
  loginForm: document.querySelector(".login-form"),
};

const handleForm = (event) => {
  event.preventDefault();

  const email = event.currentTarget.email.value.trim();
  const password = event.currentTarget.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  refs.loginForm.reset();
};
refs.loginForm.addEventListener("submit", handleForm);
