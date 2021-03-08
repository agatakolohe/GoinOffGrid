import React from "react";
// import PropTypes from "prop-types";
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import moment from "moment";
import momentLocaliser from "react-widgets-moment";
import { Field, reduxForm } from "redux-form";
import "react-widgets/dist/css/react-widgets.css";

momentLocaliser(moment);

const renderDateTimePicker = ({
  input: { onChange, value },
  showTime,
  meta: { touched, error },
}) => (
  <div>
    <DateTimePicker
      onChange={onChange}
      format="DD MMM YYYY | HH:mm"
      time={showTime}
      value={!value ? null : new Date(value)}
    />
    {touched && error && <span>{error}</span>}
  </div>
);
const required = (value) =>
  value ? undefined : <div style={{ color: "red" }}>Required</div>;

const HikerInfoForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Hiker Information</h1>
      <div className="form-group">
        <p>Hiker Name</p>
        <Field
          name="hikerName"
          type="text"
          placeholder="Your Name"
          component="input"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Date of Hike</p>
        <Field
          name="hikeDate"
          showTime={true}
          component={renderDateTimePicker}
          label="Date of Hike"
          className="form-control"
          validate={[required]}
        />
      </div>
      <div className="form-group">
        <p>Will you have any form of identification on you?</p>
        <Field
          name="hikerId"
          type="text"
          component="input"
          placeholder="Yes, I will have my state ID in my backpack."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Clothing Worn:</p>
        <Field
          name="clothingWorn"
          component="textarea"
          placeholder="Describe the clothing you will be wearing on the hike."
          className="form-control"
        />
      </div>
      <div className="form-check">
        <p>Are you bringing your cell phone?</p>
        <p>
          <Field
            className="form-check-input"
            name="cellPhone"
            component="input"
            type="radio"
            value="yes"
          />{" "}
          Yes
        </p>
        <p>
          <Field
            className="form-check-input"
            name="cellPhone"
            component="input"
            type="radio"
            value="no"
          />{" "}
          No
        </p>
      </div>
      <div className="form-group">
        <p>Cell Phone Battery Percentage:</p>
        <Field
          name="batteryLife"
          type="text"
          component="input"
          placeholder="100%"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Cell Phone Signal:</p>
        <Field
          name="cellSignal"
          type="text"
          component="input"
          placeholder="Cell signal on trail, if known"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Mood Check: How are you feeling about this hike?</p>
        <Field
          name="mood"
          type="text"
          component="textarea"
          placeholder="Excited to hike! Need nature therapy."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>
          Health Check: Any health conditions or concerns you may be currently
          exhibiting?"
        </p>
        <Field
          name="health"
          type="text"
          component="textarea"
          placeholder="Describe any health conditions or concerns. Example: Asthma, shortness of breath, cough."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>What are your plans for the hike?</p>
        <Field
          name="itinerary"
          type="text"
          component="textarea"
          placeholder="I plan to stay on the trail and hike to the summit. I plan to swim at the lake. I plan to do some rock climbing."
          className="form-control"
        />
      </div>
      <h4>Transportation</h4>
      <div className="form-group">
        <p>Mode of Transportation</p>
        <Field
          name="transportationMode"
          type="text"
          component="input"
          label="Mode of Transportation"
          placeholder="Car, Bus, Walk"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Vehicle Description:</p>
        <Field
          name="vehicle"
          type="text"
          component="input"
          placeholder="Color, Name, Make, and Model."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Amount of gas:</p>
        <Field
          name="gas"
          type="text"
          component="input"
          placeholder="Full tank"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Where will you be parking your vehicle?</p>
        <Field
          name="parking"
          type="text"
          component="textarea"
          placeholder="At the trail head. Side of the road at the bottom of the trail head."
          className="form-control"
        />
      </div>
      <h4>Supplies</h4>
      <div className="form-group">
        <p>Water:</p>
        <Field
          name="water"
          type="text"
          component="input"
          placeholder="32 oz bottle, Camelback"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Food:</p>
        <Field
          name="food"
          type="text"
          component="input"
          placeholder="Snacks, lunch, beer"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Navigation</p>
        <Field
          name="navigation"
          type="text"
          component="textarea"
          placeholder="List any navigation tools you are bringing (e.g., compass, map, GPS)"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>
          Is anyone joining you on this hike? <br />
          (Please provide information for any buddies joining you.)
        </p>
        <Field
          name="buddy"
          type="text"
          component="textarea"
          placeholder="I am bringing my dog. His name is Doggo, he is a Black Lab. Yes, a friend is joining me. Their name is John Muir. No, I am solo hiking."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>List any clothing packed.</p>
        <Field
          name="packedClothing"
          type="text"
          component="textarea"
          placeholder="Extra pair of socks/rain coat"
          className="form-control"
        />
      </div>
      <div className="form-check">
        <p>Are you packing an avalanche kit?</p>
        <div>
          <p>
            <Field
              className="form-check-input"
              name="avalancheKit"
              component="input"
              type="radio"
              value="yes"
            />{" "}
            Yes
          </p>
          <p>
            <Field
              className="form-check-input"
              name="avalancheKit"
              component="input"
              type="radio"
              value="no"
            />{" "}
            No
          </p>
        </div>
        <div className="form-group">
          <p>List any emergency supplies you will have packed.</p>
          <Field
            name="emergencySupplies"
            type="text"
            component="textarea"
            placeholder="Knife, multi-tool, first aid kit, whistle, matches, lighter, tinger, toilet paper, sun protection, head lamp"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>List extra equipment you will be bringing.</p>
          <Field
            className="form-control"
            name="extraEquip"
            type="text"
            component="textarea"
            placeholder="Rope, tent, climbing gear, microspikes, snowshoes, trekking poles."
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn btn-success float-right">
          Trail Information
        </button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "hike-form",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(HikerInfoForm);

