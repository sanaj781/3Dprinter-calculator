import React, { useState, useEffect } from "react";
import axios from "axios";
const API_PATH = "http://localhost:8888/login/APIs/allOrders.php";

const Orders = (props) => {
  const { user } = props;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(API_PATH).then((res) => {
      const userOrders = [];
      if (user.role === "admin") setOrders(res.data.row);
      else {
        for (const order of res.data.row) {
          if (order.ordering_person === user.username) userOrders.push(order);
        }
        setOrders(userOrders);
      }
    });
  }, []);

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
