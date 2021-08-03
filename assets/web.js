const loginModal = document.getElementsByClassName('loginFormContainer')
const loginOpen = document.getElementById('loginOpen')
const loginClose = document.getElementById('loginClose')


loginOpen.addEventListener('click', ()=>{
 loginModal.style.display = 'block'
})

loginClose.addEventListener('click', ()=>{
    loginModal.style.display = "none"
   })