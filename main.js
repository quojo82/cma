//console.log(document.querySelector(".my-form"))
//console.log(document.querySelectorAll(".items"))

//const ul= document.querySelector('.items')

//ul.remove();

/*ul.firstElementChild.textContent="Hello";
ul.children[1].innerHTML="wild2"
ul.lastElementChild.innerText="mild" */
const myform = document.querySelector('#my-form');
const inputName= document.querySelector('#name');
const emailInput =document.querySelector('#email')
const msg = document.querySelector('.msg')


 /* const btn =document.querySelector('.btn');

btn.style.background="black"

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.my-form').
    style.background = '#cccc'

    document.querySelector(".my-form").classList.add('border-color') */

//}) 

myform.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault()

    if( inputName.value===''|| emailInput.value===''){
        msg.style.display = 'block'
        msg.classList.add('error');
        msg.innerHTML="Please enter all fields"

        setTimeout(()=>msg.style.display = 'none',3000)
    return false;
    }

   else{
    console.log('Success')
   }
}

