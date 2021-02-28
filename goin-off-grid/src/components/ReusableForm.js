import React from "react";
import Proptypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <h4>Hiker Information</h4>
        <div className="form-group">
          <p>Name:</p>
          <input
            type="text"
            name="name"
            placeholder="Hiker Name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Date of Hike:</p>
          <input type="date" name="hikeDate" className="form-control" />
        </div>
        <div className="form-group">
          <p>Will you have any form of identification on you?</p>
          <input
            type="text"
            name="identification"
            placeholder="Yes, I will have my state ID in my backpack."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Clothing Worn:</p>
          <textarea
            name="clothingWorn"
            placeholder="Describe the clothing you will be wearing on the hike."
            className="form-control"
          />
        </div>
        <div className="form-check">
          <p>Are you bringing your cell phone?</p>
          <input
            type="radio"
            name="cellPhone"
            value="yes"
            className="form-check-input"
          />
          <label className="form-check-label" for="cellPhoneYes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="cellPhone"
            value="no"
            className="form-check-input"
          />
          <label className="form-check-label" for="cellPhoneNo">
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
          />
        </div>
        <div className="form-group">
          <p>Cell Phone Signal:</p>
          <input
            type="text"
            name="cellSignal"
            placeholder="Cell signal on trail if known"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Mood Check: How are you feeling about this hike?</p>
          <input
            type="text"
            name="mood"
            placeholder="Excited to hike! Need nature therapy."
            className="form-control"
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
          />
        </div>
        <div className="form-group">
          <h4>Itinerary</h4>
          <p>What are your plans for the hike?</p>
          <textarea
            name="itinerary"
            placeholder="Example: I plan to stay on the trail and hike to the summit. I plan to swim at the lake. I plan to do some rock climbing."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <h4>Transportation</h4>
          <div className="form-group">
            <p>Mode of Transportation</p>
            <input
              type="text"
              name="transporationMode"
              placeholder="Car, Uber, Bus, Walk"
              className="form-control"
            />
          </div>
          <p>Vehicle Description:</p>
          <textarea
            name="vehicle"
            placeholder="Vehicle color, name, make, and model."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Amount of gas: </p>
          <input
            type="text"
            name="gas"
            placeholder="Full tank"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Where will you be parking your vehicle?</p>
          <textarea
            name="parking"
            placeholder="Example: At the trail head. Side of the road at the bottom of the trail head."
            className="form-control"
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
          />
        </div>
        <div className="form-group">
          <p>Food:</p>
          <input
            type="text"
            name="food"
            placeholder="Snacks, lunch, beer"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Navigation:</p>
          <textarea
            name="name"
            placeholder="List any navigation tools you are bringing. Example: compass, map, GPS"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Is anyone joining you on this hike?</p>
          <textarea
            name="buddy"
            placeholder="Please list and describe any buddies joining you. Example: Yes, I am bringing my dog. He is a Black Lab. Yes, a friend is joining me. Their name is John Muir. No, I am solo hiking."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Clothing packed:</p>
          <textarea
            name="packedClothing"
            placeholder="List any clothing packed. Example: Extra pair of socks/rain coat"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <p>Are you packing an avalanche kit?</p>
          <input
            type="radio"
            name="avalancheKit"
            value="yes"
            className="form-check-input"
          />
          <label className="form-check-label" for="avalancheYes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="avalancheKit"
            value="no"
            className="form-check-input"
          />
          <label className="form-check-label" for="avalancheNo">
            No
          </label>
        </div>
        <div className="form-group">
          <p>List any emergency supplies you will have packed.</p>
          <textarea
            name="emergencySupplies"
            placeholder="Knife, multi-tool, first aid kit, whistle, matches, lighter, tinger, toilet paper, sun protection, head lamp"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>List any extra equipment you will be bringing.</p>
          <textarea
            name="extraEqupment"
            placeholder="Rope, tent, climbing gear, microspikes, snowshoes, trekking poles."
            className="form-control"
          />
        </div>
        <h4>Hike Information</h4>
        <div className="form-group">
          <p>Trail Name:</p>
          <input
            type="text"
            name="trailName"
            placeholder="Example: Mailbox Peak"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <p>Have you done this hike before?</p>
          <input
            type="radio"
            name="newTrail"
            value="yes"
            className="form-check-input"
          />
          <label className="form-check-label" for="hikedBeforeYes">
            Yes
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            name="newTrail"
            value="no"
            className="form-check-input"
          />
          <label className="form-check-label" for="hikedBeforeNo">
            No
          </label>
        </div>
        <div className="form-group">
          <p>Trail Location:</p>
          <input
            type="text"
            name="trailLocation"
            placeholder="Example: Snoqualmie Region -- North Bend Area"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Trail Length:</p>
          <input
            type="text"
            name="trailLength"
            placeholder="Example: 9.4 miles, roundtrip"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Trail Elevation:</p>
          <input
            type="text"
            name="trailElevation"
            placeholder="Gain: 4000 ft. Highest Point: 4822 ft."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Trail Difficulty:</p>
          <input
            type="text"
            name="trailDifficulty"
            placeholder="Hard"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Parking Pass/Entry Fee:</p>
          <input
            type="text"
            name="trailPass"
            placeholder="Example: Discover Pass"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Estimated Duration of Hike:</p>
          <input
            type="text"
            name="duration"
            placeholder="3-5 hours"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Current Trail Conditions:</p>
          <textarea
            name="trailConditions"
            placeholder="Snow, unmaintained trail, muddy."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Current Weather Conditions:</p>
          <textarea
            name="weatherConditions"
            placeholder="Sunny, chance of rain, snowing, windy,"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Trail Advisories:</p>
          <textarea
            name="trailAdvisories"
            placeholder="Wildlife: bears, cougars. Flash Flood Advisory. Wind Advisory. Avalanche Advisory. Ice/Snow"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Trail Maintenance:</p>
          <textarea
            name="trailMaintenance"
            placeholder="Example: Trail is well maintained by WTA. Trail is well marked. Trail is not maintained/marked, it is off grid."
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Foot Traffic:</p>
          <input
            type="text"
            name="footTraffic"
            placeholder="Heavy"
            className="form-control"
          />
        </div>
        <h4>Emergency Contact</h4>
        <p>
          Please provide a person you trust that you wish to be informed about
          your adventure.
        </p>
        <div className="form-group">
          <p>Name:</p>
          <input type="text" name="contactName" className="form-control" />
        </div>
        <div className="form-group">
          <p>Relationship:</p>
          <input
            type="text"
            name="contactRelationship"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Contact Email: </p>
          <input type="email" name="contactEmail" className="form-control" />
        </div>
        <div className="form-group">
          <p>Contact Phone Number:</p>
          <input type="tel" name="contactTel" className="form-control" />
        </div>
        <button className="btn btn-success" type="submit">
          {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  );
}
ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
