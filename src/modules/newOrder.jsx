import React, { Component } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { API_PATH_NEW_ORDER } from "../APIs";
class NewOrder extends Component {
  state = {
    post: {
      projectName: "",
      fullname: this.props.user.username,
      projectFile: "",
      choosenMaterial: "",
      materialColor: "",
      description: "",
    },
    modalClass: "modal",
    modalMessage: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const jwt = localStorage.getItem("jwt");
    const decoded = jwtDecode(jwt);
    if (decoded.data.role === "sales") {
      axios({
        method: "POST",
        url: API_PATH_NEW_ORDER,
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        data: this.state.post,
      })
        .then((result) => {
          this.setState({ modalClass: "modal d-flex" });
          if (JSON.stringify(result.data).includes("1"))
            this.setState({
              modalMessage:
                "Zlecenie zostalo wyslane do wyceny. Wkrotce wycena zostanie przygotowana przez PART21 i wyslana do systemu",
            });

          if (JSON.stringify(result.data).includes("Access denied."))
            this.setState({
              modalMessage: "wrong or expired token",
            });
          if (
            JSON.stringify(result.data).includes("Access granted.") &&
            JSON.stringify(result.data).includes("0")
          ) {
            this.setState({
              modalMessage: "Empty field",
            });
          }
        })
        .catch((error) =>
          this.setState({
            error: error.message,
          })
        );
    }
  };
  handleModalChange = () => {
    this.setState({ modalClass: "modal" });
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.state.modalClass}>
          {/* Modal content */}
          <div className="modal-content">
            {this.state.modalMessage}

            <button
              onClick={this.handleModalChange}
              className="btn btn-success btn-lg"
            >
              OK
            </button>
          </div>
        </div>

        <h3 className="text-center">Nowe Zlecenie wydruku</h3>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Nazwa projektu</label>
            <input
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.post, projectName: e.target.value },
                })
              }
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
                this.setState({
                  post: { ...this.state.post, choosenMaterial: e.target.value },
                })
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
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.post, materialColor: e.target.value },
                })
              }
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
              onChange={(e) =>
                this.setState({
                  post: { ...this.state.post, description: e.target.value },
                })
              }
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
