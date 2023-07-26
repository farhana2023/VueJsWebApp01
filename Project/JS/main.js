

let navbar=document.querySelector('.HeaderContainer .navcontainer')
document.querySelector('#menu-btn').onclick=()=>{
navbar.classList.add('active')
}

document.querySelector('#close-navbar').onclick=()=>{
    navbar.classList.remove('active')
 }