const phoneInput = document.getElementById("phoneInput");
const submitButton = document.querySelector(".submit");
const checkmark = document.querySelector(".checkmark");
const errorMessage = document.getElementById("errorMessage");

checkmark.style.display = "none";
errorMessage.classList.remove("show");

phoneInput.addEventListener("input", (e) => {
  checkmark.style.display = "60173527250" ? "block" : "none";
});

submitButton.addEventListener("click", () => {
  if (phoneInput.value === "60173527250") {
    window.location.href = "page2.html";
    localStorage.setItem("phoneNumber", "60173527250");
  } else {
    alert("Invalid phone number. Please try again.");
    errorMessage.classList.add("show");
  }
});
