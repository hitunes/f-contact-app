import React from "react";

const EditContactForm = props => {
  return (
    <div className="modal-body__input">
      <form key={props.contact.id}>
        <div className="modal-body__input--name">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={props.handleEditInputChange}
            defaultValue={"" || props.contact.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={props.handleEditInputChange}
            defaultValue={"" || props.contact.lastName}
          />
        </div>
        <div className="modal-body__input--job">
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={props.handleEditInputChange}
            defaultValue={props.contact.company}
          />
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            onChange={props.handleEditInputChange}
            defaultValue={props.contact.jobTitle}
          />
        </div>
        <div className="modal-body__input--email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={props.handleEditInputChange}
            defaultValue={props.contact.email}
          />
        </div>
        <div className="modal-body__input--phone">
          <input
            type="tel"
            name="phoneNo"
            placeholder="Phone"
            onChange={props.handleEditInputChange}
            defaultValue={props.contact.phoneNo}
          />
        </div>
        <div className="modal-body__input--phone">
          <input
            type="textarea"
            name="notes"
            placeholder="Notes"
            onChange={props.handleEditInputChange}
            defaultValue={props.contact.notes}
          />
        </div>
      </form>
    </div>
  );
};
export default EditContactForm;
