import { ReactElement, useState } from 'react';

export const useMultiform = (stepsComponents:ReactElement[]) => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        console.log(currentStep, "Click");
        setCurrentStep(currentStep + 1);
        if (currentStep < stepsComponents.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prevStep = () => {
        console.log(currentStep, "Click");
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const goToStep = (step: number) => {
        if (step >= 0 && step < stepsComponents.length) {
            setCurrentStep(step);
        }
    }

    return {
        step: stepsComponents[currentStep],
        next: nextStep,
        prev: prevStep,
        goToStep,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === stepsComponents.length - 1,
        stepCount: currentStep,
    }
}