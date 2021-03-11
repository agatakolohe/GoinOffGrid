import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

function Hike(props) {
  function sendHikeEmail() {
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: '"Carmen" carmenkolohe@hotmail.com',
        email: '"Agata" agatakolohe@gmail.com',
        message:
          "Hello! I am goin off grid! I will be hiking this trail and should be back around this time. Make sure they come back alive!",
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  }
  return (
    <React.Fragment>
      <div onClick={() => props.whenHikeClicked(props.id)}>
        <p>Trail Name: {props.trailName}</p>
        <p>Trail Date: {props.hikeDate}</p>
        <p>Hike Completed: {props.hikeCompleted === true ? "yes" : "no"}</p>
      </div>
      <button
        className="btn btn-success"
        onClick={() => props.completeHikeButton(props.id)}
        type="button"
      >
        Hike Completed
      </button>
      <button className="btn btn-info float-right" onClick={sendHikeEmail}>
        Send Email
      </button>
    </React.Fragment>
  );
}

Hike.propTypes = {
  trailName: PropTypes.string,
  hikeCompleted: PropTypes.bool,
  id: PropTypes.string,
  whenHikeClicked: PropTypes.func,
  completeHikeButton: PropTypes.func,
};

export default Hike;
