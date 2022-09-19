import React, { useState } from "react";
import ContactComponent from "../pures/ContactComponent";
import contacts from "../../data";

const ContactList = () => {
  const [contactList, setContactLis] = useState(contacts);

  const changeOnline = (id) => {
    const newList = contactList.map((contact) => {
      if (contact.id === id) {
        contact.online = !contact.online;
      }
      return contact;
    });

    setContactLis(newList);
  };

  return (
    <div>
      {contactList.map((contact) => (
        <ContactComponent
          key={contact.id}
          contact={contact}
          changeOnline={changeOnline}
        />
      ))}
    </div>
  );
};

export default ContactList;
