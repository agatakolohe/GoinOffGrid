import React from "react";
import PropTypes from "prop-types";

function TrailInfoForm(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <React.Fragment>
      <h4>Hike Information</h4>
      <div className="form-group">
        <p>Trail Name:</p>
        <input
          type="text"
          name="trailName"
          placeholder="Example: Mailbox Peak"
          className="form-control"
          value={props.trailName}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-check">
        <p>Have you done this hike before?</p>
        <input
          type="radio"
          name="newTrail"
          className="form-check-input"
          value={props.yes}
          onChange={props.handleChange}
        />
        <label className="form-check-label" htmlFor="hikedBeforeYes">
          Yes
        </label>
      </div>
      <div className="form-check">
        <input
          type="radio"
          name="newTrail"
          value={props.no}
          onChange={props.handleChange}
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="hikedBeforeNo">
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
          value={props.trailLocation}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Trail Length:</p>
        <input
          type="text"
          name="trailLength"
          placeholder="Example: 9.4 miles, roundtrip"
          className="form-control"
          value={props.trailLength}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Trail Elevation:</p>
        <input
          type="text"
          name="trailElevation"
          placeholder="Gain: 4000 ft. Highest Point: 4822 ft."
          className="form-control"
          value={props.trailElevation}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Trail Difficulty:</p>
        <input
          type="text"
          name="trailDifficulty"
          placeholder="Hard"
          className="form-control"
          value={props.trailDifficulty}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Parking Pass/Entry Fee:</p>
        <input
          type="text"
          name="trailPass"
          placeholder="Example: Discover Pass"
          className="form-control"
          value={props.trailPass}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Estimated Duration of Hike:</p>
        <input
          type="text"
          name="duration"
          placeholder="3-5 hours"
          className="form-control"
          value={props.duration}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Current Trail Conditions:</p>
        <textarea
          name="trailConditions"
          placeholder="Snow, unmaintained trail, muddy."
          className="form-control"
          value={props.trailConditions}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Current Weather Conditions:</p>
        <textarea
          name="weatherConditions"
          placeholder="Sunny, chance of rain, snowing, windy,"
          className="form-control"
          value={props.weatherConditions}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Trail Advisories:</p>
        <textarea
          name="trailAdvisories"
          placeholder="Wildlife: bears, cougars. Flash Flood Advisory. Wind Advisory. Avalanche Advisory. Ice/Snow"
          className="form-control"
          value={props.trailAdvisories}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Trail Maintenance:</p>
        <textarea
          name="trailMaintenance"
          placeholder="Example: Trail is well maintained by WTA. Trail is well marked. Trail is not maintained/marked, it is off grid."
          className="form-control"
          value={props.trailMaintenance}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Foot Traffic:</p>
        <input
          type="text"
          name="footTraffic"
          placeholder="Heavy"
          className="form-control"
          value={props.footTraffic}
          onChange={props.handleChange}
        />
      </div>
    </React.Fragment>
  );
}
TrailInfoForm.propTypes = {
  trailName: PropTypes.string,
  yes: PropTypes.string,
  no: PropTypes.string,
  trailLocation: PropTypes.string,
  trailLength: PropTypes.string,
  trailElevation: PropTypes.string,
  trailDifficulty: PropTypes.string,
  trailPass: PropTypes.string,
  duration: PropTypes.string,
  trailConditions: PropTypes.string,
  weatherConditions: PropTypes.string,
  trailAdvisories: PropTypes.string,
  trailMaintenance: PropTypes.string,
  footTraffic: PropTypes.string,
};
export default TrailInfoForm;
