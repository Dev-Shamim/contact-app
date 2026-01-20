import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { ContactProvider } from './context/ContactContext';
import axios from 'axios';

// Mock axios
jest.mock('axios');

const mockContacts = [
  {
    id: 1,
    firstName: 'Alfred',
    lastName: 'Kuhlman',
    email: 'alfred@test.com',
    phone: '98989898',
    address: '123 Main St'
  }
];

test('renders All Contacts and fetches data', async () => {
  axios.get.mockResolvedValue({ data: mockContacts });

  render(
    <ContactProvider>
      <App />
    </ContactProvider>
  );

  // Check Header - checks for "Contact App" where "Contact" is strong
  // matches "Contact"
  const linkElement = screen.getAllByText(/Contact/i)[0]; 
  expect(linkElement).toBeInTheDocument();
  
  // Check Home Page Title
  expect(screen.getByText(/All Contacts/i)).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Alfred')).toBeInTheDocument();
    expect(screen.getByText('Kuhlman')).toBeInTheDocument();
  });
});