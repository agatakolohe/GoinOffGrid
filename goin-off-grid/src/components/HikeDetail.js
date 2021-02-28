import React from "react";
import PropTypes from "prop-types";

function HikeDetail(props) {
  const { hike } = props;
  return (
    <React.Fragment>
      <h1>Hiker Information</h1>
      <p>Hiker Name: {hike.hikerName}</p>
      <p>Hike Date: {hike.trailDate}</p>
      <p>Clothing Worn: {hike.clothingWorn}</p>
      <p>Bringing Cell Phone: {hike.cellPhone}</p>
      <p>Battery Life: {hike.batteryLife}</p>
      <p>Cell Signal: {hike.cellSignal}</p>
      <p>Mood: {hike.mood}</p>
      <p>Health: {hike.health}</p>
      <p>Itinerary: {hike.itinerary}</p>
      <p>Transportation {hike.transporationMode}</p>
      <p>Vehicle Information: {hike.vehicle}</p>
      <p>Gas Tank: {hike.gas}</p>
      <p>Parking Information: {hike.parking}</p>

      <h4>Supplies: </h4>
      <p>Water: {hike.water}</p>
      <p>Food: {hike.food}</p>
      <p>Navigation: {hike.navigation}</p>
      <p>Buddy: {hike.buddy}</p>
      <p>Packed Clothing: {hike.packedClothing}</p>
      <p>Avalanche Kit: {hike.avalancheKit}</p>
      <p>Emergency Supplies: {hike.emergencySupplies}</p>
      <p>Extra Equipment: {hike.extraEquip}</p>

      <h3>Hike Information:</h3>
      <p>Trail Name: {hike.trailName}</p>
      <p>Estimated Duration: {hike.duration}</p>
      <p>Has hiked this trail before: {hike.newTrail}</p>
      <p>Location: {hike.trailLocation}</p>
      <p>Length: {hike.trailLength}</p>
      <p>Elevation: {hike.trailElevation}</p>
      <p>Difficulty: {hike.trailDifficulty}</p>
      <p>Permit/Pass Required: {hike.trailPass}</p>
      <p>Trail Conditions: {hike.trailConditions}</p>
      <p>Advisories: {hike.trailAdvisories}</p>
      <p>Trail Maintenance: {hike.trailMaintenance}</p>
      <p>Foot Traffic: {hike.footTraffic}</p>

      <h3>Emergency Contact Information</h3>
      <p>Contact Name: {hike.contactName}</p>
      <p>Relationship: {hike.contactRelationship}</p>
      <p>Email: {hike.contactEmail}</p>
      <p>Phone Number: {hike.contactTel}</p>

      <button className="btn btn-success" onClick={props.onClickingEdit}>
        Edit
      </button>
      <hr />
      <button
        className="btn btn-danger"
        onClick={() => props.onClickingDelete(hike.id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
}

HikeDetail.propTypes = {
  hike: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default HikeDetail;