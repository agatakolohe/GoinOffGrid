import { v4 } from "uuid";
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
    id: v4(),
  };
  const nextStepTest = {
    currentStep: 2,
  };
  const prevStepTest = {
    currentStep: 3,
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
      [name]: value,
      id,
    });
  });
  // test("Should handle change in masterForm", () => {
  //   const { hikerName } = handleChangeTest;
  //   action = {
  //     type: "HANDLE_CHANGE",
  //     hikerName,
  //   };
  //   expect(masterFormReducer({}, action)).toEqual({
  //     hikerName: "shawn",
  //   });
  // });

  test("Should add 1 to current step", () => {
    const { currentStep } = nextStepTest;
    action = {
      type: "NEXT_STEP",
      currentStep,
    };
    expect(masterFormReducer(nextStepTest, action)).toEqual({ currentStep: 3 });
  });
  test("Should subtract 1 from current step", () => {
    const { currentStep } = prevStepTest;
    action = {
      type: "PREV_STEP",
      currentStep,
    };
    expect(masterFormReducer(prevStepTest, action)).toEqual({ currentStep: 2 });
  });
});
