import React from "react";
// import DateTimePicker from "react-widgets/lib/DateTimePicker";
// import Moment from "moment";
// import momentLocaliser from "react-widgets-moment";
// import "react-widgets/dist/css/react-widgets.css";

// momentLocaliser(Moment);

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>error</span>}
    </div>
  </div>
);

export default renderField;
