"use strict";
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
];

function findCandiesLessThanFourDollars(productList) {

    const affordableCandies = [];

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        if (product.price < 4.00) {
            affordableCandies.push(product.product);
        }
    }

    return affordableCandies;
}

function carrySwedishFish(productList) {
    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        if (product.product === "Swedish Fish") {
            return "Yes, we do carry 'Swedish Fish'";
        }
    }
    return "No we don't";
}

const affordableCandies = findCandiesLessThanFourDollars(products);
const carriesSwedishFish = carrySwedishFish(products);

console.log("Candies costing less than $4.00:", affordableCandies);
console.log("Do we carry 'Swedish Fish'?", carriesSwedishFish);





// Show candy that is M&Ms



// for (let i = 0; i < peanutMAndMs.length; i++){
//     console.log(peanutMAndMs[i].product + "$" + peanutMAndMs[i].price);

// }









