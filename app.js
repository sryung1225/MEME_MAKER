import { rgbToHex } from "./lib/index.js";

const modeBtn = document.getElementById("mode-btn");
const color = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

function painting(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
  isPainting = true;
}
function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}
function onLineWidthChange(e) {
  ctx.lineWidth = e.target.value;
}
function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
}
function onColorClick(e) {
  const colorValue = rgbToHex(getComputedStyle(e.target).backgroundColor);
  console.log(colorValue);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

canvas.addEventListener("mousemove", painting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
modeBtn.addEventListener("click", onModeClick);
color.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
