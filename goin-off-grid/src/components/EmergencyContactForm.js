import React from "react";
// import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import renderField from "./RenderField";

const EmergencyContactForm = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h4>Emergency Contact Information</h4>
        <p>
          Please provide a person you trust that you wish to be informed about
          your adventure.
        </p>
      </div>
      <Field
        name="contactName"
        type="text"
        component={renderField}
        label="Contact Name"
      />
      <Field
        name="contactRelationship"
        type="text"
        component={renderField}
        label="Relationship"
      />
      <Field
        name="contactEmail"
        type="email"
        component={renderField}
        label="Contact Email"
      />
      <Field
        name="contactTel"
        type="number"
        component={renderField}
        label="Contact Phone number"
      />
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "hike-form",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(EmergencyContactForm);

// function EmergencyContactForm(props) {
//   if (props.currentStep !== 3) {
//     return null;
//   }
//   return (
//     <React.Fragment>
//       <h4>Emergency Contact</h4>
//       <p>
//         Please provide a person you trust that you wish to be informed about
//         your adventure.
//       </p>
//       <div className="form-group">
//         <p>Name:</p>
//         <input
//           type="text"
//           name="contactName"
//           className="form-control"
//           value={props.contactName}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Relationship:</p>
//         <input
//           type="text"
//           name="contactRelationship"
//           className="form-control"
//           value={props.contactRelationship}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Contact Email: </p>
//         <input
//           type="email"
//           name="contactEmail"
//           className="form-control"
//           value={props.contactEmail}
//           onChange={props.handleChange}
//         />
//       </div>
//       <div className="form-group">
//         <p>Contact Phone Number:</p>
//         <input
//           type="tel"
//           name="contactTel"
//           className="form-control"
//           value={props.contactTel}
//           onChange={props.handleChange}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Submit</button>
//     </React.Fragment>
//   );
// }
// EmergencyContactForm.propTypes = {
//   contactName: PropTypes.string,
//   contactRelationship: PropTypes.string,
//   contactEmail: PropTypes.string,
//   contactTel: PropTypes.string,
//   id: PropTypes.string,
// };
// export default EmergencyContactForm;
