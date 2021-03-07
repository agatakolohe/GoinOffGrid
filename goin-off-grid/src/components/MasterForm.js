import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import HikerInfoForm from "./HikerInfoForm";
import TrailInfoForm from "./TrailInfoForm";
import EmergencyContactForm from "./EmergencyContactForm";
// import EditHikeForm from "./EditHikeForm";

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
      id: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      id: v4(),
    });
  };

  handleNewHikeFormSubmission = (event) => {
    event.preventDefault();
    this.props.onNewHikeCreation({
      hikerName: this.state.hikerName,
      hikeDate: this.state.hikeDate,
      clothingWorn: this.state.clothingWorn,
      cellPhone: this.state.cellPhone,
      batteryLife: this.state.batteryLife,
      cellSignal: this.state.cellSignal,
      mood: this.state.mood,
      health: this.state.health,
      itinerary: this.state.itinerary,
      transportationMode: this.state.transportationMode,
      vehicle: this.state.vehicle,
      gas: this.state.gas,
      parking: this.state.parking,
      water: this.state.water,
      food: this.state.food,
      navigation: this.state.navigation,
      buddy: this.state.buddy,
      packedClothing: this.state.packedClothing,
      avalancheKit: this.state.avalancheKit,
      emergencySupplies: this.state.emergencySupplies,
      extraEquip: this.state.extraEquip,
      trailName: this.state.trailName,
      newTrail: this.state.newTrail,
      trailLocation: this.state.trailLocation,
      trailLength: this.state.trailLength,
      trailElevation: this.state.trailElevation,
      trailDifficulty: this.state.trailDifficulty,
      trailPass: this.state.trailPass,
      duration: this.state.duration,
      trailConditions: this.state.trailConditions,
      weatherConditions: this.state.weatherConditions,
      trailAdvisories: this.state.trailAdvisories,
      trailMaintenance: this.state.trailMaintenance,
      footTraffic: this.state.footTraffic,
      contactName: this.state.contactName,
      contactRelationship: this.state.contactRelationship,
      contactEmail: this.state.contactEmail,
      contactTel: this.state.contactTel,
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
          className="btn btn-primary float-right"
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
        <form onSubmit={this.handleNewHikeFormSubmission}>
          {/* //step1 */}
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
          {/* step2 */}
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
          {/* step3 */}
          <EmergencyContactForm
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            contactName={this.state.contactName}
            contactRelationship={this.state.contactRelationship}
            contactEmail={this.state.contactEmail}
            contactTel={this.state.contactTel}
            id={this.state.id}
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
};
export default MasterForm;
