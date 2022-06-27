let i = 1;
let placar = {
  o: 0,
  x: 0,
};
let vencedor = "";
const xImage =
  '<img class="imageGame" src="../assets/JogodaVelha01.jpg" alt="xImage"/>';
const oImage =
  '<img class="imageGame" src="../assets/JogodaVelha02.jpg" alt="oImage"/>';

const gameBox = document.querySelector(".game-box");
const scoreX = document.querySelector(".scoreX");
const scoreO = document.querySelector(".scoreO");

function casasIguais(a, b, c) {
  let columnA = document.querySelector("#column" + a);
  let columnB = document.querySelector("#column" + b);
  let columnC = document.querySelector("#column" + c);

  if (
    columnA.children.length > 0 &&
    columnB.children.length > 0 &&
    columnC.children.length > 0 &&
    columnA.className == columnB.className &&
    columnB.className == columnC.className &&
    columnA != "none" &&
    columnA != ""
  ) {
    return true;
  } else {
    return false;
  }
}

function limparCasas() {
  i = 1;
  console.log(document.querySelectorAll(".column"));
  const columnList = document.querySelectorAll(".column");

  columnList.forEach((it) => {
    it.className = "column";
  });
  setTimeout(() => {
    const imgList = document.querySelectorAll(".imageGame");
    imgList.forEach((it) => {
      it.remove();
    });
  }, 200);
  console.log(document.querySelectorAll(".column"));
}

gameBox.addEventListener("click", (ev) => {
  console.log(ev.target);

  if (ev.target.className !== "imageGame") {
    if (i % 2 === 0) {
      const column = ev.target;
      column.innerHTML = oImage;
      column.classList.add("o");
    } else {
      const column = ev.target;
      column.innerHTML = xImage;
      column.classList.add("x");
    }
    console.log(i);
    i++;
    console.log(i);

    if (i >= 5) {
      if (
        casasIguais(1, 2, 3) ||
        casasIguais(4, 5, 6) ||
        casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) ||
        casasIguais(2, 5, 8) ||
        casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) ||
        casasIguais(3, 5, 7)
      ) {
        if (i % 2 === 0) {
          console.log("O Vencedor foi X");
          placar.x++;
          scoreX.children[1].textContent = `: ${placar.x}`;
        } else {
          console.log("O Vencedor foi O");
          placar.o++;
          scoreO.children[1].textContent = `: ${placar.o}`;
        }
        limparCasas();
      }
    }
    if (i > 9) {
      limparCasas();
      console.log("Deu velha");
    }
  }
});
