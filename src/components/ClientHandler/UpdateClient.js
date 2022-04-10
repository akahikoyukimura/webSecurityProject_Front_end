import React from 'react';
import axios from 'axios';

function UpdateClient(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios
          .patch(`http://localhost:8080/api/users/${props.data.id}`, {
            nom:props.data.nom,
        prenom:props.data.prenom,
        age:props.data.age
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
          });
      };
  return (
    <form onSubmit={handleSubmit}>
    <div className="p-t-30 col">
      <button className="btn btn--radius btn--green" type="submit">
        Update
      </button>
    </div>
  </form>
  )
}

export default UpdateClient