let contactID = 1;

class Contact {
  id = contactID++;
  firstName = "";
  lastName = "";
  email = "";
  online = false;

  constructor(firstName, lastName, email, online) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.online = online;
  }
}

export default Contact;
