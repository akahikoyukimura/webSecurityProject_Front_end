import React from 'react';
import axios from "axios";

function AddClient(props) {
  console.log(props.data);

  const handleSubmit = event => {
    event.preventDefault();
    
    axios.post(`http://localhost:8080/api/users`, { 
        nom:props.data.nom,
        prenom:props.data.prenom,
        age:props.data.age
     })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-t-30 col">
        <button className="btn btn--radius btn--green" type="submit">Add</button>
      </div>
    </form>
  )
}

export default AddClient