import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
    ClientGame.init({ tagId: 'game' });
});

// const shots= 3;
// const step = 10;
// const maxW = 600;
// const maxH = 600;

// let cycle = 0;
// let look = 0;
// let bottomPressed = false;
// let upPressed = false;
// let leftPressed = false;
// let rightPressed = false;
// let pX = (maxW - spriteW) / 2;
// let pY = (maxH - spriteW) / 2;

// function keyDownHandler(e) {
//     if (e.key === 'Down' || e.key === 'ArrowDown') {
//         bottomPressed = true;
//     } else
//     if (e.key === 'Up' || e.key === 'ArrowUp') {
//         upPressed = true;
//     } else
//     if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         leftPressed = true;
//     } else
//     if (e.key === 'Right' || e.key === 'ArrowRight') {
//         rightPressed = true;
//     }
// }

// function keyUpHandler(e) {
//     if (e.key === 'Down' || e.key === 'ArrowDown') {
//         bottomPressed = false;
//     } else
//     if (e.key === 'Up' || e.key === 'ArrowUp') {
//         upPressed = false;
//     } else
//     if (e.key === 'Left' || e.key === 'ArrowLeft') {
//         leftPressed = false;
//     } else
//     if (e.key === 'Right' || e.key === 'ArrowRight') {
//         rightPressed = false;
//     }

// }

// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);

// ctxBG.strokeStyle = 'tomato';
// ctxBG.lineWidth = spriteW;
// ctxBG.beginPath();
// ctxBG.moveTo(pX + (spriteW / 2), pY + (spriteH / 2));

// const img = document.createElement('img');
// img.src = SenseiWalk;

// img.addEventListener('load', () => {
//     setInterval(() => {
//         if (bottomPressed || upPressed || leftPressed || rightPressed) {
//             cycle = (cycle + 1) % shots;
//         }

//         if (bottomPressed && pY < (maxH - spriteH)) {
//             pY += step;
//             look = 0;
//         } else
//         if (upPressed && pY > 0) {
//             pY -= step;
//             look = 3;
//         } else
//         if (leftPressed && pX > 0) {
//             pX -= step;
//             look = 1;
//         } else
//         if (rightPressed && pX < (maxW - spriteW)) {
//             pX += step;
//             look = 2;
//         }

//         ctx.clearRect(0, 0, maxW, maxH);
//         ctx.drawImage(img, cycle * spriteW, spriteH*look, spriteW, spriteH, pX, pY, 48, 48);
//         ctxBG.lineTo(pX + (spriteW / 2), pY + (spriteH / 2));
//         ctxBG.stroke();

//     }, 120);
// });
