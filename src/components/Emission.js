import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Api";

function Emission() {
  const [users, setUsers] = useState(null);
  console.log(users);
  useEffect(() => {
    API.get(`api/users`).then((res) => {
      console.log(res);
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Emission</h2>

            {(function () {
              if (users) {
                return (
                  <>
                    <div className="container-table100">
                      <div
                        className="wrap-table100"
                        style={{
                          width: "auto",
                          justifyContent: "left",
                          padding: "0px",
                        }}
                      >
                        <div className="table100">
                          <table>
                            <thead>
                              <tr className="table100-head">
                                <th className="column1">Client ID</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users &&
                                users.map((user) => (
                                  <Link to={`/reception/${user.id}`} >
                                    <tr key={user.id}>
                                      <td className="column1">{user.id}</td>
                                    </tr>
                                  </Link>
                                ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emission;
