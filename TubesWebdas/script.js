const testimonals = [
  "Indulging in the rich and velvety notes of your wine suave has been an absolute delight. Its smooth texture and exquisite blend create a sensory experience that captivates my palate. Truly a remarkable choice for any wine enthusiast!",
  "Your wine suave is a true masterpiece. From the first sip to the last, the elegant harmony of flavors unfolds effortlessly. Its subtle complexities and lingering finish make it the perfect companion for those special moments of relaxation and celebration.",
  "Exceptional taste, unparalleled smoothness — your wine suave has become my go-to choice. Its refined character and balanced nuances elevate every occasion. A toast to sophistication and the artistry behind this exceptional blend!",
];

function changePerson(content) {
  let text = document.getElementById("text");
  let iconLeft = document.getElementById("left");
  let iconRight = document.getElementById("right");
  let image = document.getElementById("person-img");

  if (content === "right") {
    if (image.src.endsWith("person2.avif")) {
      text.innerHTML = testimonals[2];
      iconRight.classList.add("display");
      image.src = "images/person3.avif";
    } else if (image.src.endsWith("person1.avif")) {
      text.innerHTML = testimonals[1];
      image.src = "images/person2.avif";
      iconLeft.classList.remove("display");
    }
  } else if (content === "left") {
    if (image.src.endsWith("person3.avif")) {
      text.innerHTML = testimonals[1];
      iconRight.classList.remove("display");
      image.src = "images/person2.avif";
    } else if (image.src.endsWith("person2.avif")) {
      text.innerHTML = testimonals[0];
      image.src = "images/person1.avif";
      iconLeft.classList.add("display");
    }
  }
}
