import { useState } from "react";
import { createAccount } from "../lib/axios";

const CreateAccount = () => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
        <div>
          <input
            autoComplete="off"
            type="email"
            placeholder="email"
            name="email"
            onChange={(e) => handleFormChange(e)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            placeholder="username"
            name="username"
            onChange={(e) => handleFormChange(e)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            placeholder="password"
            name="password"
            onChange={(e) => handleFormChange(e)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => handleFormChange(e)}
          ></input>
          <input
            autoComplete="off"
            type="text"
            placeholder="Last Name"
            name="firstName"
            onChange={(e) => handleFormChange(e)}
          ></input>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            createAccount(formData);
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
