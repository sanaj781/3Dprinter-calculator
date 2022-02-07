import React, { Component } from "react";
import RowComponent from "./rowComponent";
import Thead from "./thead";
import { getMaterials, getSupports } from "./arrayOfMaterials";
class Calculator extends React.Component {
  state = {
    mainMaterial: {
      dropdown: 1,
      materials: getMaterials(),
      currentMaterial: "Wybierz",
      estimates: 0,
      rate: 0,
      units: "cc3",
    },
    supportMaterial: {
      dropdown: 1,
      materials: getSupports(),
      currentMaterial: "Wybierz",
      estimates: 0,
      rate: 0,
      units: "cc3",
    },
    time: {
      dropdown: 0,
      estimates: 0,
      rate: 36,
      units: "godz.",
    },
    electricity: {
      dropdown: 0,
      estimates: 0,
      rate: 1.45,
    },
    washing: {
      dropdown: 0,
      estimates: 0,
      rate: 1.45,
      units: "godz.",
    },
    callibration: {
      dropdown: 0,
      estimates: 0,
      rate: 1,
      units: "PLN",
    },
    additionalCosts: {
      dropdown: 0,
      estimates: 0,
      rate: 1,
      units: "PLN",
    },
  };

  handleMaterialChose = (m) => {
    if (this.state.mainMaterial.materials.includes(m)) {
      const mainMaterial = this.state.mainMaterial;
      mainMaterial.currentMaterial = m.title;
      mainMaterial.rate = m.price;
      this.setState({ mainMaterial });
    } else if (this.state.supportMaterial.materials.includes(m)) {
      const supportMaterial = this.state.supportMaterial;
      supportMaterial.currentMaterial = m.title;
      supportMaterial.rate = m.price;
      this.setState({ supportMaterial });
    }
  };

  handleEstimatesChange = (i) => {
    const estimates = document.getElementsByClassName("estimates")[i].value;

    if (i === 0) {
      const mainMaterial = this.state.mainMaterial;
      mainMaterial.estimates = estimates;
      this.setState({ mainMaterial });
    }
    if (i === 1) {
      const supportMaterial = this.state.supportMaterial;
      supportMaterial.estimates = estimates;
      this.setState({ supportMaterial });
    }
    if (i === 2) {
      const time = this.state.time;
      time.estimates = estimates;
      this.setState({ time });
    }
    if (i === 3) {
      const washing = this.state.washing;
      washing.estimates = estimates;
      this.setState({ washing });
    }
    if (i === 4) {
      const callibration = this.state.callibration;
      callibration.estimates = estimates;
      this.setState({ callibration });
    }
    if (i === 5) {
      const additionalCosts = this.state.additionalCosts;
      additionalCosts.estimates = estimates;
      this.setState({ additionalCosts });
    }
  };
  render() {
    return (
      <React.Fragment>
        <table id="calculator" className="table table-dark table-hover">
          <Thead />
          <tbody>
            <RowComponent
              name="Material glowny"
              dropdown={this.state.mainMaterial.dropdown}
              estimates={this.state.mainMaterial.estimates}
              rate={this.state.mainMaterial.rate}
              materials={this.state.mainMaterial.materials}
              currentMaterial={this.state.mainMaterial.currentMaterial}
              onMaterialChose={this.handleMaterialChose}
              onEstimatesChange={() => this.handleEstimatesChange(0)}
              units={this.state.mainMaterial.units}
            />
            <RowComponent
              name="Material podporowy"
              dropdown={this.state.supportMaterial.dropdown}
              estimates={this.state.supportMaterial.estimates}
              rate={this.state.supportMaterial.rate}
              materials={this.state.supportMaterial.materials}
              currentMaterial={this.state.supportMaterial.currentMaterial}
              onMaterialChose={this.handleMaterialChose}
              onEstimatesChange={() => this.handleEstimatesChange(1)}
              units={this.state.supportMaterial.units}
            />
            <RowComponent
              name="Czas wydruku"
              dropdown={this.state.time.dropdown}
              estimates={this.state.time.estimates}
              rate={this.state.time.rate}
              onEstimatesChange={() => this.handleEstimatesChange(2)}
              units={this.state.time.units}
            />
            <RowComponent
              name="Pobor pradu"
              dropdown={this.state.electricity.dropdown}
              estimates={this.state.time.estimates}
              rate={this.state.electricity.rate}
              units={this.state.electricity.units}
              inputField={0}
            />
            <RowComponent
              name="Czas plukania"
              dropdown={this.state.washing.dropdown}
              estimates={this.state.washing.estimates}
              rate={this.state.washing.rate}
              onEstimatesChange={() => this.handleEstimatesChange(3)}
              units={this.state.washing.units}
            />
            <RowComponent
              name="Kalibracja drukarki"
              dropdown={this.state.callibration.dropdown}
              estimates={this.state.callibration.estimates}
              rate={this.state.callibration.rate}
              onEstimatesChange={() => this.handleEstimatesChange(4)}
              units={this.state.callibration.units}
            />
            <RowComponent
              name="Dodatkowe koszty"
              dropdown={this.state.additionalCosts.dropdown}
              estimates={this.state.additionalCosts.estimates}
              rate={this.state.additionalCosts.rate}
              onEstimatesChange={() => this.handleEstimatesChange(5)}
              units={this.state.additionalCosts.units}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Calculator;
