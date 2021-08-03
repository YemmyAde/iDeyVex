let loginModal = document.querySelector('.loginFormContainer');
let loginModalOpen = document.querySelector('.modalOpen');
let loginModalClose = document.querySelector('.modalClose');

let menuModal = document.querySelector('.menuModal');
let mobileNavTrigger = document.querySelector('.menuModalOpen');
let mobileNavMenu = document.querySelector('.mobileNavMenu')

loginModalOpen.addEventListener('click', () => {
 loginModal.classList.add('modalShow');
 menuModal.classList.add('menuHide');

})

loginModalClose.addEventListener('click', () => {
    loginModal.classList.remove('modalShow');
   })

mobileNavTrigger.addEventListener('click', () =>{
   
    mobileNavMenu.classList.toggle('navShow');
})