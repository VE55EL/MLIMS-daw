"use strict";

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function selectAll() {
    let checkboxes = document.querySelectorAll('input["type=checkbox"]');

   
}

function main() {

    let checked = [10]

    function checkBox() {
        let ul = document.createElement("ul");
        document.body.append(ul);
        let li = document.createElement("li");
        ul.append(li);
        let checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        li.append(checkBox);
        let label = document.createElement("label");
        label.setAttribute("for","number");
        checkBox.after(label);
        label.innerHTML = `${random(1, 10)}`;
    }

    for (let i=0; i < 10; i++) {
        checked.unshift(checkBox());
        
    }
    console.log(checked[2]);
}

document.addEventListener('DOMContentLoaded', main);