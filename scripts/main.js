
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
