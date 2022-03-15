import React from "react";
const Dropdown = (props) => {
  const { currentMaterial, materials, onMaterialChose } = props;
  return (
    <div>
      <button
        type="button"
        className="btn btn-secondary dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {currentMaterial}
      </button>

      <ul className="dropdown-menu">
        {materials.map((m) => (
          <li key={m.title}>
            <div
              className="dropdown-item material-description-wrapper"
              onClick={() => onMaterialChose(m)}
            >
              {m.title}
              {/* <div className="material-description d-none">{m.opis}</div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
