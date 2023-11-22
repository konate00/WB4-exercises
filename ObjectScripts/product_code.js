"use strict";
// Your code here...

let partCode1 = 'XYZ:1234-L';

function parsePartCode(partcode){
    
    let posOfColon = partcode.indexOf(":");
    let posOfDash = partcode.indexOf("-");

    let part = {
        supplierCode:partcode.substring(0, posOfColon),
        productNumber: partcode.substring(posOfColon + 1, posOfDash),
        size: partcode.substring(posOfDash + 1)
    }

    return part;

}

let part = parsePartCode(partCode1);

console.log("Supplier: " + part.supplierCode +
" Product Number: " + part.productNumber +
" Size: " + part.size);

// function parsePartCode(partCode1) {

//     let supplierCode;
//     let productNumber;
//     let size;

//     let colon = partCode1.indexOf(':');
//     let dash = partCode1.indexOf('-');


//     supplierCode = partCode1.substring(0, colon);
//     productNumber = partCode1.substring(colon + 1, dash);
//     size = partCode1.substring(dash + 1);

//     let part = {
//         supplierCode: supplierCode,
//         productNumber: productNumber,
//         size: size
//     }
//     return part;

// };
//     let part = parsePartCode(partCode1);
//     console.log("Supplier: " + part.supplierCode);
//     console.log("Product Number: " + part.productNumber);
//     console.log(`size: ${part.size}`);
    

// console.log(`Supplier Code is ${supplierCode}`);
// console.log(`product Number Code is ${productNumber}`);
// console.log(`Size of Code is ${size}`);