const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// ban đầu thì chưa có giá trị form
let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using API
  isValid = form.checkValidity();
  //
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
    // nếu form ko valid thì ko chạy xuống dưới nữa
  }
  // Check password
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure password match";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  // if form is valid and password match
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
    messageContainer.style.color = "green";
  }
}
//dùng để lưu lại để gửi tới server
function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
}

function processFormData(e) {
  e.preventDefault();
  //   ValidateForm
  validateForm();
  //   Submit Data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
// Even Listener
form.addEventListener("submit", processFormData);
