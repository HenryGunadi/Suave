function submit() {
  let thanks = document.querySelector(".thankyou");
  let name = document.querySelector(".input");
  let email = document.querySelector(".email");
  let text = document.querySelector(".text");
  let button = document.querySelector(".btn");

  thanks.classList.remove("hidden");
  name.classList.add("hidden2");
  email.classList.add("hidden2");
  text.classList.add("hidden2");
  button.classList.add("hidden2");
}
