const mainContainer = document.getElementsByClassName("_container__main-rating");
const thankContainer = document.getElementsByClassName("_container__main-thank");
const submitButton = document.getElementsByClassName("main");

const rating = document.getElementsByClassName("rating");
const numbers = document.querySelectorAll(".number");

submitButton[0].addEventListener("click", function(){
    mainContainer[0].classList.toggle("hidden");
    thankContainer[0].classList.toggle("hidden");
})

numbers.forEach(number => {
    number.addEventListener("click", function(){
        rating[0].innerHTML = number.innerHTML;
        number.classList.toggle("clicked");
    })
})

let arr = ['a', 'b', 'c', 'd'];

for (let n of arr) {
  // what will n be?
  console.log(n);
}

for (let n in arr) {
  // what will n be?
  console.log(n);
}