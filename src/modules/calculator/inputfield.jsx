import React from "react";
const InputField = (props) => {
  const { onEstimatesChange, units } = props;
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          onChange={onEstimatesChange}
          id="input-estimates"
          type="number"
          min={0}
          className="col-3 estimates"
          placeholder="0"
        />
        <span className="ms-1 input-group-text text-center" id="basic-addon1">
          {units}
        </span>
      </div>
    </React.Fragment>
  );
};

export default InputField;
