let showButton=document.getElementById('signup');

let popup = document.querySelector('.none-container')

let closeButotn = document.getElementById('login')

let closeButotn2 = document.getElementById('login2')

showButton.addEventListener("click", ()=> {
    popup.style.display="block";
    showButton.style.display="none";
});

closeButotn.addEventListener("click", () =>{
    popup.style.display="none";
    showButton.style.display="inline";
});


closeButotn2.addEventListener("click", () =>{
    popup.style.display="none";
    showButton.style.display="inline";
});

