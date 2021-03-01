import React from "react";
import PropTypes from "prop-types";

function EmergencyContactForm(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <React.Fragment>
      <h4>Emergency Contact</h4>
      <p>
        Please provide a person you trust that you wish to be informed about
        your adventure.
      </p>
      <div className="form-group">
        <p>Name:</p>
        <input
          type="text"
          name="contactName"
          className="form-control"
          value={props.contactName}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Relationship:</p>
        <input
          type="text"
          name="contactRelationship"
          className="form-control"
          value={props.contactRelationship}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Contact Email: </p>
        <input
          type="email"
          name="contactEmail"
          className="form-control"
          value={props.contactEmail}
          onChange={props.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Contact Phone Number:</p>
        <input
          type="tel"
          name="contactTel"
          className="form-control"
          value={props.contactTel}
          onChange={props.handleChange}
        />
      </div>
      <button className="btn btn-success btn-block">Submit</button>
    </React.Fragment>
  );
}
EmergencyContactForm.propTypes = {
  contactName: PropTypes.string,
  contactRelationship: PropTypes.string,
  contactEmail: PropTypes.string,
  contactTel: PropTypes.string,
  id: PropTypes.string,
};
export default EmergencyContactForm;
