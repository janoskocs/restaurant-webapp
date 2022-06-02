function log(element) {
    console.log(element)
}

const multiStepForm = document.querySelector('[data-multi-step]')

const formSteps = [...multiStepForm.querySelectorAll('[data-step]')]

let currentStep = formSteps.findIndex(step => {
    return step.classList.contains('active')
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

multiStepForm.addEventListener('click', e => {
    let incrementor

    if (e.target.matches('[data-next]')) {
        incrementor = 1
    } else if (e.target.matches('[data-previous]')) {
        incrementor = -1
    }

    if (incrementor == null) return // if nothing is clicked do nothing

    const inputs = [...formSteps[currentStep].querySelectorAll('input')]
    const allValid = inputs.every(input => {
        if (currentStep === 0) {
            if (input.value !== '') {
                return true
            } else {
                showError('Please enter your name...')
            }
        }

    })

    if (allValid) {
        currentStep += incrementor
        showCurrentStep()
    }

})

function showCurrentStep() {
    formSteps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep)
    })
}

function showError(message) {
    const errorBoxText = multiStepForm.querySelectorAll('[data-error]')
    const errorBox = multiStepForm.querySelectorAll('[data-error-container]')
    errorBox[currentStep].classList.toggle('hidden')
    errorBoxText[currentStep].innerText = message;
}