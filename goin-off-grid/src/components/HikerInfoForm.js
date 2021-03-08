import React from "react";
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
          exhibiting?
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
