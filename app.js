for (let i = 0; i < 200; i++) {
  let div = document.createElement("div");
  div.className = "square";
  board.appendChild(div);
}
let pointers = [
  "crosshair",
  "help",
  "move",
  "pointer",
  "help",
  "move",
  "progress",
  "text",
  "wait",
  "n-resize",
  "ne-resize",
  "se-resize",
  "s-resize",
  "sw-resize",
  "nw-resize",
  "grab",
  "vertical-text",
  "all-scroll"
];
let squares = document.querySelectorAll(".square");
squares.forEach(square => {
  square.addEventListener("mouseover", () => {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    square.style.background = `rgba(${r},${g},${b},.9)`;
    square.style.boxShadow = `0px 0.1px 1.6px rgb(${r},${g},${b})`;
    square.style.cursor = pointers[Math.round(Math.random() * pointers.length)];
  });

  square.addEventListener("mouseout", () => {
    setTimeout(() => {
      square.style.background = `rgba(77, 77, 77,.9)`;
      square.style.boxShadow = `0px 0.1px .6px white`;
    }, 700);
  });
});
