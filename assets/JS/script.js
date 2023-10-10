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

////////////////////////////////// Mo form
const overPlayForm= document.querySelector('.form-vadition--overplay')

// register 
const registerNav = document.querySelector('.user-header__form--navRegister')

registerNav.addEventListener('click', ()=> {overPlayForm.classList.add('active')})

// close Form
const closeForm = overPlayForm.querySelector('.vadition__header-icon')
overPlayForm.addEventListener('click',()=>{overPlayForm.classList.remove('active')})
closeForm.addEventListener('click',()=> {overPlayForm.classList.remove('active')})