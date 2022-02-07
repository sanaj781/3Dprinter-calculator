import React, { Component } from "react";
import RowComponent from "./rowComponent";
import Thead from "./thead";
import { getMaterials, getSupports } from "./arrayOfMaterials";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

class Calculator extends React.Component {
  state = {
    rows: [
      {
        name: "Material Gowny",
        dropdown: 1,
        materials: getMaterials(),
        currentMaterial: "Wybierz",
        estimates: 0,
        rate: 0,
        units: "cc3",
      },
      {
        name: "Material Podporowy",
        dropdown: 1,
        materials: getSupports(),
        currentMaterial: "Wybierz",
        estimates: 0,
        rate: 0,
        units: "cc3",
      },
      {
        name: "Czas wydruku",
        dropdown: 0,
        estimates: 0,
        rate: 38,
        units: "godz.",
      },

      {
        name: "Czas plukania",
        dropdown: 0,
        estimates: 0,
        rate: 1.45,
        units: "godz.",
      },
      {
        name: "Kalibracja",
        dropdown: 0,
        estimates: 0,
        rate: 1,
        units: "PLN",
      },
      {
        name: "Dodatkowe koszty",
        dropdown: 0,
        estimates: 0,
        rate: 1,
        units: "PLN",
      },
    ],
  };

  handleMaterialChose = (m) => {
    if (this.state.rows[0].materials.includes(m)) {
      const rows = this.state.rows;
      rows[0].currentMaterial = m.title;
      rows[0].rate = m.price;

      this.setState({ rows });
    }

    if (this.state.rows[1].materials.includes(m)) {
      const rows = this.state.rows;
      rows[1].currentMaterial = m.title;
      rows[1].rate = m.price;
      this.setState({ rows });
    }
  };

  handleEstimatesChange = (i) => {
    const estimates = document.getElementsByClassName("estimates")[i].value;
    const rows = this.state.rows;
    rows[i].estimates = estimates;
    this.setState({ rows });
  };

  render() {
    let estimatesSumm = 0;
    const rows = this.state.rows;
    for (let i = 0; i < rows.length; i++) {
      estimatesSumm = estimatesSumm + rows[i].rate * rows[i].estimates;
    }
    return (
      <React.Fragment>
        <table id="calculator" className="table table-dark table-hover">
          <Thead />
          <tbody>
            {this.state.rows.map((m) => (
              <RowComponent
                key={m.name}
                name={m.name}
                dropdown={m.dropdown}
                inputField={m.inputField}
                estimates={m.estimates}
                rate={m.rate}
                materials={m.materials}
                currentMaterial={m.currentMaterial}
                onMaterialChose={this.handleMaterialChose}
                onEstimatesChange={() =>
                  this.handleEstimatesChange(this.state.rows.indexOf(m))
                }
                units={m.units}
              />
            ))}
            <RowComponent
              name="Razem"
              inputField={0}
              rate={1.23}
              estimates={estimatesSumm}
            />
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Calculator;
