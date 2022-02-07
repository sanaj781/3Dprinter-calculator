import React, { Component } from "react";
const Dropdown = (props) => {
  const { currentMaterial, materials, onMaterialChose } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-light dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {currentMaterial}
      </button>
      <ul className="dropdown-menu">
        {materials.map((m) => (
          <li key={m.title}>
            <a className="dropdown-item" onClick={() => onMaterialChose(m)}>
              {m.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
