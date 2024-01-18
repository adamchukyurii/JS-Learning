class ShopList {
   constructor(arrayOfProducts) {
      this.arrayOfProducts = arrayOfProducts;
      this.sortShopList();
   }

   print() {
      console.log(`Product Quantity Byed`);
      for (let i = 0; i < this.arrayOfProducts.length; i++) {
         console.log(`${this.arrayOfProducts[i]['name']} ${this.arrayOfProducts[i]['quantity']} ${this.arrayOfProducts[i]['byed']}`)
      }
   }

   sortShopList() {
      this.arrayOfProducts.sort((x, y) => {
         return (x.byed === y.byed) ? 0 : x.byed ? 1 : -1;
      });
   }

   addProduct(name, quantities, byed) {
      this.arrayOfProducts.push({name: name, quantity: quantities, byed: byed});
      this.sortShopList();
   }

   byingProduct(productName){
      const index = this.arrayOfProducts.findIndex(product => product.name === productName)
      this.arrayOfProducts[index]['byed'] = true;
      this.sortShopList();
   }
}

const products = ["banana", "orange", "vodka", "pivo", "ogurec"];
const quantities = [5, 4, 3, 10, 2];
const byed = [false, false, true, true, false];
const cost = [30, 30, 100, 30, 20];
let shopList = [];
let orderlist = [];

for (let i = 0; i < products.length; i++) {
   shopList.push({name: products[i], quantity: quantities[i], byed: byed[i]});
}

for (let i = 0; i < products.length; i++) {
   orderlist.push({name: products[i], quantity: quantities[i], cost: cost[i]});
}

const list = new ShopList(shopList);
list.print();

class Order {
   constructor(arrayOfOrdered) {
      this.arrayOfOrdered = arrayOfOrdered;
   }

   print() {
      console.log(`Product Quantity Cost`);
      for (let i = 0; i < this.arrayOfOrdered.length; i++) {
         console.log(`${this.arrayOfOrdered[i]['name']} ${this.arrayOfOrdered[i]['quantity']} ${this.arrayOfOrdered[i]['cost']}`)
      }
   }

   sumOfOrder() {
      let sum = 0;
      for (let i = 0; i < this.arrayOfOrdered.length; i++) {
         sum += this.arrayOfOrdered[i]['quantity'] * this.arrayOfOrdered[i]['cost'];
      }
      this.sum = sum;
      console.log(`The cost of your order is ${this.sum}`);
   }

   theMostExpensive() {
      let maxCost = this.arrayOfOrdered[0]['cost'] * this.arrayOfOrdered[0]['quantity'];
      let index = 0;

      for (let i = 1; i < this.arrayOfOrdered.length; i++) {
         if (this.arrayOfOrdered[i]['cost'] * this.arrayOfOrdered[i]['quantity'] > maxCost) {
            maxCost = this.arrayOfOrdered[i]['cost'] * this.arrayOfOrdered[i]['quantity'];
            index = i;
         }
      }
      console.log(`The most expensive order is ${this.arrayOfOrdered[index]['name']} with a cost of ${maxCost}`);
   }

   midCost() {
      console.log(`The mid cost of each product is ${this.sum/this.arrayOfOrdered.length}`);
   }
}

const order = new Order(orderlist);

class CSStylesArray {
   constructor(arrayOfStyles) {
      this.arrayOfStyles = arrayOfStyles;
   }



}

const colors = ['blue', 'black', 'aquamarine', 'tomato'];
const fontSizes = ['11px', '14px', '18px', '26px'];
const alignings = ['right', 'left', 'center', 'left'];
const decorations = ['underline overline', 'doted', 'underline', 'line-through']
let listStyles = [];

for (let i = 0; i < fontSizes.length; i++){
   listStyles.push({color: colors[i], fontSize: fontSizes[i], textAlign: alignings[i], textDecoration: decorations[i]});
}
console.log(listStyles);

for (let i = 0; i < fontSizes.length; i++) {
   document.body.innerHTML += `<p style='color: ${listStyles[i]['color']}; font-size: ${listStyles[i]['fontSizes']}; text-align: ${listStyles[i]['textAlign']}; text-decoration: ${listStyles[i]['textDecoration']};'>I Love ITSTEP</p>`
}

class Auditories {
   constructor(arrayOfAuditories) {
      this.arrayOfAuditories = arrayOfAuditories;
   }

   print(nameOfFaculty) {
      let auditoriesForFaculty = [];
      if (nameOfFaculty !== undefined) {
         for (let i of this.arrayOfAuditories) {
            if (nameOfFaculty === i['facultyName']) {
               auditoriesForFaculty.push(i);
            }
         }
         console.log(`Auditories for ${nameOfFaculty} are ${JSON.stringify(auditoriesForFaculty)}`);
      } else {
         console.log(`There are all auditories ${JSON.stringify(this.arrayOfAuditories)}`);
      }
   }

   availableByGroup(group) {
      let availableAuditories = [];

      if (group !== null) {
         for (let i of this.arrayOfAuditories) {
            if (i['sits'] >= group['studentsAmount']) {
               if (i['facultyName'] === group['facultyName']) {
                  availableAuditories.push(i);
               }
            }
         }
      }
      console.log(`${JSON.stringify(availableAuditories)} is available for studying`);
   }

   sortBySits() {
      this.arrayOfAuditories.sort((a, b) => b.sits - a.sits);
   }

   sortByName() {
      this.arrayOfAuditories.sort((a, b) => a > b);
      console.log(this.arrayOfAuditories);
   }

}

const group = {
   name: "Quidich",
   studentsAmount: 18,
   facultyName: "InfomationTechnology",
}

const names = ["A-block", "B-block", "C-block", "D-block"];
const sits = [Math.floor(10 + Math.random() * (20 - 10 + 1)), Math.floor(10 + Math.random() * (20 - 10 + 1)), Math.floor(10 + Math.random() * (20 - 10 + 1)), Math.floor(10 + Math.random() * (20 - 10 + 1))];
console.log(sits);
const facultiesName = ["InfomationTechnology", "Managment", "Architecture", "Math"];
let auditoriesList = [];

for (let i = 0; i < names.length; i++) {
   auditoriesList.push({name: names[i], sits: sits[i], facultyName: facultiesName[i]});
}
console.log(auditoriesList);

let auditories = new Auditories(auditoriesList);

auditories.print("InfomationTechnology");
auditories.availableByGroup(group);
auditories.sortByName();