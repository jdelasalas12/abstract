
let searchBtn=document.querySelector('.searchBtn');
let closeBtn=document.querySelector('.closeBtn');
let search_box_expand=document.querySelector('.search_box_expand');


searchBtn.onclick=function() {
    search_box_expand.classList.add('active');
}
closeBtn.onclick=function(){
    search_box_expand.classList.remove('active');
}


const menuBtn= document.querySelector('#menuBtn')
const menu_bottom = document.querySelector('#menu_bottom')


menuBtn.addEventListener('click' , () => {
    menu_bottom.classList.toggle('hide')
    })
