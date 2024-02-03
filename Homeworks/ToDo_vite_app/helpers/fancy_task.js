export const tasks = document.querySelector("#Tasks");

tasks.addEventListener('mousemove', (event) => {
   const mouseY = event.clientY / window.innerHeight - 0.5;

   const rotateX = -mouseY * 30;

   tasks.style.transform = `rotateX(${rotateX}deg) `;
})