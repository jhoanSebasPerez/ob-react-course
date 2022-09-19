import React from "react";
import PropTypes from "prop-types";
import Contact from "../../models/Contact.class";

const ContactComponent = ({ contact, changeOnline }) => {
  return (
    <div>
      <p>{contact.firstName}</p>
      <p>{contact.lastName}</p>
      <p>{contact.email}</p>
      <p>{contact.online ? "ONLINE" : "OFFLINE"}</p>
      <button onClick={() => changeOnline(contact.id)}>Change state</button>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
