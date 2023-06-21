// const fs = require("fs/promises");
// const path = require("path");

// const contactsPath = path.json(__dirname, "contacts.json");

const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);

      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// console.log(invokeAction({ action: "list" }));
// console.log(invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" }));
// console.log(invokeAction({ action: "remove", id: "qdggE76Jtbfd9eWJHrssH" }));
console.log(
  invokeAction({
    action: "add",
    name: "Roman",
    email: "qqqqq@qqqq.ua",
    phone: "111-222-33-44",
  })
);
