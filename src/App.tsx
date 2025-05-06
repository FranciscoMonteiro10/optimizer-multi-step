"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { MultiStep } from "./components/MultiStep";
import { Step1 } from "./components/steps/Step1";
import { Step2 } from "./components/steps/Step2";
import { Step3 } from "./components/steps/Step3";
import type { Product, CustomerData } from "./components/types/types";
import type { Language } from "./i18n/translations";
import { translations } from "./i18n/translations";
import "./App.css";

const App: React.FC = () => {
  const [selected, setSelected] = useState<Product[]>([]);
  const [customer, setCustomer] = useState<CustomerData>({
    name: "",
    address: "",
    phoneNumber: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [language, setLanguage] = useState<Language>("en");

  // Validation state for each step
  const [validity, setValidity] = useState<boolean[]>([false, false, true]);

  const t = translations[language];

  const stepTitles = [
    t.stepTitles.productCatalog,
    t.stepTitles.contactInformation,
    t.stepTitles.orderDetails,
  ];

  const setStepValid = useCallback((index: number, valid: boolean) => {
    setValidity((prev) => {
      if (prev[index] === valid) {
        return prev;
      }
      const copy = [...prev];
      copy[index] = valid;
      return copy;
    });
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("Submitting order:", { customer, selected });
    alert(`${t.alerts.orderSubmitted} ${customer.name}`);
    // Possible state reset
  }, [customer, selected, t.alerts.orderSubmitted]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>{stepTitles[currentStep]}</h1>
        <button
          onClick={toggleLanguage}
          className="language-button"
          aria-label={`Switch to ${
            language === "en" ? "Portuguese" : "English"
          }`}
        >
          {language === "en" ? "🇵🇹" : "🇺🇸"}
        </button>
      </div>

      <MultiStep
        steps={[
          <Step1
            key="s1"
            selected={selected}
            setSelected={(items) => setSelected(items)}
            setValid={(v) => setStepValid(0, v)}
            language={language}
          />,
          <Step2
            key="s2"
            data={customer}
            setData={(d) => setCustomer(d)}
            setValid={(v) => setStepValid(1, v)}
            language={language}
          />,
          <Step3
            key="s3"
            selected={selected}
            data={customer}
            language={language}
          />,
        ]}
        stepTitles={[
          t.stepTitles.productCatalog,
          t.stepTitles.contactInformation,
          t.stepTitles.orderDetails,
          t.buttons.previous,
          t.buttons.next,
          t.buttons.submit,
        ]}
        isValid={validity}
        onSubmit={handleSubmit}
        onStepChange={setCurrentStep}
      />
    </div>
  );
};

export default App;