// function HikerInfoForm(props) {
//   if (props.currentStep !== 1) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <h4>Hiker Information</h4>
//       <div className="form-group">
//         {/* <p>Name:</p>
//         <input
//           type="text"
//           name="hikerName"
//           placeholder="Hiker Name"
//           className="form-control"
//           value={props.hikerName}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Date of Hike:</p>
//         <input
//           type="date"
//           name="hikeDate"
//           className="form-control"
//           value={props.hikeDate}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       {/* <div className="form-group">
//         <p>Will you have any form of identification on you?</p>
//         <input
//           type="text"
//           name="hikerId"
//           placeholder="Yes, I will have my state ID in my backpack."
//           className="form-control"
//           value={props.hikerId}
//           onChange={props.handleChange}
//         /> */}
//       {/* </div>
//       <div className="form-group">
//         <p>Clothing Worn:</p>
//         <textarea
//           name="clothingWorn"
//           placeholder="Describe the clothing you will be wearing on the hike."
//           className="form-control"
//           value={props.clothingWorn}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       {/* <div className="form-check">
//         <p>Are you bringing your cell phone?</p>
//         <input
//           type="radio"
//           name="cellPhone"
//           value="yes"
//           selectedvalue={props.cellPhone}
//           className="form-check-input"
//           onChange={props.handleChange}
//         />
//         <label className="form-check-label" htmlFor="cellPhoneYes">
//           Yes
//         </label>
//       </div>
//       <div className="form-check">
//         <input
//           type="radio"
//           name="cellPhone"
//           value="no"
//           selectedvalue={props.cellPhone}
//           onChange={props.handleChange}
//           className="form-check-input"
//         /> */}
//         {/* <label className="form-check-label" htmlFor="cellPhoneNo">
//           No
//         </label>
//       </div> */}
//       {/* <div className="form-group">
//         <p>Cell Phone Battery Percentage:</p>
//         <input
//           type="text"
//           name="batteryLife"
//           placeholder="100%"
//           className="form-control"
//           value={props.batteryLife}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       {/* <div className="form-group">
//         <p>Cell Phone Signal:</p>
//         <input
//           type="text"
//           name="cellSignal"
//           placeholder="Cell signal on trail if known"
//           className="form-control"
//           value={props.cellSignal}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       {/* <div className="form-group">
//         <p>Mood Check: How are you feeling about this hike?</p>
//         <input
//           type="text"
//           name="mood"
//           placeholder="Excited to hike! Need nature therapy."
//           className="form-control"
//           value={props.mood}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       {/* <div className="form-group">
//         <p>
//           Health Check: Any health conditions or concerns you may be currently
//           exhibiting?
//         </p>
//         <textarea
//           name="health"
//           placeholder="Describe any health conditions or concerns. Example: Asthma, shortness of breath, cough."
//           className="form-control"
//           value={props.health}
//           onChange={props.handleChange}
//         />
//       </div> */}
//       <div className="form-group">
//         <h4>Itinerary</h4>
//         <p>What are your plans for the hike?</p>
//         <textarea
//           name="itinerary"
//           placeholder="Example: I plan to stay on the trail and hike to the summit. I plan to swim at the lake. I plan to do some rock climbing."
//           className="form-control"
//           value={props.itinerary}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <h4>Transportation</h4>
//         <div className="form-group">
//           <p>Mode of Transportation</p>
//           <input
//             type="text"
//             name="transportationMode"
//             placeholder="Car, Uber, Bus, Walk"
//             className="form-control"
//             value={props.transportationMode}
//             onChange={props.handleChange}
//           />
//         </div>
//         <p>Vehicle Description:</p>
//         <textarea
//           name="vehicle"
//           placeholder="Vehicle color, name, make, and model."
//           className="form-control"
//           value={props.vehicle}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Amount of gas: </p>
//         <input
//           type="text"
//           name="gas"
//           placeholder="Full tank"
//           className="form-control"
//           value={props.gas}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Where will you be parking your vehicle?</p>
//         <textarea
//           name="parking"
//           placeholder="Example: At the trail head. Side of the road at the bottom of the trail head."
//           className="form-control"
//           value={props.parking}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <h4>Supplies</h4>
//         <p>Water:</p>
//         <input
//           type="text"
//           name="water"
//           placeholder="Example: 32 oz bottle, camelback"
//           className="form-control"
//           value={props.water}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Food:</p>
//         <input
//           type="text"
//           name="food"
//           placeholder="Snacks, lunch, beer"
//           className="form-control"
//           value={props.food}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Navigation:</p>
//         <textarea
//           name="navigation"
//           placeholder="List any navigation tools you are bringing. Example: compass, map, GPS"
//           className="form-control"
//           value={props.navigation}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Is anyone joining you on this hike?</p>
//         <textarea
//           name="buddy"
//           placeholder="Please list and describe any buddies joining you. Example: Yes, I am bringing my dog. He is a Black Lab. Yes, a friend is joining me. Their name is John Muir. No, I am solo hiking."
//           className="form-control"
//           value={props.buddy}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Clothing packed:</p>
//         <textarea
//           name="packedClothing"
//           placeholder="List any clothing packed. Example: Extra pair of socks/rain coat"
//           className="form-control"
//           value={props.packedClothing}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-check">
//         <p>Are you packing an avalanche kit?</p>
//         <input
//           type="radio"
//           name="avalancheKit"
//           className="form-check-input"
//           value="yes"
//           selectedvalue={props.avalancheKit}
//           onChange={props.handleChange}
//         />
//         <label className="form-check-label" htmlFor="avalancheYes">
//           Yes
//         </label>
//       </div>
//       <div className="form-check">
//         <input
//           type="radio"
//           name="avalancheKit"
//           className="form-check-input"
//           value="no"
//           selectedvalue={props.avalancheKit}
//           onChange={props.handleChange}
//         />
//         <label className="form-check-label" htmlFor="avalancheNo">
//           No
//         </label>
//       </div>
//       <div className="form-group">
//         <p>List any emergency supplies you will have packed.</p>
//         <textarea
//           name="emergencySupplies"
//           placeholder="Knife, multi-tool, first aid kit, whistle, matches, lighter, tinger, toilet paper, sun protection, head lamp"
//           className="form-control"
//           value={props.emergencySupplies}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>List any extra equipment you will be bringing.</p>
//         <textarea
//           name="extraEquip"
//           placeholder="Rope, tent, climbing gear, microspikes, snowshoes, trekking poles."
//           className="form-control"
//           value={props.extraEquip}
//           onChange={props.handleChange}
//         />
//       </div>
//     </React.Fragment>
//   );
// }
// HikerInfoForm.propTypes = {
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
// };
// export default HikerInfoForm;
