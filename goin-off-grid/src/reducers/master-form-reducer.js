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
  let { name, value, id } = action;
  switch (action.type) {
    case "HANDLE_CHANGE":
      return Object.assign({}, state, {
        [id]: {
          [name]: value,
          id,
        },
      });
    case "NEXT_STEP":
      let currentState = { ...initialState };
      let stepOne = currentState.currentStep;
      let nextCurrentStep = stepOne >= 2 ? 3 : stepOne + 1;
      return Object.assign({}, state, {
        [id]: { currentStep: nextCurrentStep, id },
      });
    case "PREV_STEP":
      let nextState = { ...initialState };
      let stepTwo = nextState.currentStep;
      let prevCurrentStep = stepTwo <= 1 ? 1 : stepTwo - 1;
      return Object.assign({}, state, {
        [id]: { currentStep: prevCurrentStep, id },
      });
    default:
      return state;
  }
};
