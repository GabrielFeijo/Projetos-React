import React, { useState } from 'react'

const useForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0)

    const changeStep = (i) => {
     
        if (i < 0 || i >= steps.length)
        return;

        setCurrentStep(i);
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep
    }
}

export default useForm