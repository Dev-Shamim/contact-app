import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { useNavigate, Link } from 'react-router-dom';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(contact);
    navigate('/');
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-title">
                <strong>Add New Contact</strong>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group row mb-3">
                        <label htmlFor="firstName" className="col-md-3 col-form-label">First Name</label>
                        <div className="col-md-9">
                          <input 
                            type="text" 
                            name="firstName" 
                            id="firstName" 
                            className="form-control"
                            value={contact.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-3">
                        <label htmlFor="lastName" className="col-md-3 col-form-label">Last Name</label>
                        <div className="col-md-9">
                          <input 
                            type="text" 
                            name="lastName" 
                            id="lastName" 
                            className="form-control" 
                            value={contact.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-3">
                        <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-9">
                          <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-3">
                        <label htmlFor="phone" className="col-md-3 col-form-label">Phone</label>
                        <div className="col-md-9">
                          <input 
                            type="text" 
                            name="phone" 
                            id="phone" 
                            className="form-control" 
                            value={contact.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-group row mb-3">
                        <label htmlFor="address" className="col-md-3 col-form-label">Address</label>
                        <div className="col-md-9">
                          <textarea 
                            name="address" 
                            id="address" 
                            rows="3" 
                            className="form-control"
                            value={contact.address}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <hr />
                      <div className="form-group row mb-0">
                        <div className="col-md-9 offset-md-3">
                          <button type="submit" className="btn btn-primary me-2">Save</button>
                          <Link to="/" className="btn btn-outline-secondary">Cancel</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddContact;
