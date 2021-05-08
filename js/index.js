const menuBtn = document.querySelector(".menu-btn");

const mobileMenu = document.querySelector(".menu-mobile_container");

const menuLogo = document.querySelector(".logo-image");


let menuBtnOpen = false;

menuBtn.addEventListener('click', ()=>{

    if(!menuBtnOpen){
        menuBtn.classList.add("open");

        mobileMenu.style.visibility ="visible";

        menuBtnOpen = true;

        // hides the main menu-container logo
        menuLogo.style.visibility = "hidden";
    }else{
        menuBtn.classList.remove("open");
        menuBtnOpen = false;

        mobileMenu.style.visibility = "hidden";

        menuLogo.style.visibility = "visible";
    }


})