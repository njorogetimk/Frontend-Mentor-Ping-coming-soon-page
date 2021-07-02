const form = document.querySelector("form");
const email = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const valid = validateEmail(email.value.trim());

  if (!valid) {
    form.className = "error";
  }
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
