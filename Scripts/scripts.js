const xImage =
  '<img class="imageGame" src="../assets/JogodaVelha01.jpg" alt="xImage"/>';
const oImage =
  '<img class="imageGame" src="../assets/JogodaVelha02.jpg" alt="oImage"/>';

const sucessContainer = document.querySelector("#sucess-container");
const failureContainer = document.querySelector("#failure-container");
const container = document.querySelector(".container");

const gameBox = document.querySelector(".game-box");
const scoreX = document.querySelector(".scoreX");
const scoreO = document.querySelector(".scoreO");

// ============ FUNCIONAMENTO DO JOGO ============

let i = 1;

let placar = {
  o: 0,
  x: 0,
};

let vencedor = "";

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

function testarVencedor() {
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
    return true;
  }
  return false;
}

function limparCasas() {
  i = 1;
  const columnList = document.querySelectorAll(".column");
  const imgList = document.querySelectorAll(".imageGame");

  columnList.forEach((it) => {
    it.className = "column";
  });

  setTimeout(() => {
    imgList.forEach((it) => {
      it.remove();
    });
  }, 900);

  setTimeout(() => {
    sucessContainer.style.display = "none";
    failureContainer.style.display = "none";
  }, 2000);
}

function abrirSucesso() {
  if (i % 2 === 0) {
    sucessContainer.style.display = "flex";
    sucessContainer.textContent = "JOGADOR 1 FOI O VENCEDOR!";
    placar.x++;
    scoreX.children[1].textContent = `: ${placar.x}`;
  } else {
    sucessContainer.style.display = "flex";
    sucessContainer.textContent = "JOGADOR 2 FOI O VENCEDOR";
    placar.o++;
    scoreO.children[1].textContent = `: ${placar.o}`;
  }
  limparCasas();
}

function doisJogadores(ev) {
  if (ev.target.className === "column") {
    if (i % 2 !== 0) {
      const column = ev.target;
      column.innerHTML = xImage;
      column.classList.add("x");
      i++;
    } else {
      const column = ev.target;
      column.innerHTML = oImage;
      column.classList.add("o");
      i++;
    }

    if (i >= 5 && i < 10) {
      if (testarVencedor()) {
        abrirSucesso();
        console.log(this);
      }
    }

    if (i > 9) {
      if (testarVencedor()) {
        abrirSucesso();
      } else {
        failureContainer.style.display = "flex";
      }

      limparCasas();
    }
  }
}

function jogandoContraIa(ev) {
  if (ev.target.className === "column") {
    if (i % 2 !== 0) {
      const column = ev.target;
      column.innerHTML = xImage;
      column.classList.add("x");
      i++;
    } else {
      console.log("gay");
      i++;
    }

    if (i >= 5 && i < 10) {
      if (testarVencedor()) {
        abrirSucesso();
      }
    }

    if (i > 9) {
      if (testarVencedor()) {
        abrirSucesso();
      } else {
        failureContainer.style.display = "flex";
      }

      limparCasas();
    }
  }
}
// ============ SELECIONADO JOGADOR ============

function selecionarJogador(ev) {
  container.style.display = "flex";
  ev.path[1].style.display = "none";
  if (ev.target.className === "player") {
    gameBox.addEventListener("click", (ev) => doisJogadores(ev));
  } else {
    gameBox.addEventListener("click", (ev) => jogandoContraIa(ev));
  }
}
