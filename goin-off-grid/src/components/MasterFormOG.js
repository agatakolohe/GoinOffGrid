// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { v4 } from "uuid";
// import HikerInfoForm from "./HikerInfoForm";
// import TrailInfoForm from "./TrailInfoForm";
// import EmergencyContactForm from "./EmergencyContactForm";
// import { Field, reduxForm } from "react-redux";

// class MasterForm extends Component {
//   constructor(props) {
//     super(props);
// this.state = {
//   currentStep: 1,
//   hikerName: "",
//   hikeDate: "",
//   clothingWorn: "",
//   cellPhone: "",
//   batteryLife: "",
//   cellSignal: "",
//   mood: "",
//   health: "",
//   itinerary: "",
//   transportationMode: "",
//   vehicle: "",
//   gas: "",
//   parking: "",
//   water: "",
//   food: "",
//   navigation: "",
//   buddy: "",
//   packedClothing: "",
//   avalancheKit: "",
//   emergencySupplies: "",
//   extraEquip: "",
//   trailName: "",
//   newTrail: "",
//   trailLocation: "",
//   trailLength: "",
//   trailElevation: "",
//   trailDifficulty: "",
//   trailPass: "",
//   duration: "",
//   trailConditions: "",
//   weatherConditions: "",
//   trailAdvisories: "",
//   trailMaintenance: "",
//   footTraffic: "",
//   contactName: "",
//   contactRelationship: "",
//   contactEmail: "",
//   contactTel: "",
//   id: "",
// };
// }

// handleChange = (event) => {
//   const { dispatch } = this.props;
//   const { name, value } = event.target;
//   const action = {
//     type: "HANDLE_CHANGE",
//     [name]: value,
//     id: v4(),
//   };
//   dispatch(action);
// this.setState({
//   [name]: value,
//   id: v4(),
// });
// };

// handleNewHikeFormSubmission = (event) => {
//   event.preventDefault();
//   this.props.onNewHikeCreation({
//     hikerName: this.props.hikerName,
//     hikeDate: this.props.hikeDate,
//     clothingWorn: this.props.clothingWorn,
//     cellPhone: this.props.cellPhone,
//     batteryLife: this.props.batteryLife,
//     cellSignal: this.props.cellSignal,
//     mood: this.props.mood,
//     health: this.props.health,
//     itinerary: this.props.itinerary,
//     transportationMode: this.props.transportationMode,
//     vehicle: this.props.vehicle,
//     gas: this.props.gas,
//     parking: this.props.parking,
//     water: this.props.water,
//     food: this.props.food,
//     navigation: this.props.navigation,
//     buddy: this.props.buddy,
//     packedClothing: this.props.packedClothing,
//     avalancheKit: this.props.avalancheKit,
//     emergencySupplies: this.props.emergencySupplies,
//     extraEquip: this.props.extraEquip,
//     trailName: this.props.trailName,
//     newTrail: this.props.newTrail,
//     trailLocation: this.props.trailLocation,
//     trailLength: this.props.trailLength,
//     trailElevation: this.props.trailElevation,
//     trailDifficulty: this.props.trailDifficulty,
//     trailPass: this.props.trailPass,
//     duration: this.props.duration,
//     trailConditions: this.props.trailConditions,
//     weatherConditions: this.props.weatherConditions,
//     trailAdvisories: this.props.trailAdvisories,
//     trailMaintenance: this.props.trailMaintenance,
//     footTraffic: this.props.footTraffic,
//     contactName: this.props.contactName,
//     contactRelationship: this.props.contactRelationship,
//     contactEmail: this.props.contactEmail,
//     contactTel: this.props.contactTel,
//     id: v4(),
//   });
// };

