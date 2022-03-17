"use strict";

function main() {
    let metamorfosis = {
        title: 'La Metamorfosis',
        author: 'Franz Kafka',
        publishedIn: 1915,
        alreadyRead: true,
    };

    let cthulhu = {
        title: 'La Llamada De Cthulhu',
        author: 'H. P. Lovecraft',
        publishedIn: 1981,
        alreadyRead: false,
    };

    let berserk = {
        title: 'Berserk',
        author: 'Kentaro Miura',
        publishedIn: 1989,
        alreadyRead: true,
    };

    let books = [metamorfosis, cthulhu, berserk];

    title();

    function title() {
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

}

document.addEventListener('DOMContentLoaded', main);