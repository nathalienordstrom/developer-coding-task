function animatedForm() {
    const arrows = document.querySelectorAll(".fa-arrow-down");

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            // Check for validation

            if(input.type === "email" && validationEmail(input)) {
                nextSlide(parent, nextForm)
            }else if (input.type === "text" && validateUser(input)) {
                nextSlide(parent, nextForm);
            }else {
                parent.style.animation = "shake 0.5s ease";
            }
        });
    });
}

function validationEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+$/;
    if (validation.test(email.value)) {
        error("white");
        return true;
    } else {
        error("rgb(189, 87, 87");
    }
}

function validateUser(user) {
    if (user.value.length < 2) {
        error("rgb(189, 87, 87");
    } else {
        error("white");
        return true;
    }
}


function nextSlide(parent, nextForm) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active")
}

function error(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();


(function ($) {


})(jQuery);