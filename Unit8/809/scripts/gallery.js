function main() {
    let img = document.querySelector("img");
    img.setAttribute("src","img/"+books[0].cover);

    let h1 = document.querySelector("h1");

    h1.innerHTML = `${books[0].title}`;

    let p = document.querySelector("p");

    p.innerHTML = `by ${books[0].author} (${books[0].publishedIn})`;
}

document.addEventListener('DOMContentLoaded', main);