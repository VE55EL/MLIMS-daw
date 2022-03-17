"use strict";

function main() {

    let div = document.querySelector("div");
    let p = document.createElement("p");
    div.append(p);
    p.innerHTML = `Number of books: ${books.length}`;

    let ul = document.createElement("ul");
    div.append(ul);
    for(let i = 0; i < books.length; i++){
    let li = document.createElement("li");
    ul.append(li);
    li.innerHTML = `${books[i].title}`;
    }
    let button1 = document.createElement("button");
    button1.setAttribute("id","created");
    div.append(button1);
    button1.innerHTML = `order by created`

    let button2 = document.createElement("button");
    button2.setAttribute("id","updown");
    div.append(button2);
    button2.innerHTML = `order by up to down`

    let button3 = document.createElement("button");
    button3.setAttribute("id","abc");
    div.append(button3);
    button3.innerHTML = `order by alphabetical`

    let buttonCreated = document.querySelector("#created");
    let buttonUpdown = document.querySelector("#updown");
    let buttonAbc = document.querySelector("#abc");
    
}
document.addEventListener('DOMContentLoaded', main);