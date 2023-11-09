<<<<<<< HEAD
/** @format */

import { useState } from "react";
import React from "react";
import { styled } from "styled-components";
import CustomInput from "./Input";

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;1
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
=======
import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
>>>>>>> origin/master
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

<<<<<<< HEAD
  const emailNotValid = submitted && !enteredEmail.includes("@");
=======
  const emailNotValid = submitted && !enteredEmail.includes('@');
>>>>>>> origin/master
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
<<<<<<< HEAD
      <ControlContainer>
        <CustomInput
          type="email"
          onChange={(event) => handleInputChange("email", event.target.value)}
          invalid={emailNotValid}
          label="Email"
        />

        <CustomInput
          type="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          invalid={passwordNotValid}
          label="Password"
        />
      </ControlContainer>
=======
      <div className="controls">
        <p>
          <label>Email</label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
>>>>>>> origin/master
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
<<<<<<< HEAD
        <Button className="button" onClick={handleLogin}>
          Sign In
        </Button>
=======
        <button className='button' onClick={handleLogin}>Sign In</button>
>>>>>>> origin/master
      </div>
    </div>
  );
}
