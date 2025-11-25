const input = document.querySelector(".email-input");
const emailErr = document.querySelector(".email-error");
const submitBtn = document.getElementById("submit-btn");
const iconError = document.querySelector(".icon-error");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validateEmailInput();
});

function validateEmailInput() {
  const val = input.value.trim();
  const emailOk = /.+@.+\..+/.test(val);
  if (!emailOk) {
    input.style.borderColor = "red";
    emailErr.style.display = "block";
    iconError.style.display = "block";
  } else {
    alert("Email submitted successfully!");
    input.style.borderColor = "";
    input.value = "";
    emailErr.style.display = "none";
    iconError.style.display = "none";
  }
}
