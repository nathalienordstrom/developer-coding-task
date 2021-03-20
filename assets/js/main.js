function animatedForm() {
    //to get all the diffrent arrows in the form //
    const arrows = document.querySelectorAll(".fa-arrow-down");

    //this function is going to run for each arrow
    // and each arrow are attatch to an event listener
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            //this is to get the first input 
            const input = arrow.previousElementSibling;
            //this is to get the parent element if the <i> tag
            const parent = arrow.parentElement;
            // this is to get the parent and then the next element sibiling
            const nextForm = parent.nextElementSibling;

            // Check for validation

            //If email input is true it will go to the validationEmail
            //function to check and se if true or not, if the backgrounf becomes red or white. 
            if (input.type === "email" && validationEmail(input)) {
                nextSlide(parent, nextForm)
                //If text input is true and then it will go to the validationUser
                //function to check and se if true or not, if the backgrounf becomes red or white.  
            } else if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            } else {
                // If the inputs value are not true it will refer to the animation shake from the CSS
                //and not go to the next slide 
                parent.style.animation = "shake 0.5s ease";
            }
        });
    });
}

function validationEmail(email) {
    //This is to se that it is an email adress written in the input
    const validation = /^[^\s@]+@[^\s@]+$/;
    //the validation.test will test the input against the regex and if that is correct it will return true
    if (validation.test(email.value)) {
        // this is connected to the error function that changes the background color
        error("white");
        return true;
    } else {
        // this is connected to the error function that changes the background color
        error("rgb(189, 87, 87");
    }
}

// this will allow the user to not fill in the input and get to the next slide anyways
function validateUser(user) {
    // if the user don´t want to write their the name 
    if (user.value.length < 0) {
    } else {
        error("white");
        return true;
    }
}


function nextSlide(parent, nextForm) {
    // This takes the current parent and addes the class of inactive wich will fade it out
    //This is going to transition out the inputs
    parent.classList.add("inactive");
    //Then remove active from it
    parent.classList.remove("active");
    // Then the active class is added and it is going to transition in ti inputs
    nextForm.classList.add("active")
}
// This is so the errors in the validateUser/validateEmail 
//changes the background color.
function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();