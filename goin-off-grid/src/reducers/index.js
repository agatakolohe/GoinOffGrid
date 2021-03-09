import masterFormReducer from "./master-form-reducer";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  masterForm: masterFormReducer,
  form: formReducer,
  firestore: firestoreReducer,

});

export default rootReducer;
