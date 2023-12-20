// const TestBlock = document.querySelector("#CkickTest");

// let number = 0;

// TestBlock.onclick = () => {
//    TestBlock.innerHTML = number++;
// }

// const Interval = setInterval(() => {
//    TestBlock.innerHTML = number++;
// }, 1000);

// TestBlock.addEventListener("mousemove", () => {
//    clearInterval(Interval);
// });

// TestBlock.addEventListener("mouseleave", () => {
//    setInterval(() => {
//       TestBlock.innerHTML = number++;
//    }, 1000);
// });

// const GetBackgroundColor = () => {
//    return `rgb(
//       ${Math.floor(Math.random() * 255)},
//       ${Math.floor(Math.random() * 255)},
//       ${Math.floor(Math.random() * 255)}
//    )`;
// };

// document.body.addEventListener("mousemove", () => {
//    document.body.style["top"] =
// });

// document.body.addEventListener("click", (event) => {
//    console.log(event);
// });

// document.body.addEventListener("mousemove", (event) => {
//    const {x, y} = event;
//    TestBlock.style.left = `${x - 100}px`;
//    TestBlock.style.top = `${y - 100}px`;
// });

let ulArray = [];
let letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i <= 20; i++) {
  const ul = document.createElement("ul");
  ul.classList = 'List'
  ulArray.push(ul);
}


// setInterval(() => {

// }, 1000);

if (ulArray.length > 0) {
   for(let i = 0; i< letterArray.length; i++){
      ulArray.map((item)=>{
         const li = document.createElement("li");
         li.classList = 'List-Item'
     

            li.innerHTML = letterArray[i];


         item.appendChild(li)
         document.body.appendChild(item)
      })
}
}
