import React from "react";

const NewContactForm = props => {
  return (
    <div className="modal-body__input">
      <form action="">
        <div className="modal-body__input--name">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={props.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--job">
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={props.handleInputChange}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--phone">
          <select id="country">
            <option value="nigeria">NGR</option>
            <option value="ghana">Ghana</option>
          </select>
          <input
            type="tel"
            name="phoneNo"
            placeholder="Phone"
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--notes">
          <input
            type="textarea"
            name="notes"
            placeholder="Notes"
            onChange={props.handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};
export default NewContactForm;
