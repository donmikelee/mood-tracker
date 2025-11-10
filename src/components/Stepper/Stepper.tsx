import { type ReactElement } from "react";

type StepperProps = {
  activeStep: number;
};

const Stepper = ({ activeStep }: StepperProps) => {
  const renderSteps = (): ReactElement[] => {
    const steps = 4;

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
