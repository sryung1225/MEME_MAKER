import { rgbToHex } from "./lib/index.js";

const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorPick = document.querySelector(".color-picker");
const colorInput = document.getElementById("color");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_SIZE = 800;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";
let canvasFilledColor = "white";
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
    modeBtn.innerText = "🩸 Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "💉 Draw";
  }
}
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    canvasFilledColor = ctx.fillStyle;
  }
}
function onColorChange(e) {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
  colorPick.style.backgroundColor = e.target.value;
}
function onColorClick(e) {
  const colorValue = rgbToHex(getComputedStyle(e.target).backgroundColor);
  console.log(colorValue);
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  colorInput.value = colorValue;
  colorPick.style.backgroundColor = colorValue;
}
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  canvasFilledColor = ctx.fillStyle;
}
function onEraserClick() {
  ctx.strokeStyle = canvasFilledColor;
  isFilling = false;
  modeBtn.innerText = "🩸 Fill";
}
function onFileChange(e) {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image(); // <img src=""/>
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
    fileInput.value = null;
  };
}
function onDoubleClick(e) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "68px Gowun Dodum";
    ctx.fillText(text, e.offsetX, e.offsetY);
    ctx.restore();
  }
}
function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("mousemove", painting);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
canvas.addEventListener("dblclick", onDoubleClick);
lineWidth.addEventListener("change", onLineWidthChange);
modeBtn.addEventListener("click", onModeClick);
colorInput.addEventListener("change", onColorChange);
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);
