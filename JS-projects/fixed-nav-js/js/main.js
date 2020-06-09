const nav = document.querySelector('.navbar');
const topOfNav = nav.offsetTop;

function fixnav(e) {
    //console.log(topOfNav, window.scrollY);
    //console.log(nav.scrollHeight);
    //console.log(nav.getClientRects());
    //console.log(nav.offsetTop);
    if(window.scrollY >= topOfNav){
       document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
    

}

window.addEventListener('scroll', fixnav);