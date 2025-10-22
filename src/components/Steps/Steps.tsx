import { type ReactElement } from "react";

const Steps = () => {
  const renderSteps = (): ReactElement[] => {
    const steps: number = 4;
    const activeStep: number = 0;

    return Array.from({ length: steps }, (_, i) => (
      <span
        key={i}
        className={`step ${i === activeStep ? "step--active" : ""}`}
      />
    ));
  };

  return <div className="log-stepper">{renderSteps()}</div>;
};

export default Steps;
