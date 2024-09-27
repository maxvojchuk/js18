let counterValue = 0;
const counterElement = document.querySelector("#counter");
const valueElement = document.querySelector("#value");
const updateValue = () => {
  valueElement.textContent = counterValue;
};

counterElement.addEventListener("click", (event) => {
  if (event.target.dataset.action === "increment") {
    counterValue++;
  } else if (event.target.dataset.action === "decrement") {
    counterValue--;
  }

  updateValue();
});
