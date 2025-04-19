const refs = {
  lists: document.querySelectorAll("ul"),
  items: document.querySelectorAll(".item ul li"),
  categories: document.querySelectorAll("#categories .item"),
};

console.log(`Number of categories: ${refs.categories.length}`);

refs.categories.forEach((element) => {
  const header = element.querySelector("h2").textContent;
  const listItem = element.querySelectorAll(".item ul li").length;
  console.log(`Category: ${header}`);
  console.log(`Elements: ${listItem}`);
});

refs.lists.forEach((element) => element.classList.add(["frame-list"]));

refs.items.forEach((element) => element.classList.add(["frame-item"]));
