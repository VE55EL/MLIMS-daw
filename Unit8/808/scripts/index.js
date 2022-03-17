"use strict";

function main() {
        for(let i in books) {
            let div = document.querySelector("div");
            let p = document.createElement("p");
            div.append(p);
            if (books[i].alreadyRead === true)
            p.innerHTML = `You already read "${books[i].title}" by ${books[i].author}`;
            else
            p.innerHTML = `You still need to read "${books[i].title}" by ${books[i].author}`;
        }
}

document.addEventListener('DOMContentLoaded', main);