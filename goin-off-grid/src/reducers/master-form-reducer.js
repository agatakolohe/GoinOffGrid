import { v4 } from "uuid";

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
  id: v4(),
};

export default (state = initialState, action) => {
  const { name, value, id, currentStep } = action;
  switch (action.type) {
    case "HANDLE_CHANGE":
      return Object.assign({}, state, {
        [name]: value,
        id,
      });
    case "NEXT_STEP":
      // let currentState = { ...state };
      console.log(currentStep);
      // let stepOne = currentState.currentStep;
      let nextCurrentStep = currentStep >= 2 ? 3 : currentStep + 1;
      return Object.assign({}, state, {
        currentStep: nextCurrentStep,
      });
    case "PREV_STEP":
      // let nextState = { ...initialState };
      // let stepTwo = nextState.currentStep;
      let prevCurrentStep = currentStep <= 1 ? 1 : currentStep - 1;
      return Object.assign({}, state, {
        currentStep: prevCurrentStep,
      });
    default:
      return state;
  }
};
