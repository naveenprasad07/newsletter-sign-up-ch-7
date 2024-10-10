const errEl = document.querySelector(".flex-cont span");
const emailEl = document.querySelector("#email");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const dismissEl = document.querySelector(".dismiss");
const successEl = document.querySelector(".success-cont");

function isValid(email) {
  // Regular expression for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

dismissEl.addEventListener("click", function () {
  container.classList.remove("hidden");
  successEl.classList.add("hidden");
});

button.addEventListener("click", function (e) {
  if (!isValid(emailEl.value)) {
    errEl.classList.remove("hidden");
    emailEl.style.outline = `1px solid red `;
    emailEl.style.color = `red `;
    emailEl.value = "";
  } else {
    document.querySelector(".sux-des span").textContent = emailEl.value;
    emailEl.value = "";
    successEl.classList.remove("hidden");
    errEl.classList.add("hidden");
    emailEl.style.outline = `none`;
    emailEl.style.color = "rgba(1,1,1,0.3)";
    container.classList.add("hidden");
  }
});
