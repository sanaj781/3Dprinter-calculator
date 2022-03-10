import React from "react";
import Dropdown from "./dropdown";
import InputField from "./inputfield";
const RowComponent = (props) => {
  const {
    name,
    dropdown,
    inputField,
    estimates,
    rate,
    materials,
    currentMaterial,
    units,
    onMaterialChose,
    onEstimatesChange,
  } = props;

  const showDropdown =
    dropdown === 1 ? (
      <Dropdown
        materials={materials}
        currentMaterial={currentMaterial}
        onMaterialChose={onMaterialChose}
      />
    ) : (
      ""
    );
  const showInputField =
    inputField !== 0 ? (
      <InputField onEstimatesChange={onEstimatesChange} units={units} />
    ) : (
      ""
    );
  return (
    <React.Fragment>
      <tr>
        <td>{name}</td>
        <td>{showDropdown}</td>
        <td>{showInputField} </td>
        <td>{rate}</td>
        <td>{Math.round(rate * estimates)}</td>
      </tr>
    </React.Fragment>
  );
};

export default RowComponent;
