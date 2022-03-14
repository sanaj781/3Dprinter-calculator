import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  API_PATH_READ_NOTIFICATIONS_ADMIN,
  API_PATH_READ_NOTIFICATIONS_SALES,
} from "../APIs";

const Notifications = (props) => {
  //   const { user } = props;
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState();
  const { user } = props;
  const [loadClass, setLoadClass] = useState("spinner-border text-primary");

  useEffect(() => {
    axios
      .get(
        user.role === "admin"
          ? API_PATH_READ_NOTIFICATIONS_ADMIN
          : API_PATH_READ_NOTIFICATIONS_SALES
      )
      .then((res) => {
        setOrders(res.data.row);
        setLoadClass("spinner-border text-primary d-none");
      })
      .catch((error) => setErrors(error.message));
  }, []);
  return (
    <React.Fragment>
      <h3 className="text-center">Nowe Powiadomienia</h3>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Projekt</th>
            <th scope="col">Handlowiec</th>
            <th scope="col">Plik</th>
            <th scope="col">Material</th>
            <th scope="col">Color</th>
            <th scope="col">Opis</th>
            <th scope="col">Status</th>
            {user.role === "admin" && <th scope="col">Wycena</th>}
          </tr>
        </thead>
        <div className={loadClass} role="status">
          <span class="sr-only"></span>
        </div>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.project_title}</td>
              <td>{order.ordering_person}</td>
              <td>{order.project_file}</td>
              <td>{order.material}</td>
              <td>{order.color}</td>
              <td>{order.project_description}</td>
              <td>{order.status}</td>
              <td>
                {user.role === "admin" && (
                  <button className="btn btn-success">Wyceń</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Notifications;
