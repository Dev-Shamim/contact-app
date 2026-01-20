import React, { useContext, useState } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactRow from '../components/ContactRow';
import ContactModal from '../components/ContactModal';
import { Link } from 'react-router-dom';

const Home = () => {
  const { contacts, loading } = useContext(ContactContext);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("default");
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleView = (contact) => {
    setSelectedContact(contact);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  // Filter & Sort
  const safeContacts = Array.isArray(contacts) ? contacts : [];
  let displayedContacts = safeContacts.filter((c) => {
     if (!c) return false;
     const searchText = search.toLowerCase();
     return (
       (c.firstName && c.firstName.toLowerCase().includes(searchText)) ||
       (c.lastName && c.lastName.toLowerCase().includes(searchText)) ||
       (c.email && c.email.toLowerCase().includes(searchText)) ||
       (c.phone && c.phone.toString().includes(searchText))
     );
  });

  if (sortType === "name-az") {
    displayedContacts.sort((a, b) => a.firstName.localeCompare(b.firstName));
  } else if (sortType === "lastname-az") {
    displayedContacts.sort((a, b) => a.lastName.localeCompare(b.lastName));
  } else if (sortType === "oldest") {
    displayedContacts.sort((a, b) => a.id - b.id);
  }

  return (
    <main className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header card-title">
                <div className="d-flex align-items-center justify-content-between">
                  <h2>All Contacts</h2>
                  <div className="input-group w-50">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="search contact"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn btn-success" type="button">Search</button>
                  </div>
                  <div>
                    <Link to="/add" className="btn btn-success">
                      <i className="fa fa-plus-circle"></i> Add New
                    </Link>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3">
                <div className="fs-2">
                  <i className="fa fa-filter text-success"></i> Filter
                </div>
                <select 
                    className="form-select" 
                    value={sortType} 
                    onChange={(e) => setSortType(e.target.value)}
                    style={{ width: 'auto' }}
                >
                  <option value="default">Default</option>
                  <option value="name-az">First Name (A → Z)</option>
                  <option value="lastname-az">Last Name (A → Z)</option>
                  <option value="oldest">Oldest To First</option>
                </select>
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedContacts.length > 0 ? (
                        displayedContacts.map((contact, index) => (
                            <ContactRow 
                                key={contact.id} 
                                contact={contact} 
                                onView={handleView}
                                onEdit={handleEdit}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No Contact Information</td>
                        </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal 
        show={showModal} 
        onClose={handleCloseModal} 
        contact={selectedContact} 
        isEdit={isEditMode} 
      />
    </main>
  );
};

export default Home;
