function modeDark(){
    const body = document.querySelector('body');
    body.style.background = "var(--color-black)";
    body.style.color = "var(--color-white)";

    const containerFloating = document.getElementsByClassName('containerFloating');
    containerFloating.style.background = "var(--background-floating-on)";

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