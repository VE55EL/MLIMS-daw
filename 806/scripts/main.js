"use strict";


function main() {
    
    let div = document.createElement("div");
    
        div.setAttribute("id","info");
        document.body.append(div);
        let number = 10;
        div.append(number);     
}

document.addEventListener('DOMContentLoaded', main);