/*elementos*/
const burgericonElement = document.getElementById("burgericon");
const mobilemenuElement = document.getElementById("mobilemenu");

const showMenu = () => {
  mobilemenuElement.classList.toggle("hide");
};

burgericonElement.addEventListener("click", showMenu);
