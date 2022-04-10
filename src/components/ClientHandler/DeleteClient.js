import React from 'react';
import axios from 'axios';

function DeleteClient(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .delete(`http://localhost:8080/api/users/${props.data.id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
    <div className="p-t-30 col">
      <button className="btn btn--radius btn--green" type="submit">
        Delete
      </button>
    </div>
    </form>
  )
}

export default DeleteClient