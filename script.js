const form = window.document.getElementById('form-number');
const inpNumberA = window.document.getElementById('number-a');
const inpNumberB = window.document.getElementById('number-b');


function validateNumber (a, b) {
    const A = a;
    const B = b;
    return A >= B;
}

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let formValidate;

    let numberA = inpNumberA.value;
    let numberB = inpNumberB.value;
    formValidate = validateNumber(numberA, numberB);

    if (!formValidate) {
        window.document.querySelector('.error-message').style.display = 'block';
    } else {
        window.document.querySelector('.sucess-message').style.display = 'block';
    }
});