import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH_READ_NOTIFICATIONS } from "../APIs";

const Notifications = () => {
  //   const { user } = props;
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axios
      .get(API_PATH_READ_NOTIFICATIONS)
      .then((res) => {
        const userOrders = [];

        for (const order of res.data.row) {
          userOrders.push(order);
        }
        setOrders(userOrders);
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
            <th scope="col">Wycena</th>
          </tr>
        </thead>
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
                <button className="btn btn-success">Wyceń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Notifications;
