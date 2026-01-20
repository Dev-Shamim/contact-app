import React, { useState, useEffect, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const ContactModal = ({ show, onClose, contact, isEdit }) => {
  const { updateContact } = useContext(ContactContext);
  const [formData, setFormData] = useState({ 
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  if (!show || !contact) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(contact.id, formData);
    onClose();
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEdit ? 'Edit Contact' : 'Contact Details'}</h5>
            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {isEdit ? (
               <form id="editForm" onSubmit={handleSubmit}>
                 <div className="form-group row mb-3">
                    <label className="col-md-3 col-form-label">First Name</label>
                    <div className="col-md-9">
                        <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
                    </div>
                 </div>
                 <div className="form-group row mb-3">
                    <label className="col-md-3 col-form-label">Last Name</label>
                    <div className="col-md-9">
                        <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
                    </div>
                 </div>
                 <div className="form-group row mb-3">
                    <label className="col-md-3 col-form-label">Email</label>
                    <div className="col-md-9">
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                 </div>
                 <div className="form-group row mb-3">
                    <label className="col-md-3 col-form-label">Phone</label>
                    <div className="col-md-9">
                        <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                    </div>
                 </div>
                 <div className="form-group row mb-3">
                    <label className="col-md-3 col-form-label">Address</label>
                    <div className="col-md-9">
                        <textarea name="address" className="form-control" rows="3" value={formData.address} onChange={handleChange}></textarea>
                    </div>
                 </div>
               </form>
            ) : (
               <div className="card-body">
                 <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label fw-bold">First Name</label>
                   <div className="col-md-9"><p className="form-control-plaintext">{contact.firstName}</p></div>
                 </div>
                 <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label fw-bold">Last Name</label>
                   <div className="col-md-9"><p className="form-control-plaintext">{contact.lastName}</p></div>
                 </div>
                 <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label fw-bold">Email</label>
                   <div className="col-md-9"><p className="form-control-plaintext">{contact.email}</p></div>
                 </div>
                 <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label fw-bold">Phone</label>
                   <div className="col-md-9"><p className="form-control-plaintext">{contact.phone}</p></div>
                 </div>
                 <div className="form-group row mb-3">
                   <label className="col-md-3 col-form-label fw-bold">Address</label>
                   <div className="col-md-9"><p className="form-control-plaintext">{contact.address}</p></div>
                 </div>
               </div>
            )}
          </div>
          <div className="modal-footer">
             {isEdit && <button type="submit" form="editForm" className="btn btn-primary">Update</button>}
             <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
