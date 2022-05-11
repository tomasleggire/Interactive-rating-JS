const container1 = document.getElementById("rating-form");
const container2 = document.getElementById("thk-page");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");

const btnSumbit = document.getElementById("sumbit");

const ratingBox = document.getElementById("rating-box");

let rating = "";

const resetBtn = (btnArr) => {
    for (i = 0; i < 4; i++) {
        btnArr[i].classList.remove("selected");
    }
}

btn1.addEventListener("click",(choose) =>{
    btn1.classList.add("selected");
    resetBtn([btn2,btn3,btn4,btn5]);
    rating = "1";
})

btn2.addEventListener("click",(choose) =>{
    btn2.classList.add("selected");
    resetBtn([btn1,btn3,btn4,btn5]);
    rating = "2";
})

btn3.addEventListener("click",(choose) =>{
    btn3.classList.add("selected");
    resetBtn([btn1,btn2,btn4,btn5]);
    rating = "3";
})

btn4.addEventListener("click",(choose) =>{
    btn4.classList.add("selected");
    resetBtn([btn1,btn2,btn3,btn5]);
    rating = "4";
})

btn5.addEventListener("click",(choose) =>{
    btn5.classList.add("selected");
    resetBtn([btn1,btn2,btn3,btn4]);
    rating = "5";
})

btnSumbit.addEventListener("click",(sumbit) => {
    if (rating !== "") {
        container2.classList.add("show");
        ratingBox.textContent = "You selected " + rating + " out of 5";
        container1.classList.add("hide");
    }
})

