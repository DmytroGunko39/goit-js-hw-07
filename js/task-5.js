function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  btnClick: document.querySelector(".change-color"),
  backgroundColorText: document.querySelector(".color"),
  backgroundColorEl: document.querySelector(".widget"),
};
console.log(refs);

const handleBtnClick = () => {
  const newColor = getRandomHexColor();
  refs.backgroundColorEl.style.backgroundColor = newColor;
  refs.backgroundColorText.textContent = newColor;
};

refs.btnClick.addEventListener("click", handleBtnClick);