// _next = () => {
// let currentStep = this.state.currentStep;
// currentStep = currentStep >= 2 ? 3 : currentStep + 1;
// this.setState({
//   currentStep: currentStep,
// });
//   const { dispatch } = this.props;
//   const { currentStep } = this.props.currentStep;
//   const action = {
//     type: "NEXT_STEP",
//     currentStep,
//   };
//   dispatch(action);
// };
// _prev = () => {
// let currentStep = this.state.currentStep;
// currentStep = currentStep <= 1 ? 1 : currentStep - 1;
// this.setState({
//   currentStep: currentStep,
// });
//     const { dispatch } = this.props;
//     const { currentStep } = this.props.currentStep;
//     const action = {
//       type: "PREV_STEP",
//       currentStep,
//     };
//     dispatch(action);
//   };
//   previousButton() {
//     let currentStep = this.props.currentStep;
//     if (currentStep !== 1) {
//       return (
//         <button
//           className="btn btn-secondary"
//           type="button"
//           onClick={this._prev}
//         >
//           Previous
//         </button>
//       );
//     }
//     return null;
//   }
//   nextButton() {
//     let currentStep = this.props.currentStep;
//     if (currentStep < 3) {
//       return (
//         <button
//           className="btn btn-primary float-right"
//           type="button"
//           onClick={this._next}
//         >
//           Next
//         </button>
//       );
//     }
//     return null;
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <h1>GoinOffGrid Form</h1>
//         <form onSubmit={this.handleNewHikeFormSubmission}>
//           {/* //step1 */}
//           <HikerInfoForm
//             currentStep={this.props.currentStep}
//             handleChange={this.handleChange}
//             hikerName={this.props.hikerName}
//             hikeDate={this.props.hikeDate}
//             clothingWorn={this.props.clothingWorn}
//             cellPhone={this.props.cellPhone}
//             batteryLife={this.props.batteryLife}
//             cellSignal={this.props.cellSignal}
//             mood={this.props.mood}
//             health={this.props.health}
//             itinerary={this.props.itinerary}
//             transportationMode={this.props.transportationMode}
//             vehicle={this.props.vehicle}
//             gas={this.props.gas}
//             parking={this.props.parking}
//             water={this.props.water}
//             food={this.props.food}
//             navigation={this.props.navigation}
//             buddy={this.props.buddy}
//             packedClothing={this.props.packedClothing}
//             avalancheKit={this.props.avalancheKit}
//             emergencySupplies={this.props.emergencySupplies}
//             extraEquip={this.props.extraEquip}
//           />
//           {/* step2 */}
//           <TrailInfoForm
//             currentStep={this.props.currentStep}
//             handleChange={this.handleChange}
//             trailName={this.props.trailName}
//             newTrail={this.props.newTrail}
//             trailLocation={this.props.trailLocation}
//             trailLength={this.props.trailLength}
//             trailElevation={this.props.trailElevation}
//             trailDifficulty={this.props.trailDifficulty}
//             trailPass={this.props.trailPass}
//             duration={this.props.duration}
//             trailConditions={this.props.trailConditions}
//             weatherConditions={this.props.weatherConditions}
//             trailAdvisories={this.props.trailAdvisories}
//             trailMaintenance={this.props.trailMaintenance}
//             footTraffic={this.props.footTraffic}
//           />
//           {/* step3 */}
//           <EmergencyContactForm
//             currentStep={this.props.currentStep}
//             handleChange={this.handleChange}
//             contactName={this.props.contactName}
//             contactRelationship={this.props.contactRelationship}
//             contactEmail={this.props.contactEmail}
//             contactTel={this.props.contactTel}
//             id={this.props.id}
//           />
//           {this.previousButton()}
//           {this.nextButton()}
//         </form>
//       </React.Fragment>
//     );
//   }
// }
// // MasterForm.propTypes = {
// //   onNewHikeCreation: PropTypes.func,
// //   hikerName: PropTypes.string,
// // };
// // const mapStateToProps = (state) => {
// //   return {
// //     currentStep: state.currentStep,
// //     hikerName: state.hikerName,
// //     hikeDate: state.hikeDate,
// //     clothingWorn: state.clothingWorn,
// //     cellPhone: state.cellPhone,
// //     batteryLife: state.batteryLife,
// //     cellSignal: state.cellSignal,
// //     mood: state.mood,
// //     health: state.health,
// //     itinerary: state.itinerary,
// //     transportationMode: state.transportationMode,
// //     vehicle: state.vehicle,
// //     gas: state.gas,
// //     parking: state.parking,
// //     water: state.water,
// //     food: state.food,
// //     navigation: state.navigation,
// //     buddy: state.buddy,
// //     packedClothing: state.packedClothing,
// //     avalancheKit: state.avalancheKit,
// //     emergencySupplies: state.emergencySupplies,
// //     extraEquip: state.extraEquip,
// //     trailName: state.trailName,
// //     newTrail: state.newTrail,
// //     trailLocation: state.trailLocation,
// //     trailLength: state.trailLength,
// //     trailElevation: state.trailElevation,
// //     trailDifficulty: state.trailDifficulty,
// //     trailPass: state.trailPass,
// //     duration: state.duration,
// //     trailConditions: state.trailConditions,
// //     weatherConditions: state.weatherConditions,
// //     trailAdvisories: state.trailAdvisories,
// //     trailMaintenance: state.trailMaintenance,
// //     footTraffic: state.footTraffic,
// //     contactName: state.contactName,
// //     contactRelationship: state.contactRelationship,
// //     contactEmail: state.contactEmail,
// //     contactTel: state.contactTel,
// //     id: state.id,
// //   };
// // };
// // MasterForm = connect(mapStateToProps)(MasterForm);

// MasterForm = reduxForm({ form: "hike-form" })(MasterForm);

// MasterForm.propTypes = {
//   onNewHikeCreation: PropTypes.func,
//   hikerName: PropTypes.string,
//   hikeDate: PropTypes.string,
//   hikerId: PropTypes.string,
//   clothingWorn: PropTypes.string,
//   avalancheKit: PropTypes.string,
//   cellPhone: PropTypes.string,
//   batteryLife: PropTypes.string,
//   cellSignal: PropTypes.string,
//   mood: PropTypes.string,
//   health: PropTypes.string,
//   itinerary: PropTypes.string,
//   transportationMode: PropTypes.string,
//   vehicle: PropTypes.string,
//   gas: PropTypes.string,
//   parking: PropTypes.string,
//   water: PropTypes.string,
//   food: PropTypes.string,
//   navigation: PropTypes.string,
//   buddy: PropTypes.string,
//   packedClothing: PropTypes.string,
//   emergencySupplies: PropTypes.string,
//   extraEquip: PropTypes.string,
//   trailName: PropTypes.string,
//   newTrail: PropTypes.string,
//   trailLocation: PropTypes.string,
//   trailLength: PropTypes.string,
//   trailElevation: PropTypes.string,
//   trailDifficulty: PropTypes.string,
//   trailPass: PropTypes.string,
//   duration: PropTypes.string,
//   trailConditions: PropTypes.string,
//   weatherConditions: PropTypes.string,
//   trailAdvisories: PropTypes.string,
//   trailMaintenance: PropTypes.string,
//   footTraffic: PropTypes.string,
//   contactName: PropTypes.string,
//   contactRelationship: PropTypes.string,
//   contactEmail: PropTypes.string,
//   contactTel: PropTypes.string,
//   id: PropTypes.string,
// };
// export default MasterForm;
