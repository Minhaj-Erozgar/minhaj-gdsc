const bar = document.getElementById('bar');
const nav=document.getElementById('navbar');
const close=document.getElementById('close')

if(bar){
    bar.classList.add('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    bar.classList.add('click',()=>{
        nav.classList.remove('active')
    })
}