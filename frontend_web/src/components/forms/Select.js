import React from "react";

function Select({ label, name, options = [], ...props }) {
  return (
    <div className="input-wrap">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...props}>
        <option value="">---Select---</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
