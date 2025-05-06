"use client";

import type React from "react";
import { useEffect, useState } from "react";
import type { CustomerData } from "../types/types";
import type { Language } from "../../i18n/translations";
import { translations } from "../../i18n/translations";
import "./Step2.css";

interface Step2Props {
  data: CustomerData;
  setData: (d: CustomerData) => void;
  setValid: (valid: boolean) => void;
  language: Language;
}

export const Step2: React.FC<Step2Props> = ({
  data,
  setData,
  setValid,
  language,
}) => {
  const [local, setLocal] = useState<CustomerData>(data);
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });

  const t = translations[language];

  const validate = () => {
    const newErrors = {
      name: local.name.trim() === "" ? t.step2.nameError : "",
      address: local.address.trim() === "" ? t.step2.addressError : "",
      phoneNumber: local.phoneNumber.trim() === "" ? t.step2.phoneError : "",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");
    return isValid;
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);

    if (isValid) {
      setData(local);
    }
  }, [local, t.step2.nameError, t.step2.addressError, t.step2.phoneError]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          {t.step2.nameLabel}
        </label>
        <input
          id="name"
          type="text"
          placeholder={t.step2.namePlaceholder}
          value={local.name}
          onChange={(e) => setLocal({ ...local, name: e.target.value })}
          className={`form-input ${errors.name ? "error" : ""}`}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="address" className="form-label">
          {t.step2.addressLabel}
        </label>
        <input
          id="address"
          type="text"
          placeholder={t.step2.addressPlaceholder}
          value={local.address}
          onChange={(e) => setLocal({ ...local, address: e.target.value })}
          className={`form-input ${errors.address ? "error" : ""}`}
        />
        {errors.address && <p className="error-message">{errors.address}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          {t.step2.phoneLabel}
        </label>
        <input
          id="phone"
          type="text"
          placeholder={t.step2.phonePlaceholder}
          value={local.phoneNumber}
          onChange={(e) => setLocal({ ...local, phoneNumber: e.target.value })}
          className={`form-input ${errors.phoneNumber ? "error" : ""}`}
        />
        {errors.phoneNumber && (
          <p className="error-message">{errors.phoneNumber}</p>
        )}
      </div>
    </div>
  );
};
