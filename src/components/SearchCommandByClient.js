import React from "react";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AddCommand from "./CmdHandler/AddCommand";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UpdateCommand from "./CmdHandler/UpdateCommand";
import DeleteCommand from "./CmdHandler/DeleteCommand";
import SearchCommand from "./CmdHandler/SearchCommand";
import ShowAllCommands from "./CmdHandler/ShowAllCommands";
import ShowAllClientCommands from "./ClientCommands/ShowAllClientCommands";

function SearchCommandByClient() {
    const [users, setUsers] = useState(null);
  const [commands, setCommands] = useState(null);
  console.log(commands);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.error(`Error : ${err}`));
      console.log('i fire once');
  }, []);

  const [user, setUser] = useState('');
console.log(user);

// useEffect(() => {
    
//     axios.get(`http://localhost:8080/api/users/${user}/commands`)
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//         setCommands(res.data);
//       })
//   }, [commands]);
  return (
    <div className="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      
      <div className="wrapper wrapper--w960">
        <div className="card card-2">
          <div className="card-heading"></div>
          <div className="card-body">

            <h2 className="title">Client's commands</h2>
            
            {/* <form> */}
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search">
                  <select className="onfocusclassname" name="Client" 
                  
                   onChange = {(e) => setUser(JSON.parse(e.target.value).id
                   )} >
                    <option disabled="disabled" selected>
                      client
                    </option>
                    {users &&
                      users.map((user) => (
                        <option key={user.id} value={JSON.stringify(user)}
                        >{user.nom}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="row-buttons btn-align-end-clientt-commands">
                <ShowAllClientCommands data={user} name={commands} onNameChange={setCommands}/>
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
      {
                    (function () {
                      if (commands) {
                          return <>
                          <div className="container-table100">
			<div className="wrap-table100">
				<div className="table100">
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">Date</th>
								<th className="column2">Command ID</th>
								<th className="column3">Client</th>
							</tr>
						</thead>
						<tbody>
            {commands &&
                      commands.map((command) => (
                        <tr key={command.id}>
									<td className="column1">{command.date}</td>
									<td className="column2">{command.id}</td>
									<td className="column3">{command.client.nom}</td>
								</tr>
                      ))}
								
								
						</tbody>
					</table>
				</div>
			</div>
		</div>
                          </>
                      }
                  })()}
      
    </div>
  )
}

export default SearchCommandByClient