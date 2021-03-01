import React from "react";
import PropTypes from "prop-types";

function HikerInfoForm(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <React.Fragment>
      <h4>Hiker Information</h4>
      <div className="form-group">
        <p>Name:</p>
        <input
          type="text"
          name="hikerName"
          placeholder="Hiker Name"
          className="form-control"
          value={props.hikerName}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Date of Hike:</p>
        <input
          type="date"
          name="hikeDate"
          className="form-control"
          value={props.hikeDate}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Will you have any form of identification on you?</p>
        <input
          type="text"
          name="hikerId"
          placeholder="Yes, I will have my state ID in my backpack."
          className="form-control"
          value={props.hikerId}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Clothing Worn:</p>
        <textarea
          name="clothingWorn"
          placeholder="Describe the clothing you will be wearing on the hike."
          className="form-control"
          value={props.clothingWorn}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-check">
        <p>Are you bringing your cell phone?</p>
        <input
          type="radio"
          name="cellPhone"
          value={props.yes}
          className="form-check-input"
          onChange={props.handleChange}
        />
        <label className="form-check-label" htmlFor="cellPhoneYes">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="cellPhone"
          value={props.no}
          onChange={props.handleChange}
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="cellPhoneNo">
          No
        </label>
      </div>
      <div className="form-group">
        <p>Cell Phone Battery Percentage:</p>
        <input
          type="text"
          name="batteryLife"
          placeholder="100%"
          className="form-control"
          value={props.batteryLife}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Cell Phone Signal:</p>
        <input
          type="text"
          name="cellSignal"
          placeholder="Cell signal on trail if known"
          className="form-control"
          value={props.cellSignal}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Mood Check: How are you feeling about this hike?</p>
        <input
          type="text"
          name="mood"
          placeholder="Excited to hike! Need nature therapy."
          className="form-control"
          value={props.mood}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>
          Health Check: Any health conditions or concerns you may be currently
          exhibiting?
        </p>
        <textarea
          name="health"
          placeholder="Describe any health conditions or concerns. Example: Asthma, shortness of breath, cough."
          className="form-control"
          value={props.health}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <h4>Itinerary</h4>
        <p>What are your plans for the hike?</p>
        <textarea
          name="itinerary"
          placeholder="Example: I plan to stay on the trail and hike to the summit. I plan to swim at the lake. I plan to do some rock climbing."
          className="form-control"
          value={props.itinerary}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <h4>Transportation</h4>
        <div className="form-group">
          <p>Mode of Transportation</p>
          <input
            type="text"
            name="transportationMode"
            placeholder="Car, Uber, Bus, Walk"
            className="form-control"
            value={props.transportationMode}
            onChange={props.handleChange}
          />
        </div>
        <p>Vehicle Description:</p>
        <textarea
          name="vehicle"
          placeholder="Vehicle color, name, make, and model."
          className="form-control"
          value={props.vehicle}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Amount of gas: </p>
        <input
          type="text"
          name="gas"
          placeholder="Full tank"
          className="form-control"
          value={props.gas}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Where will you be parking your vehicle?</p>
        <textarea
          name="parking"
          placeholder="Example: At the trail head. Side of the road at the bottom of the trail head."
          className="form-control"
          value={props.parking}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <h4>Supplies</h4>
        <p>Water:</p>
        <input
          type="text"
          name="water"
          placeholder="Example: 32 oz bottle, camelback"
          className="form-control"
          value={props.water}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Food:</p>
        <input
          type="text"
          name="food"
          placeholder="Snacks, lunch, beer"
          className="form-control"
          value={props.food}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Navigation:</p>
        <textarea
          name="navigation"
          placeholder="List any navigation tools you are bringing. Example: compass, map, GPS"
          className="form-control"
          value={props.navigation}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Is anyone joining you on this hike?</p>
        <textarea
          name="buddy"
          placeholder="Please list and describe any buddies joining you. Example: Yes, I am bringing my dog. He is a Black Lab. Yes, a friend is joining me. Their name is John Muir. No, I am solo hiking."
          className="form-control"
          value={props.buddy}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Clothing packed:</p>
        <textarea
          name="packedClothing"
          placeholder="List any clothing packed. Example: Extra pair of socks/rain coat"
          className="form-control"
          value={props.packedClothing}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-check">
        <p>Are you packing an avalanche kit?</p>
        <input
          type="radio"
          name="avalancheKit"
          className="form-check-input"
          value={props.yes}
          onChange={props.handleChange}
        />
        <label className="form-check-label" htmlFor="avalancheYes">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="avalancheKit"
          className="form-check-input"
          value={props.no}
          onChange={props.handleChange}
        />
        <label className="form-check-label" htmlFor="avalancheNo">
          No
        </label>
      </div>
      <div className="form-group">
        <p>List any emergency supplies you will have packed.</p>
        <textarea
          name="emergencySupplies"
          placeholder="Knife, multi-tool, first aid kit, whistle, matches, lighter, tinger, toilet paper, sun protection, head lamp"
          className="form-control"
          value={props.emergencySupplies}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>List any extra equipment you will be bringing.</p>
        <textarea
          name="extraEquip"
          placeholder="Rope, tent, climbing gear, microspikes, snowshoes, trekking poles."
          className="form-control"
          value={props.extraEquip}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
}
HikerInfoForm.propTypes = {
  hikerName: PropTypes.string,
  hikeDate: PropTypes.string,
  hikerId: PropTypes.string,
  clothingWorn: PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  batteryLife: PropTypes.string,
  cellSignal: PropTypes.string,
  mood: PropTypes.string,
  health: PropTypes.string,
  itinerary: PropTypes.string,
  transportationMode: PropTypes.string,
  vehicle: PropTypes.string,
  gas: PropTypes.string,
  parking: PropTypes.string,
  water: PropTypes.string,
  food: PropTypes.string,
  navigation: PropTypes.string,
  buddy: PropTypes.string,
  packedClothing: PropTypes.string,
  emergencySupplies: PropTypes.string,
  extraEquip: PropTypes.string,
};
export default HikerInfoForm;
