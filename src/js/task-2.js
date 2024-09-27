const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
const listOfIngredients = document.querySelector("#ingredients");
const itemsList = ingredients.map((ingrediant) => {
  const itemList = document.createElement("li");
  itemList.textContent = ingrediant;
  return itemList;
});
listOfIngredients.append(...itemsList);
