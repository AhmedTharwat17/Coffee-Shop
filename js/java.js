var selecter = document.querySelector('.footer-text .select-footer .lang-foot span'),
    langSelect = document.querySelector('.select-footer .lang-foot span .select-lang');

selecter.onclick = function(){
    if(langSelect.style.display === "none"){
        langSelect.style.display = 'block';
    }else{
        langSelect.style.display = 'none';
    }
}

var selectCount = document.querySelector('.footer-text .select-footer .lang-foot:nth-child(2) span'),
    countSelect = document.querySelector('.select-footer .lang-foot:nth-child(2) span .select-lang');

selectCount.onclick = function(){
    if(countSelect.style.display === "none"){
        countSelect.style.display = 'block';
    }else{
        countSelect.style.display = 'none';
    }
}

window.onclick = function(even){
    if(!even.target.matches('.footer-text .select-footer .lang-foot span')){
        if(langSelect.style.display === "block"){
            langSelect.style.display = 'none';
        }
    }

    if(!even.target.matches('.footer-text .select-footer .lang-foot:nth-child(2) span')){
        if(countSelect.style.display === "block"){
            countSelect.style.display = 'none';
        }
    }
}


// navbar scroll
var backNav = document.querySelector('.image-header .header'),
    logoNav = document.querySelector('.header .logo'),
    toggleColor = document.querySelector('.link-header .toggle-menu span');
    
window.addEventListener("scroll" , function(){
    backNav.classList.toggle('change' , window.scrollY > 0);
    if(window.scrollY > 0){
        logoNav.src = 'image/logo-footer.png';
    }else{
        logoNav.src = 'image/logo.png';
    }
});
// btn arrow down 
var btnArrow = document.querySelector('.btn-arrow img');
function scrollIntoView(elements){
        elements.addEventListener('click' , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            });
        });
};
scrollIntoView(btnArrow);

// toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.mainmenu');

toggleBtn.onclick = function(e){
    e.stopPropagation();
    this.classList.toggle('menu-active');
    tLinks.classList.toggle('open');
};
// click any where
document.addEventListener('click' , (e) => {
    if(e.target !== toggleBtn && e.target !== tLinks){
        if(tLinks.classList.contains('open')){
            toggleBtn.classList.toggle('menu-active');
            tLinks.classList.toggle('open');
        };
    };
});
tLinks.onclick = function(e){
    e.stopPropagation();
};