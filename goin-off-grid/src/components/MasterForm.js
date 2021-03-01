import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import HikerInfoForm from "./HikerInfoForm";
import TrailInfoForm from "./TrailInfoForm";
import EmergencyContactForm from "./EmergencyContactForm";

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      hikerName: "",
      hikeDate: "",
      clothingWorn: "",
      cellPhone: "",
      batteryLife: "",
      cellSignal: "",
      mood: "",
      health: "",
      itinerary: "",
      transportationMode: "",
      vehicle: "",
      gas: "",
      parking: "",
      water: "",
      food: "",
      navigation: "",
      buddy: "",
      packedClothing: "",
      avalancheKit: "",
      emergencySupplies: "",
      extraEquip: "",
      trailName: "",
      newTrail: "",
      trailLocation: "",
      trailLength: "",
      trailElevation: "",
      trailDifficulty: "",
      trailPass: "",
      duration: "",
      trailConditions: "",
      weatherConditions: "",
      trailAdvisories: "",
      trailMaintenance: "",
      footTraffic: "",
      contactName: "",
      contactRelationship: "",
      contactEmail: "",
      contactTel: "",
      id: v4(),
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleNewHikeFormSubmission = (event) => {
    event.preventDefault();
    this.state.props.onNewHikeCreation({
      hikerName: event.target.hikerName.value,
      hikeDate: event.target.hikerDate.value,
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
      id: v4(),
    });
  };

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Previous
        </button>
      );
    }
    return null;
  }
  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn primary float-right"
          type="button"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    return null;
  }
  render() {
    return (
      <React.Fragment>
        <h1>GoinOffGrid Form</h1>
        <form onSubmit={this.props.onNewHikeCreation}>
          <HikerInfoForm
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            hikerName={this.state.hikerName}
            hikeDate={this.state.hikeDate}
            clothingWorn={this.state.clothingWorn}
            cellPhone={this.state.cellPhone}
            batteryLife={this.state.batteryLife}
            cellSignal={this.state.cellSignal}
            mood={this.state.mood}
            health={this.state.health}
            itinerary={this.state.itinerary}
            transportationMode={this.state.transportationMode}
            vehicle={this.state.vehicle}
            gas={this.state.gas}
            parking={this.state.parking}
            water={this.state.water}
            food={this.state.food}
            navigation={this.state.navigation}
            buddy={this.state.buddy}
            packedClothing={this.state.packedClothing}
            avalancheKit={this.state.avalancheKit}
            emergencySupplies={this.state.emergencySupplies}
            extraEquip={this.state.extraEquip}
          />
          <TrailInfoForm
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            trailName={this.state.trailName}
            newTrail={this.state.newTrail}
            trailLocation={this.state.trailLocation}
            trailLength={this.state.trailLength}
            trailElevation={this.state.trailElevation}
            trailDifficulty={this.state.trailDifficulty}
            trailPass={this.state.trailPass}
            duration={this.state.duration}
            trailConditions={this.state.trailConditions}
            weatherConditions={this.state.weatherConditions}
            trailAdvisories={this.state.trailAdvisories}
            trailMaintenance={this.state.trailMaintenance}
            footTraffic={this.state.footTraffic}
          />
          <EmergencyContactForm
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            contactName={this.state.contactName}
            contactRelationship={this.state.contactRelationship}
            contactEmail={this.state.contactEmail}
            contactTel={this.state.contactTel}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </React.Fragment>
    );
  }
}
MasterForm.propTypes = {
  onNewHikeCreation: PropTypes.func,
  hikerName: PropTypes.string,
  hikeDate: PropTypes.string,
  hikerId: PropTypes.string,
  clothingWorn: PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  batteryLife: PropTypes.string,
  cellSignal: PropTypes.string,
  mood: PropTypes.string,
  health: PropTypes.string,
  itinerary: PropTypes.string,
  transportationMode: PropTypes.string,
  vehicle: PropTypes.string,
  gas: PropTypes.string,
  parking: PropTypes.string,
  water: PropTypes.string,
  food: PropTypes.string,
  navigation: PropTypes.string,
  buddy: PropTypes.string,
  packedClothing: PropTypes.string,
  emergencySupplies: PropTypes.string,
  extraEquip: PropTypes.string,
  trailName: PropTypes.string,
  trailLocation: PropTypes.string,
  trailLength: PropTypes.string,
  trailElevation: PropTypes.string,
  trailDifficulty: PropTypes.string,
  trailPass: PropTypes.string,
  duration: PropTypes.string,
  trailConditions: PropTypes.string,
  weatherConditions: PropTypes.string,
  trailAdvisories: PropTypes.string,
  trailMaintenance: PropTypes.string,
  footTraffic: PropTypes.string,
  contactName: PropTypes.string,
  contactRelationship: PropTypes.string,
  contactEmail: PropTypes.string,
  contactTel: PropTypes.string,
  id: PropTypes.string,
};
export default MasterForm;
