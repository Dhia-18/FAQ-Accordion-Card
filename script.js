const questions = document.querySelectorAll(".question-container");
const answers = document.querySelectorAll(".answer");

function changeIcon(icon){
    if(icon.src.includes("images/icon-arrow-down.svg")){
        icon.src="images/icon-arrow-up.svg";
    }
    else{
        icon.src="images/icon-arrow-down.svg";
    }
}

for (let i=0 ; i<questions.length ; i++){
    questions[i].addEventListener("click",()=>{
        const arrowIcon = questions[i].querySelector("img");
        const questionText = questions[i].querySelector(".question");
        
        changeIcon(arrowIcon);
        questionText.classList.toggle("active");
        answers[i].classList.toggle("hidden");
    });
}