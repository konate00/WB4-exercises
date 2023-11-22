"use strict";

const clearBtn = document.getElementById('clearBtn');
const newStudentTxt = document.getElementById('newStudentTxt');
const addStudentBtn = document.getElementById('addStudentBtn');


window.onload = function(){
    clearBtn.onclick = clearBtnClick;
    addStudentBtn.onclick = addStudentBtnClick;

};

function clearBtnClick(){
    students = [];
    updateStudentList();

}

function addStudentBtnClick(){
    let newStudentName = newStudentTxt.value;
    student

}

function updateStudentList(){
    studentList2.textContent = "";

    for (let student of students){
        
    }

}
