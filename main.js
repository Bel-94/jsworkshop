let uname = document.getElementById("name")
let btn = document.getElementById("btn")

let colors = ["red", "purple", "blue", "yellow"]
let pnames = ['John', 'Emily', 'Sam', 'Silas', 'Bobo']


const changeColor = () => {
    let randNum = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor = colors[randNum]; 
    
    let randNameNum = Math.floor(Math.random()*pnames.length);
    uname.innerHTML = pnames[randNameNum];
};

// adding eventlistener
btn.addEventListener("click", changeColor);


// changeColor()

