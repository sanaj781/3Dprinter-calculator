import React, { Component } from "react";
const InputField = (props) => {
  const { onEstimatesChange, units } = props;
  return (
    <React.Fragment>
      <div className="input-group mb-3">
        <input
          onChange={onEstimatesChange}
          id="input-estimates"
          type="number"
          min={0}
          className="col-3 estimates"
          placeholder="0"
        />
        <span className="input-group-text" id="basic-addon1">
          {units}
        </span>
      </div>
    </React.Fragment>
  );
};

export default InputField;
