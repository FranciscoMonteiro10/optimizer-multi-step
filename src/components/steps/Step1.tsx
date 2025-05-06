"use client";

import type React from "react";
import { useEffect, useState } from "react";
import type { Product } from "../types/types";
import { fetchProducts } from "../../api/api";
import type { Language } from "../../i18n/translations";
import { translations } from "../../i18n/translations";
import "./Step1.css";

interface Step1Props {
  selected: Product[];
  setSelected: (items: Product[]) => void;
  setValid: (valid: boolean) => void;
  language: Language;
}

export const Step1: React.FC<Step1Props> = ({
  selected,
  setSelected,
  setValid,
  language,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const t = translations[language];
  const currencySymbol = language === "en" ? "$" : "€";

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setValid(selected.length > 0);
  }, [selected.length, setValid]);

  const toggle = (p: Product) => {
    const exists = selected.find((item) => item.id === p.id);
    const updated = exists
      ? selected.filter((item) => item.id !== p.id)
      : [...selected, p];
    setSelected(updated);
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <label htmlFor="search" className="search-label">
          {t.step1.searchLabel}
        </label>
        <input
          id="search"
          type="text"
          placeholder={t.step1.searchPlaceholder}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => toggle(p)}
                className={`product-card ${
                  selected.find((i) => i.id === p.id) ? "selected" : ""
                }`}
              >
                <div className="product-image-container">
                  <img
                    src={p.thumbnail || "/placeholder.svg"}
                    alt={p.title}
                    className="product-image"
                  />
                  {selected.find((i) => i.id === p.id) && (
                    <div className="selected-badge">✓</div>
                  )}
                </div>
                <h3 className="product-title">{p.title}</h3>
                <p className="product-description">{p.description}</p>
                <p className="product-price">
                  {currencySymbol}
                  {p.price.toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <div className="no-products">
              {t.step1.noProductsFound} "{filter}"
            </div>
          )}
        </div>
      )}

      {selected.length > 0 && (
        <div className="selected-summary">
          <p>
            {selected.length} {t.step1.productsSelected}
          </p>
        </div>
      )}
    </div>
  );
};
