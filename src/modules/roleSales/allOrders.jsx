import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_PATH_ALL_ORDERS, API_DOWNLOAD } from "../../APIs";

const Orders = (props) => {
  const { user } = props;
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState();
  const [loadClass, setLoadClass] = useState("spinner-border text-primary");
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isApiSubscribed = true;
    axios
      .get(API_PATH_ALL_ORDERS, { signal })
      .then((res) => {
        if (isApiSubscribed) {
          const userOrders = [];
          if (user.role === "admin") {
            setOrders(res.data.row);
            setLoadClass("spinner-border text-primary d-none");
          } else {
            for (const order of res.data.row) {
              if (order.ordering_person === user.username)
                userOrders.push(order);
            }
            setOrders(userOrders);
            setLoadClass("spinner-border text-primary d-none");
          }
        }
      })
      .catch(
        (error) => {
          signal.aborted
            ? console.log("successfully aborted")
            : setErrors(error.message);
        },
        [user]
      );
    return () => {
      isApiSubscribed = false;
      controller.abort();
    };
  }, [user]);
  if (errors) console.log(errors);

  return (
    <React.Fragment>
      <h3 className="text-center">
        Historia Zlecen{" "}
        <div className={loadClass} role="status">
          <span className="sr-only"></span>
        </div>
      </h3>

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
              <td>
                <a
                  href={`${API_DOWNLOAD}?order=${
                    order.project_file
                  }&jwt=${localStorage.getItem("jwt")}
`}
                >
                  Pobierz
                </a>
              </td>
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
