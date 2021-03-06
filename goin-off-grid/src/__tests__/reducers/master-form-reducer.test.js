import masterFormReducer from "../../reducers/master-form-reducer";

describe("masterFormReducer", () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(masterFormReducer({}, { type: null })).toEqual({});
  });
});
