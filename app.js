import { } from "./lib/index.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50);
ctx.lineTo(50, 100);
ctx.lineTo(100, 100);
ctx.lineTo(100, 50);
ctx.lineTo(50, 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(300, 300);
ctx.lineTo(300, 400);
ctx.lineTo(400, 400);
ctx.lineTo(400, 300);
ctx.lineTo(300, 300);
ctx.fill();