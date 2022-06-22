let i = 1;
let vencedor = "";
const xImage = '<img src="../assets/JogodaVelha01.jpg" alt="xImage">';
const oImage = '<img src="../assets/JogodaVelha02.jpg" alt="oImage">';

const gameBox = document.querySelector(".game-box");

function casasIguais(a, b, c) {
  let bgA = document.querySelector("#column" + a);
  let bgB = document.querySelector("#column" + b);
  let bgC = document.querySelector("#column" + c);
  console.log(bgA, bgB, bgC);
  if (
    bgA.className == bgB.className &&
    bgB.className == bgC.className &&
    bgA != "none" &&
    bgA != ""
  ) {
    return true;
  } else {
    return false;
  }
}

gameBox.addEventListener("click", (ev) => {
  if (i % 2 === 0) {
    const column = ev.target;
    column.innerHTML = oImage;
    column.classList.add("o");
  } else {
    const column = ev.target;
    column.innerHTML = xImage;
    column.classList.add("x");
  }

  i++;

  if (i >= 5) {
    console.log(casasIguais(1, 2, 3), casasIguais(4, 5, 6));
  }
  if (i > 9) {
    i = 1;

    setTimeout(() => {
      const imgList = document.querySelectorAll("img");
      imgList.forEach((it) => {
        it.remove();
      });
    }, 800);
  }
});
