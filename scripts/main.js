// get just the prices of each item in the array
// instead of an array of objects, we want an array of prices

const pricesArray = items.map(function(item) {
  return item.price;
});


console.log(pricesArray);

//To obtain the sum of the prices..
const sumPrice = pricesArray.reduce(function(prop, i) {

  return prop + i;
})

// to obtain the average cost
const averagePrice = (sumPrice / items.length);




//averagePrice.forEach(function(item) {
console.log("The average price is" + " " + averagePrice);
//});









//Second probolem


const filterPrices = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18;
});

console.log(filterPrices);


//Third probolem

// for(const [title, price] of items.entries()) {
//
//   //for (let i = 0; i < items.length; i++){
//     if (items.currency_code === "GBD"){
//       return [items.title, items.price];
//     }
//
//   }
//
//   //console.log[(title, price)];
//   //console.log(price);
// }

const currencyCodeArray = items.filter(function(item) {

  return item.currency_code === "GBP";
});

currencyCodeArray.forEach(function(item) {
  console.log(item.title + " " + item.price);
});


// forth problem..

const materialsArray = items.filter(function(item) {

  return item.materials.includes('wood');
});

console.log(materialsArray);


// Fifth problem

// const numbers = [2, 34, 3, 23, 42, 3, 1, 65];
//
// for (let i = 8; i < numbners.length; i++) {
//   console.log(numbers[i]);
// }


// const materialNumbers = items.map(function(item) {
//
//   for (let i = 8; i < materialNumbers.length; i++) {
//    console.log(item.materials[i]);
//
// }});


// const materialNumbers = items.map(function(item) {
//   return item.materials;
// });


//This will filter and retun the arrays with 8 o more items...
var manyMaterials = items.filter(function(item) {
  return item.materials.length > 7;
});

//This is to display according to the required message provided in the assignment..
manyMaterials.forEach(function(item){
  console.log(item.title + ' has ' + item.materials.length + ' materials: ' + item.materials)
})



//sixth problem..

// const whoMadeArray = items.map(function(item) {
//   return item['who_made'];
// });
//
//   console.log(whoMadeArray, whoMadeArray);

const iDidArray = items.filter(function(item) {

  return item['who_made'] === "i_did";
});

console.log(iDidArray);

iDidArray.forEach(function(item) {
  console.log(iDidArray.length + " " + "were made by their sellers");
});
