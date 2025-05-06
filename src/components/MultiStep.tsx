"use client";

import type React from "react";
import { type ReactNode, useState, useEffect } from "react";
import "./MultiStep.css";

interface MultiStepProps {
  steps: ReactNode[];
  stepTitles: string[];
  isValid: boolean[];
  onSubmit: () => void;
  onStepChange?: (stepIndex: number) => void;
}

export const MultiStep: React.FC<MultiStepProps> = ({
  steps,
  stepTitles,
  isValid,
  onSubmit,
  onStepChange,
}) => {
  const [current, setCurrent] = useState(0);
  const last = steps.length - 1;

  useEffect(() => {
    if (onStepChange) {
      onStepChange(current);
    }
  }, [current, onStepChange]);

  const next = () => {
    if (!isValid[current]) return;
    if (current < last) {
      setCurrent(current + 1);
    } else {
      onSubmit();
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="multistep-container">
      <div className="steps-indicator">
        {steps.map((_, index) => (
          <div key={index} className="step-item">
            {index > 0 && (
              <div
                className={`step-line ${index <= current ? "active" : ""}`}
              />
            )}
            <div
              className={`step-circle ${
                index === current
                  ? "active"
                  : index < current
                  ? "completed"
                  : ""
              }`}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      <div className="step-content">{steps[current]}</div>
      <div className="step-actions">
        <button
          onClick={prev}
          disabled={current === 0}
          className="btn btn-prev"
        >
          {stepTitles[3]}
        </button>
        <button
          onClick={next}
          disabled={!isValid[current]}
          className={`btn ${current === last ? "btn-submit" : "btn-next"}`}
        >
          {current === last ? stepTitles[5] : stepTitles[4]}
        </button>
      </div>
    </div>
  );
};
