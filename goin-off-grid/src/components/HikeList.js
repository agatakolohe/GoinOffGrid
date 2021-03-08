import React from "react";
import Hike from "./Hike";
import PropTypes from "prop-types";

function HikeList(props) {
  const { hikeList, onClickingCompleteHike } = props;

  return (
    <React.Fragment>
      {hikeList.map((hike) => (
        <Hike
          whenHikeClicked={props.onHikeSelection}
          trailName={hike.trailName}
          hikeDate={hike.hikeDate.toString()}
          hikeCompleted={hike.hikeCompleted}
          id={hike.id}
          key={hike.id}
          completeHikeButton={onClickingCompleteHike}
        />
      ))}
    </React.Fragment>
  );
}

HikeList.propTypes = {
  hikeList: PropTypes.array,
  onHikeSelection: PropTypes.func,
  onClickingCompleteHike: PropTypes.func,
};
export default HikeList;
