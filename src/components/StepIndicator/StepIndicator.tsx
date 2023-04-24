type StepIndicatorProps = {
  length: number;
  currentStep: number;
};

const StepIndicator = ({ length, currentStep }: StepIndicatorProps) => {
  const steps = [];

  const percentage = (currentStep / length) * 100;  
  console.log("Percentege", percentage);

  for (let i = 0; i < length; i++) {
    steps.push(
      <div>
        <div
          className={`step-indicator__circle ${
            i <= currentStep ? "active" : ""
          }`}>
          {i + 1}
        </div>
        <p className="display-p">Step {i + 1}</p>
      </div>
    );
  }


  return <div className="step-indicator">{steps}</div>;
};

export default StepIndicator;
