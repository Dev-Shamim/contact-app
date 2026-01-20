import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Fetch Initial Data
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('https://fakedbjson.onrender.com/');
      setContacts(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };

  // Add Contact
  const addContact = async (contact) => {
    const res = await axios.post('https://fakedbjson.onrender.com/', contact);
    setContacts([...contacts, res.data]);
  };

  // Delete Contact
  const deleteContact = async (id) => {
    await axios.delete(`https://fakedbjson.onrender.com/${id}`);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Update Contact
  const updateContact = async (id, updatedContact) => {
    const res = await axios.put(`https://fakedbjson.onrender.com/${id}`, updatedContact);
    setContacts(
      contacts.map((contact) => (contact.id === id ? res.data : contact))
    );
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        loading,
        addContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};