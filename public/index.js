function passwordworking() {
  let icon1 = document.getElementById("takeinput");
  let icon2 = document.getElementById("eye1");
  let icon3 = document.getElementById("eye2");

  if (icon1.type === "password") {
    icon1.type = "text";
    icon2.style.display = "block";
    icon3.style.display = "none";
  } else {
    icon1.type = "password";
    icon2.style.display = "none";
    icon3.style.display = "block";
  }
}

function validateForm() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const passwordInput = document.getElementById("takeinput");

  if (nameInput.value.trim() === "") {
    alert("Name field is required");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("Email field is required");
    return;
  }

  if (passwordInput.value.trim() === "") {
    alert("Password field is required");
    return;
  }

  alert("Form submitted successfully!");
}

function handleButtonClick() {
  styleButton.classList.toggle("clicked-button");
}

document.addEventListener("DOMContentLoaded", function () {
  var loadeimage = document.getElementById("preloader");

  //   window.addEventListener("load", function () {
  //     setTimeout(function () {
  //       loadeimage.style.display = "none";
  //     }, 2000); // Adjust the time duration
  //   });
  const styleButton = document.getElementById("stylebutton");
  styleButton.addEventListener("click", handleButtonClick);

  const body = document.querySelector("body");
  const buttons = document.querySelectorAll("button");
  const toggle = document.getElementById("toggle");
  toggle.addEventListener("click", function () {
    console.log("toggle clicked");
    toggle.classList.toggle("active");
    if (toggle.classList.contains("active")) {
      body.classList.add("active");
      buttons.forEach((button) => {
        button.classList.add("active");
      });
    } else {
      body.classList.remove("active");
      buttons.forEach((button) => {
        button.classList.remove("active");
      });
    }
  });
});
