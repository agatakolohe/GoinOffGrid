import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

const hikeStyles = {
  marginTop: "10%",
  padding: "3%",
  borderRadius: "15px 50px",
  color: "#3d4d4d",
  backgroundColor: "#cbcdcb",
};

function Hike(props) {
  function sendHikeEmail() {
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        name: '"Carmen" carmenkolohe@hotmail.com',
        email: '"Agata" agatakolohe@gmail.com',
        message: `Hey ${props.contactName}! I am goin off grid on ${props.hikeDate}! I will be hiking ${props.trailName}. If you don't hear from me in ${props.duration} hours please check in and to make sure I am alive! Love youuu ${props.hikerName}`,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  }
  // function sendEmailOnHikeCompletion() {
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:3000/send",
  //     data: {
  //       name: '"Carmen" carmenkolohe@hotmail.com',
  //       email: '"Agata" agatakolohe@gmail.com',
  //       message: `Hey ${props.contactName}! I am am alive and safely home from my hike! Lets grab a beer! Love youuu ${props.hikerName}`,
  //     },
  //   }).then((response) => {
  //     if (response.data.msg === "success") {
  //       alert("Email sent, awesome!");
  //     } else if (response.data.msg === "fail") {
  //       alert("Oops, something went wrong. Try again");
  //     }
  //   });
  // }
  return (
    <React.Fragment>
      <div style={hikeStyles}>
        <div onClick={() => props.whenHikeClicked(props.id)}>
          <p>Trail Name: {props.trailName}</p>
          <p>Trail Date: {props.hikeDate}</p>
          <p>Duration: {props.duration}</p>
          <p>Hike Completed: {props.hikeCompleted === true ? "yes" : "no"}</p>
        </div>
        <button
          className="btn btn-success"
          onClick={() => props.completeHikeButton(props.id)}
          type="button"
        >
          Hike Completed
        </button>
        {/* <button className="btn btn-warning" onClick={sendEmailOnHikeCompletion}>
          Send Email to Contact
        </button> */}
        <button className="btn btn-info" onClick={sendHikeEmail}>
          Send Email
        </button>
      </div>
      <hr />
      <br />
    </React.Fragment>
  );
}

Hike.propTypes = {
  duration: PropTypes.string,
  contactName: PropTypes.string,
  hikerName: PropTypes.string,
  trailName: PropTypes.string,
  hikeCompleted: PropTypes.bool,
  id: PropTypes.string,
  whenHikeClicked: PropTypes.func,
  completeHikeButton: PropTypes.func,
};

export default Hike;
