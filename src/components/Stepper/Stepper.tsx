import { type ReactElement } from "react";

type StepperProps = {
  step: number;
};

const Stepper = ({ step }: StepperProps) => {
  const renderSteps = (): ReactElement[] => {
    const steps: number = 4;
    const activeStep: number = step;

    return Array.from({ length: steps }, (_, i) => (
      <span
        key={i}
        className={`step ${i <= activeStep ? "step--active" : ""}`}
      />
    ));
  };

  return <div className="log-stepper">{renderSteps()}</div>;
};

export default Stepper;
