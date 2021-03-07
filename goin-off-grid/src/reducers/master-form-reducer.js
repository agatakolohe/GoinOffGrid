// import { v4 } from "uuid";

const initialState = {
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

const masterFormReducer = (state = initialState) => {
  // const { name, value, id, currentStep } = action;
  // switch (action.type) {
  //   case "HANDLE_CHANGE":
  //     return Object.assign({}, state, {
  //       [name]: value,
  //       id,
  //     });
  //   case "NEXT_STEP":
  //     let nextCurrentStep = currentStep >= 2 ? 3 : currentStep + 1;
  //     return Object.assign({}, state, {
  //       currentStep: nextCurrentStep,
  //     });
  //   case "PREV_STEP":
  //     let prevCurrentStep = currentStep <= 1 ? 1 : currentStep - 1;
  //     return Object.assign({}, state, {
  //       currentStep: prevCurrentStep,
  //     });
  //   default:
  return state;
};

export default masterFormReducer;
