// import { v4 } from "uuid";
import masterFormReducer from "../../reducers/master-form-reducer";

describe("masterFormReducer", () => {
  let action;
  const formData = {
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
    id: 1,
  };
  const nextStepTest = {
    1: {
      currentStep: 2,
      id: 1,
    },
  };
  const prevStepTest = {
    1: {
      currentStep: 3,
      id: 1,
    },
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(masterFormReducer({}, { type: null })).toEqual({});
  });

  test("Should handle change in masterForm", () => {
    const { name, value, id } = formData;
    action = {
      type: "HANDLE_CHANGE",
      [name]: value,
      id: id,
    };
    expect(masterFormReducer({}, action)).toEqual({
      [id]: { [name]: value, id },
    });
  });

  test("Should add 1 to current step", () => {
    const { id } = formData;
    action = {
      type: "NEXT_STEP",
      // currentStep,
      id,
    };
    expect(masterFormReducer(nextStepTest, action)).toEqual({
      [1]: { currentStep: 2, id: 1 },
    });
  });
  test("Should subtract 1 from current step", () => {
    const { currentStep, id } = formData;
    action = {
      type: "PREV_STEP",
      currentStep,
      id,
    };
    expect(masterFormReducer(prevStepTest, action)).toEqual({
      [1]: { currentStep: 1, id: 1 },
    });
  });
});
