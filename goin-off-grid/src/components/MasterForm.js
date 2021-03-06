import React, { Component } from "react";
import { reduxForm } from "redux-form";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import HikerInfoForm from "./HikerInfoForm";
import TrailInfoForm from "./TrailInfoForm";
import EmergencyContactForm from "./EmergencyContactForm";
// import { useFirestore } from "react-redux-firebase";
import firebase from "../firebase";

const formStyles = {
  backgroundColor: "#788c94",
  opacity: "0.9",
  padding: "1%",
  borderRadius: "15px 15px",
  marginTop: "1%",
};

class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  handleNewHikeFormSubmission = (data) => {
    const db = firebase.firestore();
    db.collection("hikes").add({
      hikerName: data.hikerName,
      // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      // hikerId: data.hikerId,
      // clothingWorn: data.clothingWorn,
      // cellPhone: data.cellPhone,
      // batteryLife: data.batteryLife,
      // cellSignal: data.cellSignal,
      // mood: data.mood,
      // health: data.health,
      // itinerary: data.itinerary,
      // transportationMode: data.transportationMode,
      // vehicle: data.vehicle,
      // gas: data.gas,
      // parking: data.parking,
      // water: data.water,
      // food: data.food,
      // navigation: data.navigation,
      // buddy: data.buddy,
      // packedClothing: data.packedClothing,
      // avalancheKit: data.avalancheKit,
      // emergencySupplies: data.emergencySupplies,
      // extraEquip: data.extraEquip,
      // trailName: data.trailName,
      // newTrail: data.newTrail,
      // trailLocation: data.trailLocation,
      // trailLength: data.trailLength,
      // trailElevation: data.trailElevation,
      // trailDifficulty: data.trailDifficulty,
      // trailPass: data.trailPass,
      // duration: data.duration,
      // trailConditions: data.trailConditions,
      // weatherConditions: data.weatherConditions,
      // trailAdvisories: data.trailAdvisories,
      // trailMaintenance: data.trailMaintenance,
      // footTraffic: data.footTraffic,
      // contactName: data.contactName,
      // contactRelationship: data.contactRelationship,
      // contactEmail: data.contactEmail,
      // contactTel: data.contactTel,
    });
    this.props.onNewHikeCreation({
      hikerName: data.hikerName,
      hikeDate: data.hikeDate,
      hikerId: data.hikerId,
      clothingWorn: data.clothingWorn,
      cellPhone: data.cellPhone,
      batteryLife: data.batteryLife,
      cellSignal: data.cellSignal,
      mood: data.mood,
      health: data.health,
      itinerary: data.itinerary,
      transportationMode: data.transportationMode,
      vehicle: data.vehicle,
      gas: data.gas,
      parking: data.parking,
      water: data.water,
      food: data.food,
      navigation: data.navigation,
      buddy: data.buddy,
      packedClothing: data.packedClothing,
      avalancheKit: data.avalancheKit,
      emergencySupplies: data.emergencySupplies,
      extraEquip: data.extraEquip,
      trailName: data.trailName,
      newTrail: data.newTrail,
      trailLocation: data.trailLocation,
      trailLength: data.trailLength,
      trailElevation: data.trailElevation,
      trailDifficulty: data.trailDifficulty,
      trailPass: data.trailPass,
      duration: data.duration,
      trailConditions: data.trailConditions,
      weatherConditions: data.weatherConditions,
      trailAdvisories: data.trailAdvisories,
      trailMaintenance: data.trailMaintenance,
      footTraffic: data.footTraffic,
      contactName: data.contactName,
      contactRelationship: data.contactRelationship,
      contactEmail: data.contactEmail,
      contactTel: data.contactTel,
      id: v4(),
    });
  };
  render() {
    const { handleSubmit } = this.props;
    const { page } = this.state;
    return (
      <div style={formStyles}>
        {page === 1 && <HikerInfoForm onSubmit={this.nextPage} />}
        {page === 2 && (
          <TrailInfoForm
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <EmergencyContactForm
            previousPage={this.previousPage}
            onSubmit={handleSubmit(this.handleNewHikeFormSubmission.bind(this))}
          />
        )}
      </div>
    );
  }
}

MasterForm.propTypes = {
  onNewHikeCreation: PropTypes.func,
};

MasterForm = reduxForm({
  form: "hike-form",
})(MasterForm);
export default MasterForm;
