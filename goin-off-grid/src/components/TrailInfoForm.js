import React from "react";
import { Field, reduxForm } from "redux-form";

const TrailInfoForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Trail Information</h1>
      <div className="form-group">
        <p>Trail Name</p>
        <Field
          name="trailName"
          type="text"
          component="input"
          placeholder="Hiking Trail Name (e.g., Mailbox Peak)"
          className="form-control"
        />
      </div>
      <div className="form-check">
        <p>Have you done this hike before?</p>
        <p>
          <Field
            name="newTrail"
            component="input"
            type="radio"
            value="yes"
            className="form-check-input"
          />{" "}
          Yes
        </p>
        <p>
          <Field
            name="newTrail"
            component="input"
            type="radio"
            value="no"
            className="form-check-input"
          />{" "}
          No
        </p>
      </div>
      <div className="form-group">
        <p>Trail Location</p>
        <Field
          name="trailLocation"
          type="text"
          component="input"
          placeholder="Snoqualmie Region -- North Bend Area"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Trail Length</p>
        <Field
          name="trailLength"
          component="input"
          placeholder="9.4 miles, roundtrip"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Elevation</p>
        <Field
          name="trailElevation"
          component="input"
          placeholder="Gain: 4000 ft. Highest Point: 4822 ft."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Difficulty</p>
        <Field
          name="trailDifficulty"
          component="input"
          placeholder="Hard"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Pass/Permit/Entrance Fee</p>
        <Field
          name="trailPass"
          type="text"
          component="input"
          placeholder="Discover Pass"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Estimated Duration of Hike</p>
        <Field
          name="duration"
          type="text"
          component="input"
          placeholder="3-5 hours"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Current Trail Conditions</p>
        <Field
          name="trailConditions"
          type="text"
          component="textarea"
          placeholder="Snow, unmaintained trail, muddy."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Weather Conditions</p>
        <Field
          name="weatherConditions"
          type="text"
          component="textarea"
          placeholder="Sunny, chance of rain, snowing, windy."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Trail Advisories</p>
        <Field
          name="trailAdvisories"
          type="text"
          component="textarea"
          placeholder="Wildlife: bears, cougars. Flash Flood Advisory. Wind Advisory. Avalanche Advisory. Ice/Snow"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Trail Maintenance</p>
        <Field
          name="trailMaintenance"
          type="text"
          component="textarea"
          placeholder="Trail is well maintained by WTA. Trail is well marked. Trail is not maintained/marked, it is off grid."
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Foot Traffic</p>
        <Field
          name="footTraffic"
          type="text"
          component="input"
          placeholder="Heavy. Popular Trail."
          className="form-control"
        />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={previousPage}
        >
          Previous
        </button>
        <button type="submit" className="btn btn-warning float-right">
          Emergency Contact Information
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "hike-form",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(TrailInfoForm);
