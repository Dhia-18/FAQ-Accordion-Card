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

function resetFAQ(activeQuestionIndex){
    for(let i=0;i<questions.length;i++){
        if(i!==activeQuestionIndex){
            const arrowIcon = questions[i].querySelector("img");
            const questionText = questions[i].querySelector(".question");

            arrowIcon.src="images/icon-arrow-down.svg";
            questionText.classList.remove("active");
            answers[i].classList.add("hidden");
        }
    }
}

for (let i=0 ; i<questions.length ; i++){
    questions[i].addEventListener("click",()=>{
        const arrowIcon = questions[i].querySelector("img");
        const questionText = questions[i].querySelector(".question");
        
        resetFAQ(i);
        changeIcon(arrowIcon);
        questionText.classList.toggle("active");
        answers[i].classList.toggle("hidden");
    });
}