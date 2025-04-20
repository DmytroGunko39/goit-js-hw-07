const refs = {
  userNameFild: document.querySelector("#name-input"),
  userNameOutput: document.querySelector("#name-output"),
};
console.log(refs);

refs.userNameFild.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue !== "") {
    refs.userNameOutput.textContent = inputValue;
  } else {
    refs.userNameOutput.textContent = "Anonymous";
  }
});
