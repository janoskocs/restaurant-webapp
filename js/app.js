const multiStepForm = document.querySelector('[data-multi-step]')//ACCESS FORM
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')]//CREATE AN ARRAY FROM HTML NODES

let currentStep = formSteps.findIndex(step => { //FIND INDEX NEEDS AN ARRAY TO RETURN THE CORRECT STEP WHICH HAS THE CLASS ACTIVE
    return step.classList.contains('active')
})

if (currentStep < 0) {//FIND INDEX RETURNS -1 IF NO ELEMENT HAS ACTIVE CLASS
    currentStep = 0 //SET THE CURRENT STEP TO 0 WHICH POINTS TO THE 1ST PAGE AND ADD THE CLASS ACTIVE TO IT TO MAKE IT VISIBLE BY DEFAULT
    formSteps[currentStep].classList.add('active');
}

multiStepForm.addEventListener('click', e => {
    if (e.target.matches('[data-next]')) {

        customerNameInput()
        currentStep += 1
    } else if (e.target.matches('[data-previous]')) {
        currentStep -= 1
    } else {
        return // returns nothing 
    }

    showCurrentStep()
})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}

//CUSTOMER NAME

function customerNameInput() {
    const nameInput = formSteps[currentStep].querySelectorAll('[data-customer-name]')[0].value.toLowerCase()

    if (nameInput === '') {
        alert('error')
    }
    console.log(nameInput)


}

function nameChanger() {
    const spanNameHolder = formSteps.querySelectorAll('[data-customer-name-show')[0]
    spanNameHolder.innerHTML = nameInput
}

