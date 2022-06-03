function log(element) {
    console.log(element)
}

const multiStepForm = document.querySelector('[data-multi-step]')

const formSteps = [...multiStepForm.querySelectorAll('[data-step]')]

const foodContainer = multiStepForm.querySelector('[data-food-container]')
const foodItems = [...foodContainer.querySelectorAll('[data-food]')]
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
        let inputs = formSteps[currentStep].querySelectorAll('input')[0].value //ALWAYS SELECTS THE FIRST INPUT ON EACH PAGE 
        switch (currentStep) {
            case 0:
                if (isInputValid(inputs)) {
                    spanUpdate(inputs)
                    currentStep += 1
                    showCurrentStep()
                    break;
                } else {
                    showError('Please enter your name...')
                    break;
                }
            case 1:
                inputs = formSteps[currentStep].querySelectorAll('input')[0].value //ALWAYS SELECTS THE FIRST INPUT ON EACH PAGE 
                if (isNumberValid(inputs)) {
                    spanUpdate(inputs)
                    currentStep += 1
                    showCurrentStep()
                    break;
                } else {
                    showError('Please enter a valid number less than 7...')
                    break;
                }
            case 2:
                inputs = formSteps[currentStep].querySelectorAll('input')[0].value //ALWAYS SELECTS THE FIRST INPUT ON EACH PAGE 
                if (isDateValid(inputs)) {
                    currentStep += 1
                    showCurrentStep()
                    break;
                } else {
                    showError('Selected date must not be in the past...')
                    break;
                }
            case 3:
                inputs = formSteps[currentStep].querySelectorAll('input')[0].value //ALWAYS SELECTS THE FIRST INPUT ON EACH PAGE 
                if (isTimeValid(inputs)) {
                    log(inputs)
                    currentStep += 1
                    showCurrentStep()
                    break;
                } else {
                    showError('I am afraid we are open from 9AM until 8PM...')
                    break;
                }
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

foodContainer.addEventListener('click', e => {
    if (e.target.matches('[data-food]')) {
        e.target.classList.toggle('selected')
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
const isNumberValid = (input) => {
    if (!isNaN(input) && input < 7) {
        return true
    } else {
        return false
    }
}

const isDateValid = (input) => {
    const today = new Date()
    if (new Date(input).getTime() >= today.getTime()) {
        return true
    } else {
        return false
    }
}

const isTimeValid = (input) => {
    const hour = parseInt(input.split(':')[0])
    if (hour > 9 && hour < 21) {
        return true
    } else {
        return false
    }
}

const spanUpdate = (textUpdateVariable) => {
    if (currentStep === 0) {
        const nameHolderSpans = [...multiStepForm.querySelectorAll('[data-customer-name-show]')]
        nameHolderSpans.forEach(span => {
            span.innerText = textUpdateVariable
        })
    } else if (currentStep === 1) {
        const seatCountHolderSpans = [...multiStepForm.querySelectorAll('[data-seat-count]')]
        seatCountHolderSpans.forEach(span => {
            span.innerText = textUpdateVariable
        })
    }

}
