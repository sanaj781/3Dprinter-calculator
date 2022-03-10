import React from "react";
class Thead extends React.Component {
  state = {
    thNames: [
      "Nazwa",
      "Wybrane materialy",
      "Estimates",
      "Rate, PLN/unit",
      "Koszty, PLN",
    ],
  };
  render() {
    return (
      <React.Fragment>
        <thead>
          <tr>
            {this.state.thNames.map((n) => (
              <th key={n}>{n}</th>
            ))}
          </tr>
        </thead>
      </React.Fragment>
    );
  }
}

export default Thead;
