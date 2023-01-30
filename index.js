

let yes =document.querySelector('.yes')
yes.addEventListener('click', function(){
    yes.classList.toggle('show')
})

yes.addEventListener('click', function(){
    maybe.classList.remove('show')
})


let no =document.querySelector('.no')
no.addEventListener('click', function(){
    no.classList.toggle('show')
})
no.addEventListener('click', function(){
    yes.classList.remove('show')
})
yes.addEventListener('click', function(){
    no.classList.remove('show')
})

let maybe =document.querySelector('.maybe')
maybe.addEventListener('click', function(){
    maybe.classList.toggle('show')
})

maybe.addEventListener('click', function(){
    no.classList.remove('show')
})
no.addEventListener('click', function(){
    maybe.classList.remove('show')
})
maybe.addEventListener('click', function(){
    yes.classList.remove('show')
})
let box = document.querySelector('.box') ; 
let mybox = document.querySelector('.mybox');
let cl = document.querySelector('.cl');

box.addEventListener('click', function(){
    mybox.classList.add('show')
})

cl.addEventListener('click', function(){
    mybox.classList.remove('show');
 })



 let list =document.querySelector('.list')
 let bur =document.querySelector('.bur')


 list.addEventListener('click', function(){
   bur.classList.toggle('show')
  
 
})
