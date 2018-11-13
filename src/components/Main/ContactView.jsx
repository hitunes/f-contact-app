import "./ContactView.css";
import React from "react";
import MainContact from "./MainContact";
import StarredContact from "./StarredContact";

const ContactView = params => {
  return (
    <div className="contact-view" style={{ width: "75%" }}>
      <StarredContact />
      <MainContact />
    </div>
  );
};
export default ContactView;
