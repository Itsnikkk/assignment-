import React, { useState } from 'react';

const LoginForm = ({ onComplete }) => {
  const [loginData, setLoginData] = useState({
    loginName: '',
    loginPwd: '',
  });

  const handleLogin = () => {
    // Trigger onComplete with loginData
    onComplete(loginData);
  };

  return (
    <div>
      {/* Implement your login form with input fields */}
      <input
        type="text"
        placeholder="Login ID"
        value={loginData.loginName}
        onChange={(e) => setLoginData({ ...loginData, loginName: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginData.loginPwd}
        onChange={(e) => setLoginData({ ...loginData, loginPwd: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;