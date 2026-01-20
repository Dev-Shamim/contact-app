# Assignment : 05

### Name : Shamim Mian

### Email: (shamimmian91@gmail.com)

##### [ BACKEND LIVE URL]: (https://fakedbjson.onrender.com/)

[ FRONTEND LIVE URL](https://devsham-contact-app.netlify.app/)



##############################################################################################################################################################################

# Contact Application

A comprehensive Contact Management System built with **React.js**. This application allows users to manage their contact list with features like adding, viewing, editing, deleting, searching, and filtering contacts. It uses **Context API** for global state management and **JSON Server** as a mock REST API backend.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)
- [Project Directory Tree](#project-directory-tree)

## Project Overview

This project was developed to demonstrate proficiency in:
- **React.js**: Functional components, Hooks (`useState`, `useEffect`, `useContext`).
- **Context API**: Managing global application state.
- **React Router**: Client-side routing for navigation.
- **CRUD Operations**: Interacting with a REST API (`axios`).
- **Bootstrap 5**: Responsive UI styling.

### Key Features
- **Dashboard**: View all contacts in a tabular format.
- **Search**: Real-time filtering by First Name, Last Name, Email, or Phone.
- **Sorting**: Sort contacts by Name (A-Z) or creation order (Oldest).
- **Modals**: View and Edit contact details without leaving the page.
- **Validation**: Required field checks for forms.

## Installation

Ensure you have **Node.js** and **npm** installed on your machine.

1.  **Clone the repository** (if applicable) or navigate to the project folder:
    ```bash
    cd contact-app
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

## Usage

This application requires two processes to run simultaneously: the JSON Server (Backend) and the React Application (Frontend).

### 1. Start the Backend Server
The application uses `json-server` to mock a REST API. It runs on port **5000**.
```bash
npm run server
```
*   *Note: This watches the `db.json` file for changes.*

### 2. Start the React App
Open a new terminal window/tab and start the frontend development server. It runs on port **3000**.
```bash
npm start
```

The application will automatically open at `http://localhost:3000` in your default browser.

## Configuration

### Environment Variables & Ports
- **Frontend**: Runs on port `3000` by default.
- **Backend**: Configured in `package.json` to run on port `5000`.
  ```json
  "server": "json-server --watch db.json --port 5000"
  ```
- **API Base URL**: The base URL for API requests is defined in `src/context/ContactContext.jsx`:
  ```javascript
  const res = await axios.get('http://localhost:5000/contacts');
  ```

## API Endpoints

The application interacts with the following REST endpoints provided by JSON Server:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/contacts` | Fetch all contacts. |
| `GET` | `/contacts/:id` | Fetch a specific contact by ID. |
| `POST` | `/contacts` | Create a new contact. |
| `PUT` | `/contacts/:id` | Update an existing contact. |
| `DELETE` | `/contacts/:id` | Delete a contact. |

## Database Schema

The data is stored in `db.json`. Below is the schema for a single contact object:

```json
{
  "id": "number | string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string",
  "address": "string"
}
```

**Example Data:**
```json
{
  "contacts": [
    {
      "id": 1,
      "firstName": "Alfred",
      "lastName": "Kuhlman",
      "email": "alfred@test.com",
      "phone": "98989898",
      "address": "123 Main St, New York, NY"
    }
  ]
}
```

## Contributing

Contributions are welcome! If you would like to improve this project:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/YourFeatureName`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeatureName`).
5.  Open a Pull Request.

## License

This project is open-source and available under the **MIT License**.

## Project Directory Tree

```text
contact-app/
├── .gitignore
├── db.json
├── package-lock.json
├── package.json
├── README.md
├── public/
│   ├── _redirects
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.jsx
    ├── App.test.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── assets/
    │   └── css/
    │       ├── bootstrap.min.css
    │       └── custom.css
    ├── components/
    │   ├── ContactModal.jsx
    │   ├── ContactRow.jsx
    │   └── Header.jsx
    ├── context/
    │   └── ContactContext.jsx
    └── pages/
        ├── AddContact.jsx
        └── Home.jsx
```
