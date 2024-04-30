interface Contact {
  name: string;
  id: string;
  companyName: string | null; // Assume companyName can be null
  isFavorite: boolean;
  smallImageURL: string;
  largeImageURL: string;
  emailAddress: string;
  birthdate: string;
  phone: { [key: string]: string };
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
}

export default Contact;
