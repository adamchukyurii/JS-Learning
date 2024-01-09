// // const UserData = [
// //    {
// //        profileType: "admin",
// //        username: "jonhSnow2007",
// //    },
// //    {
// //        profileType: "user",
// //        username: "useruser",
// //    },
// // ];

// // const ToDataJson = JSON.stringify(UserData);
// // console.log(ToDataJson);

// // const UserDataStorage =
// //    JSON.parse(localStorage.getItem("UserData")) || UserData;
// // localStorage.setItem("UserData", ToDataJson);
// // const LoginUser = prompt("Input you nickname");

// // UserData.forEach(({ username }) => {
// //    if (username === LoginUser) {
// //        localStorage.setItem("LoginUser", LoginUser);
// //    }
// // });

// // const ul = document.createElement("ul");
// // const { body } = document;

// // const UserLoginLocalStorage = localStorage.getItem("LoginUser");

// // UserData.map(({ profileType, username }) => {
// //    if (UserLoginLocalStorage === username) {
// //        ul.innerHTML += `<li>Hi ${username}, you profile type: ${profileType}</li>`;
// //    }
// // });

// // body.appendChild(ul);


// // const data = {
// //    x: 10,
// //    y: 5,
// // };

// // const { x, y } = data;
// //2
// const li = document.createElement("li");

// const itemStyles = {
//    width: '60px',
//    height: '60px',
//    margin: '10px',
// };

// const colorItems = JSON.parse(localStorage.getItem('ColorItems')) || [];

// const GeneratedCard = (color, index) => {
//    const {width, height, margin} = itemStyles;
//    return `<li onclick='DeleteItem(event)' style="width: ${width}; height: ${height}; margin: ${margin}; background-color: ${color}; border-radius: 10px; box-shadow: 10px -15px 10px; display: flex; justify-content: center; align-items: center; color: #fff;  "><span>${index}</span></li>`
// };

// const ColorList = document.querySelector("#ColorList")
// const { body } = document;

// const AddColorBlock = (event) => {
//    event.preventDefault();
//    const { value } = document.querySelector("#Color");
//    colorItems.push(value);
   
//    ColorList.innerHTML += GeneratedCard(value, colorItems.length - 1);
//    localStorage.setItem("ColorItems", JSON.stringify(colorItems));


// }

// colorItems.map((color, index) => {
//    ColorList.innerHTML += GeneratedCard(color, index);
// });

// const DeleteItem = (event) => {
//    const { target } = event;
//    const { id } = target;
//    console.log(id); 
//    colorItems.splice(id, 1);
//    localStorage.setItem("ColorItems", JSON.stringify(colorItems));
//    target.remove();

// }

//3

document.cookie = 'sidebar=false';
document.cookie = 'isCardActive=true';
document.cookie = prompt('Enter your cookie');


console.log(document.cookie);

const GetCookiesInfo = (cookie) => {
   const CookieSplitted = cookie.split("; ");
   CookieSplitted.map((value) => {
      const SplittedValue = value.split("=");
      console.log(`Name: ${SplittedValue[0]}, Value: ${SplittedValue[1]}`);
   });
};

GetCookiesInfo(document.cookie);