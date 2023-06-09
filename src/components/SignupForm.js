import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !password || !confirmPassword) {
      setError('Error: All the fields are mandatory.');
    } else if (password !== confirmPassword) {
      setError('Error: Passwords do not match.');
    } else {
      setSuccess('Successfully Signed Up');
      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setError('');
    }
  };

  return (
    <div>
        <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <div>
          {/* <label>Name</label> */}
          <input placeholder='Full Name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
          {/* <label>Email</label> */}
          <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          {/* <label>Password</label> */}
          <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          {/* <label>Confirm Password</label> */}
          <input placeholder='Confirm Password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
