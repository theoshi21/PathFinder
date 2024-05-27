var Choice_Val = 0;

function scoreCalc() {
    alert("Results received!");
    let totalScore = 0;
    for (let i = 1; i <= 30; i++) { //calculation takes name q[i] which i is the current iteration loop # in this for loop
        let question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question) {
            totalScore += parseInt(question.value);
        }
    }
    if (totalScore >= 3) {
        location.href = "result-backend.html"; //if the results fall between 3 -> 15 then they tilt towards backend
    } else if (totalScore <= -3) {
        location.href = "result-frontend.html"; //if the results fall between -3 -> -15 then they tilt towards frontend
    } else {
        location.href = "result-balanced.html"; //if the results fall between -2 -> 2 then they are way too balanced
    }

    console.log(totalScore);
    
}

function exitConfirmation() {  
    if (confirm("Are you sure you want to exit?") == true) {
        location.href = "landing_page.html#home-container"; //just some confirmation if ever they decide to exit the test for some reason without entering anything
    } else {
        console.log("user cancelled.");
    }
   
}