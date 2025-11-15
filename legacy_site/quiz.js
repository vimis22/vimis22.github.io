function checkAnswer(questionNumber) {
    // Get all radio buttons for the given question number
    const radios = document.getElementsByName(`choice${questionNumber}`);

    // Variable to store the user's selected value
    let selectedValue = null;

    // Loop through all radio buttons to find the selected one
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }

    // Check the selected answer and display the appropriate alert
    if (selectedValue) {
        if ((questionNumber === 1 && selectedValue === "4") ||
            (questionNumber === 2 && selectedValue === "8")) {
            alert("This answer is right");
        } else {
            alert("This answer is wrong");
        }
    } else {
        alert("Please select an answer");
    }
}
