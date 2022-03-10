import React, { Component } from "react";
import axios from "axios";
import { API_PATH_NEW_ORDER } from "../APIs";

class NewOrder extends Component {
  state = {
    projectName: "",
    fullname: this.props.user.username,
    username: this.props.user.login,
    password: this.props.user.password,
    projectFile: "",
    choosenMaterial: "",
    materialColor: "",
    description: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: API_PATH_NEW_ORDER,
      headers: {
        "content-type": "application/json",
      },
      data: this.state,
    })
      .then((result) => {
        console.log(result.data);

        result.data.includes('"sent":1')
          ? console.log("da")
          : console.log("nie");
      })
      .catch((error) =>
        this.setState({
          error: error.message,
        })
      );
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="text-center">Nowe Zlecenie wydruku</h3>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Nazwa projektu</label>
            <input
              onChange={(e) => this.setState({ projectName: e.target.value })}
              name="title"
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Nazwa projektu"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Plik projektu</label>
            <br />
            <input
              name="project_file"
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Rodzaj Materialu</label>
            <select
              onChange={(e) =>
                this.setState({ choosenMaterial: e.target.value })
              }
              className="form-control"
              id="exampleFormControlSelect1"
              name="material"
            >
              <option>Nie wybrano</option>
              <option>ABS-M30</option>
              <option>ULTEM 9085</option>
              <option>Nylon 12CF</option>
              <option>ABS-ESD7</option>
              <option>PC-ABS</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Color</label>
            <select
              onChange={(e) => this.setState({ materialColor: e.target.value })}
              className="form-control"
              id="exampleFormControlSelect1"
              name="color"
            >
              <option>Nie wybrano</option>
              <option>Czarny</option>
              <option>Iwory</option>
              <option>Niebieski</option>
              <option>Czerwony</option>
              <option>Bialy</option>
              <option>Dowolny</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Krotki opis projektu
            </label>
            <textarea
              onChange={(e) => this.setState({ description: e.target.value })}
              name="description"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Opisz wymagania dotyczace projektu"
            ></textarea>
          </div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-success mt-2 submit"
          >
            Wyslij zlecenie
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default NewOrder;
