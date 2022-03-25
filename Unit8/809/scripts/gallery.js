function main() {
    book();
    let j = 0;
    
    function book(){    
        let img = document.querySelector("img");
        img.setAttribute("src","img/"+books[0].cover);

        let h1 = document.querySelector("h1");

        h1.innerHTML = `${books[0].title}`;

        let p = document.querySelector("p");

        p.innerHTML = `by ${books[0].author} (${books[0].publishedIn})`;
    }

    function nextBook(){
        j++;
        if(j<4){
        let img = document.querySelector("img");
        img.setAttribute("src","img/"+books[j].cover);

        let h1 = document.querySelector("h1");

        h1.innerHTML = `${books[j].title}`;

        let p = document.querySelector("p");

        p.innerHTML = `by ${books[j].author} (${books[j].publishedIn})`;
        }
    }

    function previoustBook(){
        j--;
        if(j>(-1)){
        let img = document.querySelector("img");
        img.setAttribute("src","img/"+books[j].cover);

        let h1 = document.querySelector("h1");

        h1.innerHTML = `${books[j].title}`;

        let p = document.querySelector("p");

        p.innerHTML = `by ${books[j].author} (${books[j].publishedIn})`;
        }
    }

    let next = document.querySelector("#next");
    next.addEventListener("click", nextBook);
    let previous = document.querySelector("#previous");
    previous.addEventListener("click", previoustBook);
}

document.addEventListener('DOMContentLoaded', main);