import React from "react";
import PropTypes from "prop-types";

function Hike(props) {
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
      >
        Hike Completed
      </button>
    </React.Fragment>
  );
}

Hike.propTypes = {
  trailName: PropTypes.string,
  hikeDate: PropTypes.string,
  hikeCompleted: PropTypes.bool,
  id: PropTypes.string,
  whenHikeClicked: PropTypes.func,
  completeHikeButton: PropTypes.func,
};

export default Hike;
