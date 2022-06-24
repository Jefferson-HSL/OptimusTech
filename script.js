// Modo noturno ou modo claro
function modeDark(){
    const body = document.querySelector('body');
    body.style.background = "var(--color-black)";
    body.style.color = "var(--color-white)";

    const containerFloating = document.querySelector('.containerFloating');
    containerFloating.style.background = "var(--background-floating-on)";
    containerFloating.style.border = "3px solid black";

    const linkOne = document.querySelector("a.linkOne");
    linkOne.classList.add("off");
    linkOne.classList.remove("on");
    const linkTwo = document.querySelector("a.linkTwo");
    linkTwo.classList.add("on");
    linkTwo.classList.remove("off");
}

function modeLight(){
    const body = document.querySelector('body');
    body.style.background = "var(--color-white)";
    body.style.color = "var(--color-black)";

    const containerFloating = document.querySelector('.containerFloating');
    containerFloating.style.background = "var(--background-floating-off)";

    const linkOne = document.querySelector("a.linkOne");
    linkOne.classList.add("on");
    linkOne.classList.remove("off");
    const linkTwo = document.querySelector("a.linkTwo");
    linkTwo.classList.add("off");
    linkTwo.classList.remove("on");
}

//funções para os modais
const containerModalRegister = document.querySelector(".containerModalRegister");
const closeRegisterClicked = document.querySelector("img.closeTwo");

function modalRegister(){

    containerModalRegister.style.display = "flex";

    activeBlur();
}

closeRegisterClicked.addEventListener("click", () => {
    
    containerModalRegister.style.display = "none";
    
    disableBlur();
});

const containerModalLogin = document.querySelector(".containerModalLogin");
const closeLoginClicked = document.querySelector("img.closeOne");

function modalLogin(){
    
    containerModalLogin.style.display = "flex";
    
    activeBlur();
}

closeLoginClicked.addEventListener("click", () => {

    containerModalLogin.style.display = "none";

    disableBlur();
});

function activeBlur(){
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    const main = document.querySelector("main");
    main.style.filter = "blur(5px)";

}

function disableBlur(){
    const body = document.querySelector("body");
    body.style.overflow = "visible";
    const main = document.querySelector("main");
    main.style.filter = "none";
}