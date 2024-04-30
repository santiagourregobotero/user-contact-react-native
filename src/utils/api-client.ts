import Url from 'config/urls';
import Contact from 'model/contact';

const fetchContacts = async (): Promise<Contact[]> => {
  const response = await fetch(Url.CONTACTS);
  return await response.json();
};

export default {
  fetchContacts,
};
