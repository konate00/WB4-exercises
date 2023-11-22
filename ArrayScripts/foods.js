"use strict";

let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 }
  ];
  
  // Calculate subtotal
  let subtotal = 0;
  for (let i = 0; i < lunch.length; i++) {
    subtotal += lunch[i].price;
  }
  
  // Calculate tax (8%)
  let taxRate = 0.08;
  let tax = subtotal * taxRate;
  
  // Calculate tip (18%)
  let tipRate = 0.18;
  let tip = subtotal * tipRate;
  
  // Calculate total due
  let totalDue = subtotal + tax + tip;
  
  // Print the results
  console.log("Subtotal:        $" + subtotal.toFixed(2));
  console.log("Tax (8%):        $" + tax.toFixed(2));
  console.log("Tip (18%):        $" + tip.toFixed(2));
  console.log("Total Due:        $" + totalDue.toFixed(2));