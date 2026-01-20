import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactRow = ({ contact, onView, onEdit }) => {
  const { deleteContact } = useContext(ContactContext);

  const handleDelete = () => {
    if (window.confirm('Are you sure?')) {
      deleteContact(contact.id);
    }
  };

  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td width="150">
        <button 
          className="btn btn-sm btn-circle btn-outline-info me-1" 
          onClick={() => onView(contact)} 
          title="Show"
        >
          <i className="fa fa-eye"></i>
        </button>
        <button 
          className="btn btn-sm btn-circle btn-outline-secondary me-1" 
          onClick={() => onEdit(contact)} 
          title="Edit"
        >
          <i className="fa fa-edit"></i>
        </button>
        <button 
          className="btn btn-sm btn-circle btn-outline-danger" 
          onClick={handleDelete} 
          title="Delete"
        >
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
