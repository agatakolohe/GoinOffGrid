import React from "react";
import { Field, reduxForm } from "redux-form";

const EmergencyContactForm = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Emergency Contact Information</h1>
      <p>
        Please provide a person you trust that you wish to be informed about
        your adventure.
      </p>
      <div className="form-group">
        <p>Contact Name</p>
        <Field
          name="contactName"
          type="text"
          component="input"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Relationship</p>
        <Field
          name="contactRelationship"
          type="text"
          component="input"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Contact Email</p>
        <Field
          name="contactEmail"
          type="email"
          component="input"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <p>Contact Phone Number</p>
        <Field
          name="contactTel"
          type="number"
          component="input"
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
        <button type="submit" className="btn btn-info float-right">
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "hike-form",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EmergencyContactForm);
