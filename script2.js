const nameInput = document.getElementById("nameInput");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const emailInput = document.getElementById("emailInput");
const noEmailCheckbox = document.getElementById("no_email");
const submitButton = document.querySelector(".submit");
const errorMessages = document.querySelectorAll(".error-message");

function validateName(name) {
  return name.trim().length > 0;
}

function validateDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date instanceof Date &&
    !isNaN(date) &&
    date.getDate() == day &&
    date.getMonth() == month - 1 &&
    year.length === 4
  );
}

function validateEmail(email) {
  if (noEmailCheckbox.checked) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Allow only numbers in birthday fields
[dayInput, monthInput, yearInput].forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  });
});

noEmailCheckbox.addEventListener("change", () => {
  emailInput.disabled = noEmailCheckbox.checked;
  if (noEmailCheckbox.checked) {
    emailInput.value = "";
  }
});

submitButton.addEventListener("click", () => {
  const nameValid = validateName(nameInput.value);
  const dateValid = validateDate(
    dayInput.value,
    monthInput.value,
    yearInput.value
  );
  const emailValid = validateEmail(emailInput.value);

  // Reset error messages
  errorMessages.forEach((msg) => msg.classList.remove("show"));

  if (!nameValid) {
    document.querySelector(".name .error-message").classList.add("show");
  }
  if (!dateValid) {
    document.querySelector(".birthday .error-message").classList.add("show");
  }
  if (!emailValid) {
    document.querySelector(".email .error-message").classList.add("show");
  }

  if (nameValid && dateValid && emailValid) {
    // Store form data
    const formData = {
      name: nameInput.value,
      birthday: `${dayInput.value}/${monthInput.value}/${yearInput.value}`,
      email: noEmailCheckbox.checked ? "No email provided" : emailInput.value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "page3.html";
  }
});
