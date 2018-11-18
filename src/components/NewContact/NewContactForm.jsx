import React from "react";

const NewContactForm = props => {
  return (
    <div className="modal-body__input">
      <form onSubmit={props.handleNewContactSubmit}>
        <div className="modal-body__input--name">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            defaultValue=""
            onChange={props.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            defaultValue=""
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--job">
          <input
            type="text"
            name="company"
            placeholder="Company"
            defaultValue=""
            onChange={props.handleInputChange}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            defaultValue=""
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            defaultValue=""
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
            defaultValue=""
            onChange={props.handleInputChange}
          />
        </div>
        <div className="modal-body__input--notes">
          <input
            type="textarea"
            name="notes"
            placeholder="Notes"
            defaultValue=""
            onChange={props.handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};
export default NewContactForm;
