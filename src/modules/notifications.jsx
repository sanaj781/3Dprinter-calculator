import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  API_PATH_READ_NOTIFICATIONS_ADMIN,
  API_PATH_READ_NOTIFICATIONS_SALES,
  apiURL,
} from "../APIs";

const Notifications = (props) => {
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState();
  const { user } = props;
  const [loadClass, setLoadClass] = useState("spinner-border text-primary");

  const username = user.username;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isApiSubscribed = true;
    axios({
      method: "POST",
      url:
        user.role === "admin"
          ? API_PATH_READ_NOTIFICATIONS_ADMIN
          : API_PATH_READ_NOTIFICATIONS_SALES,
      signal: signal,
      headers: {
        "content-type": "application/json",
      },
      data: { username },
    })
      .then((res) => {
        if (isApiSubscribed) {
          setOrders(res.data.row);
          setLoadClass("spinner-border text-primary d-none");
        }
      })
      .catch((error) =>
        signal.aborted
          ? console.log("successfully aborted")
          : setErrors(error.message)
      );
    return () => {
      isApiSubscribed = false;
      controller.abort();
    };
  }, [username, user]);
  if (errors) console.log(errors);
  // if (orders.length !== 0) {
  return (
    <React.Fragment>
      <h3 className="text-center">
        Nowe Powiadomienia{" "}
        <div className={loadClass} role="status">
          <span className="sr-only"></span>
        </div>{" "}
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
            {user.role === "admin" && <th scope="col">Wycena</th>}
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.project_title}</td>
              <td>{order.ordering_person}</td>
              <td>
                <a href={`${apiURL}/${order.project_file}`}>Pobierz</a>
              </td>
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
  // } else {
  //   return (
  //     <React.Fragment>
  //       <h3>Nie masz nowych powiadomien</h3>
  //     </React.Fragment>
  //   );
  // }
};

export default Notifications;
