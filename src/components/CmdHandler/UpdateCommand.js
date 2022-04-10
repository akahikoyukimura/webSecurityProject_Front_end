import React from "react";
import axios from "axios";

function UpdateCommand(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .patch(`http://localhost:8080/api/commands/${props.data.id}`, {
        date: props.data.date,
        client: props.data.client,
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
  );
}

export default UpdateCommand;
