const selected = document.querySelector(".selected");
const optionsCOntainer = document.querySelector(".options-container");
const optionsLists = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsCOntainer.classList.toggle("active");
});

optionsLists.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsCOntainer.classList.remove("active");
  });
});
