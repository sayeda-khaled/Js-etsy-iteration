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

console.log(averagePrice);

//Second probolem


const filterPrices = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18;
});

console.log(filterPrices, filterPrices);


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

  return item.materials == ["wood"];
});

console.log(materialsArray);


// Fifth problem
