const GetItems = (value) => {
   return `<li>${value}</li>`;
}

export const Main = ({GetNumbers}) => {
   console.log(GetNumbers(100));
   return `<main class='main'>
      <ul>
         ${GetNumbers(100).map((value) => GetItems(value)).join("")}
      </ul>
   </main>`
}