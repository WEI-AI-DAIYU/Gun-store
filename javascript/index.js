const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const menuImg = document.querySelector(".menu>img");
const sideNav = document.createElement("div");
sideNav.className = "side-nav";

for(let i = 1; i <= 6; i++) {
    const sideNavItems = document.createElement("a");
    sideNavItems.className = "side-nav-items";

    switch(i) {
        case 1:
            sideNavItems.textContent = "firearms";
            sideNavItems.href = "1firearms.html";
            break;
        case 2:
            sideNavItems.textContent = "ammunition";
            sideNavItems.href = "2ammunition.html";
            break;
        case 3:
            sideNavItems.textContent = "optics";
            sideNavItems.href = "3optics.html";
            break;
        case 4:
            sideNavItems.textContent = "accessories";
            sideNavItems.href = "4accessories.html";
            break;
        case 5:
            sideNavItems.textContent = "hunting";
            sideNavItems.href = "5hunting.html";
            break;
        case 6:
            sideNavItems.textContent = "knives";
            sideNavItems.href = "6knives.html";
            break;
        default:
            break;
    }

    sideNav.appendChild(sideNavItems);
}
menu.addEventListener("click", ()=> {
    if(menuImg.src.includes("/image/assets/menu-icon.svg")) {
        

        menuImg.src = "/image/assets/black-cross.svg";
        body.appendChild(sideNav);
    } else {

        menuImg.src = "/image/assets/menu-icon.svg";
        body.removeChild(sideNav);
    }
})

const mediaQuery = window.matchMedia("(min-width: 769px)");

function sideNavHandler(e) {
    if(e.matches && document.body.contains(sideNav)) {
        
        sideNav.remove();
        menuImg.src = "/image/assets/menu-icon.svg";
    }
}

sideNavHandler(mediaQuery);
mediaQuery.addEventListener("change", sideNavHandler);

const scrollBtnUp = document.querySelector(".scroll-button-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtnUp.style.display = "block";
        
    
    } else {
        scrollBtnUp.style.display = "none"
    }
}

scrollBtnUp.addEventListener("click", ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// matchmedia(tablet), side table of contents
const tabletLinkRoot = document.querySelector(".store-content-root");
const storeContent = document.querySelector(".store-content");
const tabletOpenBtn = document.querySelector(".tablet-menu");
const tablet = document.querySelector(".tablet");
const tabletLink = document.querySelectorAll(".tablet>a");
const tabletLinkContainer = document.querySelector(".store-container");
const storeItems = document.querySelector(".store-items");
const tabletCloseBtn = document.createElement("button");
tabletCloseBtn.className = "tablet-exit-btn";
const tabletExitBtnImg = document.createElement("i");
tabletExitBtnImg.className = "fa fa-arrow-left";
tabletCloseBtn.appendChild(tabletExitBtnImg);

function tabletContentHandler() {
    tablet.classList.remove('click');
    tabletLinkContainer.classList.remove('click');
    storeItems.classList.remove('click')
    tabletLink.forEach(link => {
        
        link.classList.remove('click');
    });
    tabletCloseBtn.remove();
}
tabletOpenBtn.addEventListener("click", ()=> {
    tablet.classList.add('click');
    tabletLinkContainer.classList.add('click');
    storeItems.classList.add('click')
    tabletLink.forEach(link => {
        
        link.classList.add('click');
    });
    tabletLinkRoot.appendChild(tabletCloseBtn);
    tabletOpenBtn.style.display = "none";
});
tabletCloseBtn.addEventListener("click", ()=> {
    tabletContentHandler();
    
    tabletOpenBtn.style.display = "flex";
});

const tabletMediaQuery = window.matchMedia("(min-width: 641px)");

function tabletHandler(e) {
    if(e.matches && storeContent.contains(tabletOpenBtn)) {
        tabletOpenBtn.style.display = "none";
        tabletContentHandler();
    }
    else {
        tabletOpenBtn.style.display = "flex";
    }
}

tabletHandler(tabletMediaQuery);
tabletMediaQuery.addEventListener("change", tabletHandler);

const tabletMenuLink = document.querySelectorAll(".store-content>a");

tabletMenuLink.forEach(link => {
    link.addEventListener("click", ()=> {
        tabletContentHandler();
        tabletHandler(tabletMediaQuery);
    });
});

// Shopping Cart
const addToCart = document.querySelectorAll(".add-to-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingQuantityContainer = document.querySelector(".number-of-shoppin-items");
const shoppingQuantity = document.querySelector(".shopping-quantity");
let quantity = 0;

addToCart.forEach(items => {
    items.addEventListener("click", ()=> {
        quantity += 1;
        shoppingQuantity.textContent = quantity;
    })
});

