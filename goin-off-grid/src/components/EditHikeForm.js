import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditHikeForm(props) {
  const { hike } = props;

  function handleEditHikeFormSubmission(event) {
    event.preventDefault();
    props.onEditHike({
      hikerName: event.target.hikerName.value,
      hikeDate: event.target.hikeDate.value,
      clothingWorn: event.target.clothingWorn.value,
      cellPhone: event.target.cellPhone.value,
      batteryLife: event.target.batteryLife.value,
      cellSignal: event.target.cellSignal.value,
      mood: event.target.mood.value,
      health: event.target.health.value,
      itinerary: event.target.itinerary.value,
      transportationMode: event.target.transportationMode.value,
      vehicle: event.target.vehicle.value,
      gas: event.target.gas.value,
      parking: event.target.parking.value,
      water: event.target.water.value,
      food: event.target.food.value,
      navigation: event.target.navigation.value,
      buddy: event.target.buddy.value,
      packedClothing: event.target.packedClothing.value,
      avalancheKit: event.target.avalancheKit.value,
      emergencySupplies: event.target.emergencySupplies.value,
      extraEquip: event.target.extraEquip.value,
      trailName: event.target.trailName.value,
      newTrail: event.target.newTrail.value,
      trailLocation: event.target.trailLocation.value,
      trailLength: event.target.trailLength.value,
      trailElevation: event.target.trailElevation.value,
      trailDifficulty: event.target.trailDifficulty.value,
      trailPass: event.target.trailPass.value,
      duration: event.target.duration.value,
      trailConditions: event.target.trailConditions.value,
      weatherConditions: event.target.weatherConditions.value,
      trailAdvisories: event.target.trailAdvisories.value,
      trailMaintenance: event.target.trailMaintenance.value,
      footTraffic: event.target.footTraffic.value,
      contactName: event.target.contactName.value,
      contactRelationship: event.target.contactRelationship.value,
      contactEmail: event.target.contactEmail.value,
      contactTel: event.target.contactTel.value,
      id: hike.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditHikeFormSubmission}
        buttonText="Update Hike"
      />
    </React.Fragment>
  );
}

EditHikeForm.propTypes = {
  hike: PropTypes.object,
  onEditHike: PropTypes.func,
};
export default EditHikeForm;
