const toggleCollapse = document.querySelector('.toggle-collapse-my span');
const nav = document.querySelector('.nav-my');
// onclick event
toggleCollapse.onclick = () =>{
    nav.classList.toggle('collapse-my');
}
// animation on scroll
$(function() {
    AOS.init();
});