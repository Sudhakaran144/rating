const btn1 = document.querySelector(".btn2")
const btn2 = document.querySelector(".btn3")
const btn3 = document.querySelector(".btn4")
const btn4 = document.querySelector(".btn5")
const btn5 = document.querySelector(".btn6")
const submit = document.querySelector(".submit")
const ratingContainer = document.querySelector(".r-container")
const tkContainer = document.querySelector(".t-container")
const rate = document.querySelector(".rate")

let rating = 0;


btn1.addEventListener("click",()=>{
    console.log(btn1.value)
    rating = btn1.value
    btn1.classList.toggle("active")
})
btn2.addEventListener("click",()=>{
    
    rating = btn2.value
    btn2.classList.toggle("active")
})
btn3.addEventListener("click",()=>{
    
    rating = btn3.value
    btn1.classList.toggle("active")
})
btn4.addEventListener("click",()=>{
     
    rating = btn4.value
    btn4.classList.toggle("active")
})
btn5.addEventListener("click",()=>{
    console.log(btn1.value)
    rating = btn5.value
    btn5.classList.toggle("active")
})

submit.addEventListener("click" , ()=>{
    ratingContainer.style.display = "none"
    tkContainer.style.display = "flex"
    rate.innerHTML =`You seleted ${rating} out 5`
    console.log("20")
})