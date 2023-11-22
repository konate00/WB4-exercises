"use strict";
// Your code here...
// Exo 1 p 1-9 WB4
let myInfo = {
    name: 'Ousmane Konate',
    address: '111 w 201 st',
    city: 'New York',
    state: 'NY',
    zipCode: '10003'
}

function printContact(myInfo) {
    console.log(myInfo.name)
    console.log(`${myInfo.address}`);
    console.log(`${myInfo.city}, ${myInfo.state} ${myInfo.zipCode}`)
}
printContact(myInfo);