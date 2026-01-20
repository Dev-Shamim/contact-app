import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const API_URL = 'https://fakedbjson.onrender.com/users';

  // Fetch Initial Data
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(API_URL);
      // The API returns an object { contacts: [...] }
      // We need to extract the contacts array safely
      if (res.data && Array.isArray(res.data.contacts)) {
        setContacts(res.data.contacts);
      } else {
        setContacts([]);
      }
      setLoading(false);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      setLoading(false);
    }
  };

  // Add Contact
  const addContact = async (contact) => {
    try {
      // 1. Fetch current data to ensure we have the latest state
      const res = await axios.get(API_URL);
      const currentData = res.data;
      const currentContacts = currentData.contacts || [];

      // 2. Create new contact with ID
      const newId = Math.floor(Math.random() * 900 + 10).toString();
      const newContact = { ...contact, id: newId };
      
      // 3. Update the contacts array
      const updatedContacts = [...currentContacts, newContact];
      const updatedData = { ...currentData, contacts: updatedContacts };

      // 4. PUT the entire object back to the server
      await axios.put(API_URL, updatedData);
      
      // 5. Update local state
      setContacts(updatedContacts);
    } catch (err) {
      console.error("Error adding contact:", err);
    }
  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      const res = await axios.get(API_URL);
      const currentData = res.data;
      const currentContacts = currentData.contacts || [];

      const updatedContacts = currentContacts.filter((contact) => contact.id !== id);
      const updatedData = { ...currentData, contacts: updatedContacts };

      await axios.put(API_URL, updatedData);
      setContacts(updatedContacts);
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  // Update Contact
  const updateContact = async (id, updatedContact) => {
    try {
      const res = await axios.get(API_URL);
      const currentData = res.data;
      const currentContacts = currentData.contacts || [];

      const updatedContacts = currentContacts.map((contact) => 
        contact.id === id ? { ...updatedContact, id } : contact
      );
      const updatedData = { ...currentData, contacts: updatedContacts };

      await axios.put(API_URL, updatedData);
      setContacts(updatedContacts);
    } catch (err) {
        console.error("Error updating contact:", err);
    }
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