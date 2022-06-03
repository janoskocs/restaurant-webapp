function log(element) {
    console.log(element)
}

const multiStepForm = document.querySelector('[data-multi-step]')

const formSteps = [...multiStepForm.querySelectorAll('[data-step]')]

//FLAGS
const customerNameGreetPage = 0
const seatCountPage = 1
const dateSelectionPage = 2
const timeSelectionPage = 3
const foodCarouselPage = 4
const submitPage = 5

//FLAGS END HERE
let currentStep = formSteps.findIndex(step => {
    return step.classList.contains('active')
})

if (currentStep < 0) {
    currentStep = 0
    showCurrentStep()
}

multiStepForm.addEventListener('click', e => {

    if (e.target.matches('[data-next]')) {
        switch (currentStep) {
            case 0:
                const inputs = formSteps[currentStep].querySelectorAll('input')[0].value //ALWAYS SELECTS THE FIRST INPUT ON EACH PAGE 
                if (isInputValid(inputs)) {
                    spanUpdate(inputs)
                    currentStep += 1
                    showCurrentStep()
                    break;
                } else {
                    showError('Please enter your name...')
                    break;
                }

                break;
            case 1:
                // code block
                break;
            case 2:
                // code block
                break;
            case 3:
                // code block
                break;
            case 4:
                // code block
                break;
            case 5:
                // code block
                break;
            default:
            // code block
        }

    } else if (e.target.matches('[data-previous]')) {
        currentStep -= 1
        showCurrentStep()
    } else {
        return
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

const isInputValid = (input) => {
    if (input.length > 1) {
        return true
    } else if (input.length === 0) {
        return false
    }
}

const spanUpdate = (customerName) => {
    const nameHolderSpans = [...multiStepForm.querySelectorAll('[data-customer-name-show]')]

    nameHolderSpans.forEach(span => {
        span.innerText = customerName
    })
}