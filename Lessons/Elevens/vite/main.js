import { Components } from "./components";
import * as Helpers from "./helpers";

const {Main, Header, Footer} = Components;
const { GetNumbers } = Helpers;



document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Main({GetNumbers})}
  ${Footer()}
`;

