// Modo noturno ou modo claro
function modeDark(){
    const body = document.querySelector('body');
    body.style.background = "var(--color-black)";
    body.style.color = "var(--color-white)";

    const containerFloating = document.querySelector('.containerFloating');
    containerFloating.style.background = "var(--background-floating-on)";
    containerFloating.style.border = "3px solid black";

    const dark = document.querySelector("a.dark");
    dark.classList.add("off");
    dark.classList.remove("on");
    const light = document.querySelector("a.light");
    light.classList.add("on");
    light.classList.remove("off");
}

function modeLight(){
    const body = document.querySelector('body');
    body.style.background = "var(--color-white)";
    body.style.color = "var(--color-black)";

    const containerFloating = document.querySelector('.containerFloating');
    containerFloating.style.background = "var(--background-floating-off)";

    const dark = document.querySelector("a.dark");
    dark.classList.add("on");
    dark.classList.remove("off");
    const light = document.querySelector("a.light");
    light.classList.add("off");
    light.classList.remove("on");
}

//funções para os modais
const containerModalRegister = document.querySelector(".containerModalRegister");
const closeRegisterClicked = document.querySelector("img.closeTwo");

function modalRegister(){

    containerModalRegister.style.display = "flex";

    activeBlur();
}

function closeRegister() {
    
    containerModalRegister.style.display = "none";
    
    disableBlur();
};

const containerModalLogin = document.querySelector(".containerModalLogin");
const closeLoginClicked = document.querySelector("img.closeOne");

function modalLogin(){
    
    containerModalLogin.style.display = "flex";
    
    activeBlur();
}

function closeLogin() {

    containerModalLogin.style.display = "none";

    disableBlur();
};

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

var Data = new Date();
var horas = Data.getHours();

if (horas > 17){
    modeDark()
}