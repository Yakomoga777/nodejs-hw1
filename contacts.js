const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

console.log(__dirname);

const listContacts = async (data) => {
  const allContacts = await fs.readFile(contactsPath);
  return JSON.parse(allContacts);
};

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const contactById = allContacts.find((contact) => contact.id === contactId);
  if (!contactById) {
    return null;
  }
  return contactById || null;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const contactById = allContacts.find((contact) => contact.id === contactId);
  const index = allContacts.indexOf(contactById);

  if (index === -1) {
    return null;
  }

  const removedCntact = allContacts.splice(index, 1);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return removedCntact || null;
}

async function addContact({ name, email, phone }) {
  const allContacts = await listContacts();
  const addContact = allContacts.push({ name, email, phone, id: nanoid() });
  console.log(allContacts);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
  return addContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
