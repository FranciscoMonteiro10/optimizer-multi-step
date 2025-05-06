"use client";

import type React from "react";
import type { CustomerData, Product } from "../types/types";
import { useEffect } from "react";
import type { Language } from "../../i18n/translations";
import { translations } from "../../i18n/translations";
import "./Step3.css";

interface Step3Props {
  selected: Product[];
  data: CustomerData;
  setValid?: (valid: boolean) => void;
  language: Language;
}

export const Step3: React.FC<Step3Props> = ({
  selected,
  data,
  setValid,
  language,
}) => {
  const t = translations[language];

  useEffect(() => {
    if (setValid) {
      setValid(true);
    }
  }, [setValid]);

  const total = selected.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  return (
    <div className="summary-container">
      <h2>{t.step3.summary}</h2>
      <p>
        <strong>{t.step3.name}:</strong> {data.name}
      </p>
      <p>
        <strong>{t.step3.address}:</strong> {data.address}
      </p>
      <p>
        <strong>{t.step3.contact}:</strong> {data.phoneNumber}
      </p>
      <h3 className="products-heading">{t.step3.products}:</h3>
      <ul className="products-list">
        {selected.map((p) => (
          <li key={p.id}>
            {p.title} - ${p.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="total">
        {t.step3.total}: ${total}
      </p>
    </div>
  );
};
