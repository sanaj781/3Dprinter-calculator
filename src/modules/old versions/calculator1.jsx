import React, { Component } from "react";
import MainMaterial from "./mainMaterial";
import Support from "./supportMaterial";
import Washing from "./washing";
import Thead from "./thead";
import Time from "./time";
import Calibration from "./calibration";
import Electricity from "./electricity";
import { getMaterials, getSupport } from "./arrayOfMaterials";
import AdditionalCosts from "./additionalCosts";
import Summary from "./summaryCosts";
import Row from "./rowComponent";

class Calculator extends React.Component {
  state = {
    mainMaterials: getMaterials(),
    currentMainMaterial: "Wybierz",
    currentMainMaterialPrice: 0,
    currentMainMaterialEstimates: 0,

    supportMaterials: getSupport(),
    currentSupportMaterial: "Wybierz",
    currentSupportPrice: 0,
    currentSupportEstimates: 0,

    timeEstimates: 0,
    electricityEstimates: 0,
    washingEstimates: 0,
    calibrationEstimates: 0,
    additionalEstimates: 0,
  };
  handleMaterialChose = (m) => {
    const currentMainMaterial = m.title;
    const currentMainMaterialPrice = m.price;
    this.setState({ currentMainMaterial });
    this.setState({ currentMainMaterialPrice });
  };

  handleSupportChose = (m) => {
    const currentSupportMaterial = m.title;
    const currentSupportPrice = m.price;
    this.setState({ currentSupportMaterial });
    this.setState({ currentSupportPrice });
  };

  handleOnBlur = (i) => {
    const currentEstimate =
      document.getElementsByClassName("estimates")[i].value;
    if (currentEstimate < 0) {
      alert("Value must be greater then 0");
    }
    if (i === 0) {
      this.setState({ currentMainMaterialEstimates: currentEstimate });
    }
    if (i === 1) {
      this.setState({ currentSupportEstimates: currentEstimate });
    }
    if (i === 2) {
      this.setState({
        timeEstimates: currentEstimate,
        electricityEstimates: currentEstimate,
      });
    }
    if (i === 3) {
      this.setState({ washingEstimates: currentEstimate });
    }
    if (i === 4) {
      this.setState({ calibrationEstimates: currentEstimate });
    }
    if (i === 5) {
      this.setState({ additionalEstimates: currentEstimate });
    }
  };
  render() {
    return (
      <React.Fragment>
        <table id="calculator" className="table table-dark table-hover">
          <Thead />
          <tbody>
            <MainMaterial
              name="Main Material"
              materials={this.state.mainMaterials}
              currentMaterial={this.state.currentMainMaterial}
              currentPrice={this.state.currentMainMaterialPrice}
              estimates={this.state.currentMainMaterialEstimates}
              handleMaterialChose={this.handleMaterialChose}
              handleOnBlur={() => this.handleOnBlur(0)}
              mainMaterialCosts={Math.round(
                this.state.currentMainMaterialPrice *
                  this.state.currentMainMaterialEstimates
              )}
            />
            <Support
              supports={this.state.supportMaterials}
              currentSupportMaterial={this.state.currentSupportMaterial}
              currentSupportPrice={this.state.currentSupportPrice}
              estimates={this.state.currentSupportEstimates}
              handleSupportChose={this.handleSupportChose}
              handleOnBlur={() => this.handleOnBlur(1)}
              supportCosts={Math.round(
                this.state.currentSupportPrice *
                  this.state.currentSupportEstimates
              )}
            />

            <Time
              estimates={this.state.timeEstimates}
              handleOnBlur={() => this.handleOnBlur(2)}
              timeCosts={this.state.timeEstimates * 36}
            />
            <Electricity
              estimates={this.state.electricityEstimates}
              electricityCosts={Math.round(
                this.state.electricityEstimates * 3 * 0.45
              )}
            />
            <Washing
              estimates={this.state.washingEstimates}
              handleOnBlur={() => this.handleOnBlur(3)}
              washingCosts={Math.round(this.state.washingEstimates * 0.45 * 3)}
            />
            <Calibration
              estimates={this.state.calibrationEstimates}
              handleOnBlur={() => this.handleOnBlur(4)}
              calibrationCosts={this.state.calibrationEstimates}
            />
            <AdditionalCosts
              estimates={this.state.additionalEstimates}
              handleOnBlur={() => this.handleOnBlur(5)}
              additionalCosts={this.state.additionalEstimates}
            />
            <Row
              name="Main Material"
              dropdown={1}
              materials={this.state.mainMaterials}
              currentMaterial={this.state.currentMainMaterial}
              currentPrice={this.state.currentMainMaterialPrice}
              estimates={this.state.currentMainMaterialEstimates}
              handleMaterialChose={this.handleMaterialChose}
              handleOnBlur={() => this.handleOnBlur(0)}
              mainMaterialCosts={Math.round(
                this.state.currentMainMaterialPrice *
                  this.state.currentMainMaterialEstimates
              )}
            />

            <Summary
              summaryCosts={
                Math.round(
                  this.state.currentMainMaterialPrice *
                    this.state.currentMainMaterialEstimates
                ) +
                Math.round(
                  this.state.currentSupportPrice *
                    this.state.currentSupportEstimates
                ) +
                this.state.timeEstimates * 36 +
                Math.round(this.state.electricityEstimates * 3 * 0.45) +
                Math.round(this.state.washingEstimates * 0.45 * 3) +
                this.state.calibrationEstimates * 1 +
                this.state.additionalEstimates * 1
              }
            />
          </tbody>
        </table>
        <button type="button" className="btn btn-dark">
          Wygenerowac PDF
        </button>
      </React.Fragment>
    );
  }
}

export default Calculator;
