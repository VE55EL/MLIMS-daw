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
        if(j<books.length){
            let img = document.querySelector("img");
            img.setAttribute("src","img/"+books[j].cover);
            let h1 = document.querySelector("h1");
            h1.innerHTML = `${books[j].title}`;
            let p = document.querySelector("p");
            p.innerHTML = `by ${books[j].author} (${books[j].publishedIn})`;
            if(j === 3) {
                next.disabled = true;
            }
            else {
                previous.disabled = false;
            }
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
            if(j === 0) {
                previous.disabled = true;
            }
            
            else {
                next.disabled = false;
            }
        }
    }
    
    let next = document.querySelector("#next");
    next.addEventListener("click", nextBook);
    let previous = document.querySelector("#previous");
    previous.addEventListener("click", previoustBook);
    previous.disabled = true;
}

document.addEventListener('DOMContentLoaded', main);