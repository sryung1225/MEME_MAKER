// 집 만들기 ㅋ
// 지붕
ctx.moveTo(400, 130);
ctx.lineTo(100, 270);
ctx.lineTo(140, 310);
ctx.lineTo(400, 183);
ctx.lineTo(660, 310);
ctx.lineTo(700, 270);
ctx.fillStyle = "red";
ctx.fill();

// 집
ctx.beginPath();
ctx.moveTo(400, 183);
ctx.lineTo(203, 280);
ctx.lineTo(203, 680);
ctx.lineTo(597, 680);
ctx.lineTo(597, 280);
ctx.lineTo(400, 183);
ctx.fillStyle = "ivory";
ctx.fill();
ctx.lineWidth = 5;
ctx.strokeStyle = "orange";
ctx.stroke();

// 창문
ctx.beginPath();
ctx.fillStyle = "skyblue";
ctx.strokeStyle = "brown";
ctx.arc(400, 340, 80, 1*Math.PI, 2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.fillStyle = "brown";
ctx.fillRect(310, 340, 180, 10);

// 문
ctx.beginPath();
ctx.fillRect(420, 450, 140, 230);
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(450, 565, 10, 0, 2*Math.PI);
ctx.fill();