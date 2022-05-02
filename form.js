console.log("welcome to travel form");
const username = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('number');
let validname = false;
let validemail = false;
let validnumber = false;

username.addEventListener('blur', () => {
    console.log("name is blured")
    let regEx = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log(" Your name is valid")
        username.classList.remove('is-invalid');
        validname = true;
    } else {
        console.log(" Your name is invalid")
        username.classList.add('is-invalid');
        validname = false;
    }

})
email.addEventListener('blur', () => {
    console.log("email is blured")
    let regEx = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,30}$/;
    let str = email.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log(" Your email is valid")
        email.classList.remove('is-invalid');
        validemail = true;
    } else {
        console.log(" Your email is invalid")
        email.classList.add('is-invalid');
        validemail = false;
    }

})
number.addEventListener('blur', () => {
    console.log("contact is blured")
    let regEx = /^([0-9]){10}$/;
    let str = number.value;
    console.log(regEx, str);
    if (regEx.test(str)) {
        console.log(" Your contact is valid")
        number.classList.remove('is-invalid');
        validnumber = true;
    } else {
        console.log(" Your contact is invalid")
        number.classList.add('is-invalid');
        validnumber = false;
    }

})
function msg(type, showMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message!</strong> ${showMessage}.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
    setTimeout(function () {
        message.innerHTML = " ";
     
    }, 4000);
}

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("you clicked submit")
    if (validemail && validname && validnumber) {
        // let failure =document.getElementById('failure');
        console.log("submitting the form")
        let success = document.getElementById('success');
        // success.classList.add('show');
        // failure.classList.remove('show');
        msg("success", "Your travel requested as been successfully submit");

        // setTimeout(function () {
        //     message.innerHTML = " ";
        // }, 2000);


    }
    else {
        console.log("some details are missing try again")
        let failure = document.getElementById('failure');
    
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>failure!</strong>Your travel request as not been send due to errors.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
        setTimeout(function () {
            message.innerHTML = " ";
        }, 3000);




    }


})
