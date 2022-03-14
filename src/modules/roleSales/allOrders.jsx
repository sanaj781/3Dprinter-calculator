import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_PATH_ALL_ORDERS } from "../../APIs";

const Orders = (props) => {
  const { user } = props;
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState();
  const [loadClass, setLoadClass] = useState("spinner-border text-primary");
  useEffect(() => {
    axios
      .get(API_PATH_ALL_ORDERS)
      .then((res) => {
        const userOrders = [];
        if (user.role === "admin") setOrders(res.data.row);
        else {
          for (const order of res.data.row) {
            if (order.ordering_person === user.username) userOrders.push(order);
          }
          setOrders(userOrders);
          setLoadClass("spinner-border text-primary d-none");
        }
      })
      .catch((error) => setErrors(error.message));
  }, []);
  if (errors) console.log(errors);
  return (
    <React.Fragment>
      <h3 className="text-center">Historia Zlecen</h3>
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
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Orders;
