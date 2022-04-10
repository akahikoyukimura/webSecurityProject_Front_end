import React from 'react';
import axios from 'axios';

function ShowAllClientCommands({ data,name, onNameChange }) {
console.log(data);
    const handleSubmit = event => {
        event.preventDefault();
        
        axios.get(`http://localhost:8080/api/users/${data}/commands`)
          .then(res => {
            console.log(res);
            console.log(res.data);
            onNameChange(res.data);
          })
      }
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-t-30 col">
        <button className="btn btn--radius btn--green" type="submit">
          Show All
        </button>
      </div>
    </form>
  )
}

export default ShowAllClientCommands