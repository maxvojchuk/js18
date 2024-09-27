const listOfCategories = document.querySelector(".categories");
const categories = listOfCategories.querySelectorAll("li.item");
console.log(`У списку ${categories.length} категорій`);

for (let i = 0; i < categories.length; i++) {
  const category = categories[i];
  const tittle = category.querySelector(".title");
  const items = category.querySelectorAll("li");

  console.log(`Category ${tittle.textContent}`);
  console.log(`Кількість елементів - ${items.length}`);
}
