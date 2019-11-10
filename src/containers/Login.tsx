import React, { useState, FormEvent } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          Email
          <FormControl autoFocus type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          Password
          <FormControl value={password} onChange={(e: any) => setPassword(e.target.value)} type="password" />
        </FormGroup>
        <Button block disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
