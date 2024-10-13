import React, { useId } from "react";

function InputBox({
  label,
  amt,
  onAmtChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amtDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amtInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amtInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amtInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amtDisable}
          value={amt}
          onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((cry) => (
            <option key={cry} value={cry}>
              {cry.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
