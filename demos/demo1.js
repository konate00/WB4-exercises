"use strict"

function dispalyPayStub(payStub) {
    console.log(payStub.employee.FirstName + " earned $" +
        payStub.grossPay.toFixed(2)) + "working for " + payStub.hoursWorked + " hours.";
}
function createPayStub(employee, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
        grossPay = employee.payRate * hoursWorked;
    } else {
        grossPay = (40 * employee.payRate) + ((hoursWorked - 40) * 1.5 * employee.payRate);
    }

    let payStub = {
        employee: employee,
        hoursWorked: hoursWorked,
        grossPay: grossPay
    };

    return payStub;

}

let emp1 = {
    Id: '1',
    FirstName: 'John',
    lastName: 'smith',
    payRate: 38.46
}

let emp2 = {
    Id: '2',
    FirstName: 'Jane',
    LastName: 'Doe',
    payRate: 43.27
}

let emp3 = {
    Id: "3",
    FirstName: "Elijah",
    LastName: "Williams",
    PayRate: 27.5
}


let emp1PayStub = createPayStub(emp1, 35);
let emp2PayStub = createPayStub(emp2, 45);
let emp3PayStub = createPayStub(emp3, 40);

displayPayStub( emp1PayStub);
displayPayStub( emp2PayStub);
displayPayStub( emp3PayStub);