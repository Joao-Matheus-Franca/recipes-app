import React from 'react';

function Login(props) {
  console.log(props);
  return (
    <>
      <h1>Login</h1>
      <label htmlFor="email">
        E-mail:
        <input
          data-testid="email-input"
          type="email"
          name="email"
        />
      </label>
      <br />
      <label htmlFor="password">
        Senha:
        <input
          data-testid="password-input"
          type="password"
          name="password"
        />
      </label>
      <br />
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </>
  );
}

export default Login;
