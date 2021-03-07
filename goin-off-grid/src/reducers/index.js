import masterFormReducer from "./master-form-reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  masterForm: masterFormReducer,
  form: formReducer,
});

export default rootReducer;
