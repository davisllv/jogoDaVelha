// const column1 = document.getElementById("column1");
// const column2 = document.getElementById("column2");
// const column3 = document.getElementById("column3");
// const column4 = document.getElementById("column4");
// const column5 = document.getElementById("column5");
// const column6 = document.getElementById("column6");
// const column7 = document.getElementById("column7");
// const column8 = document.getElementById("column8");
// const column9 = document.getElementById("column9");

// let i = 1;
// console.log(i);
// if (i % 2 !== 0) {
//   const column = document.getElementById(`column${i}`);
//   column.addEventListener("click", () => {
//     column.innerHTML = "<p>X</p>";
//     i = i + 1;
//   });
// }

// if (i % 2 === 0) {
//   const column = document.getElementById(`column${i}`);
//   column.addEventListener("click", () => {
//     column.innerHTML = "<p>O</p>";
//     i++;
//   });
// }
let i = 1;
const xImage = '<img src="../assets/xImage.png" alt="xImage">';
const oImage = '<img src="../assets/image.png" alt="oImage">';

window.addEventListener("click", (ev) => {
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
    const columnsList = document.querySelectorAll(".column");
    console.log(columnsList);
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
