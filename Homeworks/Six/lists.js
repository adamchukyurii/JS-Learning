class ShopList {
   constructor(arrayOfProducts) {
      this.arrayOfProducts = arrayOfProducts;
      this.sortShopList();
   }

   print() {
      console.log(this.SortedArray);
   }

   sortShopList() {
      arrayOfProducts.sort((x, y) => {
         (x === y) ? 0 : x ? 1 : -1;
      });
   }

   addProduct(name, quantities, byed) {
      this.arrayOfProducts.push({name: name, quantity: quantities, byed: byed});
      this.sortShopList;
   }

   byingProduct(id){
      this.arrayOfProducts[id][byed] = true;
      this.sortShopList;
   }
}

