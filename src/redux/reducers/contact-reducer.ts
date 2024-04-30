import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contact from '@model/contact';

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

export const selectContacts = ({ contacts }: { contacts: ContactState }) => {
  return contacts.contacts;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action: PayloadAction<Contact[]>) {
      state.contacts = action.payload;
    },
    toggleFavourite(state, action: PayloadAction<string>) {
      const contact = state.contacts.find((c) => c.id === action.payload);
      if (contact) {
        contact.isFavorite = !contact.isFavorite;
      }
    },
  },
});

export const { setContacts, toggleFavourite } = contactSlice.actions;

export default contactSlice.reducer;
