const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");
// TODO: задокументувати кожну функцію
console.log(__dirname);

const listContacts = async (data) => {
  const allContacts = await fs.readFile(contactsPath);
  return JSON.parse(allContacts);
};

async function getContactById(contactId) {
  const allContacts = await listContacts();
  //   console.log(allContacts);
  const contactById = allContacts.find((contact) => contact.id === contactId);
  return contactById;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
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

  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
