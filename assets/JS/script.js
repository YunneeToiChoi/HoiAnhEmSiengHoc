var user= document.querySelector('.user-navbar__box')
var userParent = document.querySelector('.user-header__form--active')
var menu= document.querySelector('.menu')

function xx (){
    userParent.classList.add('active')
}

user.addEventListener('click',xx )
function remove(){
    userParent.classList.remove('active')
}
menu.addEventListener('click',remove);

// END EVENT CLICK 

//BEGIN NAV CLICK TO VADITION

const register = userParent.querySelector('.user-header__form--navRegister')



