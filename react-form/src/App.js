import "./App.css";
import React, { useState } from "react";

function App() {
  // set state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subscribe: false,
  });

  // handles data entering input
  const handleData = (event) => {
    setFormData((prevFormData) => {
      const { name, value, type, checked } = event.target;
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  // for submitting form
  const submitForm = (event) => {
    event.preventDefault();
    // shows data
    console.log(formData);
    // message for subscribing
    formData.subscribe &&
      console.log(
        `Thanks for subscribing ${
          formData.firstName.charAt(0).toUpperCase() +
          formData.firstName.slice(1)
        }!`
      );
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          required
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleData}
          placeholder="First Name"
        />
        <br />

        <input
          required
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleData}
          placeholder="Last Name"
        />
        <br />

        <input
          required
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleData}
          placeholder="Email"
        />
        <br />

        <input
          type="checkbox"
          id="subscribe"
          name="subscribe"
          checked={formData.subscribe}
          onChange={handleData}
        />
        <br />

        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
